-- RLS POLICIES WITH PROCEDURES
-- DELIMITER |
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_products (IN tenantId BIGINT)
-- BEGIN
--     SELECT 
--         pt.product_name as product_name, 
--         pt.product_slug as product_slug, 
--         pt.product_description as product_description, 
--         pct.category_name as category_name, 
--         pvt.variation as product_variations, 
--         pvt.sale_price as sale_price 
--     FROM tenant_products AS tp
--     INNER JOIN products AS pt ON tp.product_id = pt.id
--     INNER JOIN product_categories AS pct ON pt.category_id = pct.id
--     INNER JOIN product_variations AS pv ON pv.product_id = pt.id
--     WHERE 
--         tp.tenant_id = tenantId AND 
--         tp.stock > 0 AND 
--         tp.published = true AND 
--         tp.is_active = true;
-- END; |
-- DELIMITER ;

-- DELIMITER |
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_product_by_slug (IN slug VARCHAR(255), IN tenantId BIGINT)
-- BEGIN
--     SELECT
--         pt.product_name as product_name, 
--         pt.product_slug as product_slug, 
--         pt.product_description as product_description, 
--         pct.category_name as category_name, 
--         pvt.variation as product_variations, 
--         pvt.sale_price as sale_price
--     FROM tenant_products AS tp
--     INNER JOIN products AS pt ON tp.product_id = pt.id
--     INNER JOIN product_categories AS pct ON pt.category_id = pct.id
--     INNER JOIN product_variations AS pv ON pv.product_id = pt.id
--     WHERE 
--         tp.tenant_id = tenantId AND 
--         tp.stock > 0 AND 
--         tp.published = true AND 
--         tp.is_active = true AND
--         pt.product_slug = slug; 
-- END; |
-- DELIMITER ;

-- DELIMITER |
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_authentication (IN userEmail VARCHAR(255), IN tenantId BIGINT)
-- BEGIN
--     SELECT tu.id, tu.email 
--     FROM tenant_users AS tu 
--     WHERE tu.tenant_id = tenantId AND tu.email = userEmail;
-- END; |
-- DELIMITER ;

-- DELIMITER |
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_user_addresses (IN userId BIGINT, IN tenantId BIGINT)
-- BEGIN
--     SELECT tua.address, tua.phone_number 
--     FROM tenant_user_addresses AS tua
--     INNER JOIN tenant_users AS tu ON tu.tenant_id = tenantId
--     WHERE tua.tenant_user_id = userId;
-- END; |
-- DELIMITER ;

-- DELIMITER | 
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_user_orders (IN userId BIGINT, IN tenantId BIGINT)
-- BEGIN
--     SELECT tuo.ref, tuo.status, tuo.amount, tuo.created_at 
--     FROM tenant_user_orders AS tuo
--     INNER JOIN tenant_user_addresses AS tua ON tuo.tenant_user_address_id = tua.id
--     INNER JOIN tenant_users AS tu ON tu.tenant_id = tenantId
--     WHERE tuo.tenant_user_id = userId;
-- END ; |
-- DELIMITER ;

-- DELIMITER |
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_user_order_products (IN userId BIGINT, IN orderRef VARCHAR(255), IN tenantId BIGINT)
-- BEGIN
--     SELECT tuo.ref, tuo.status, tuo.amount
--     FROM tenant_user_orders AS tuo
--     INNER JOIN tenant_user_order_product_variations AS tuopv ON tuopv.tenant_user_order_id = tuo.id
--     INNER JOIN product_variations AS pv ON pv.id = tuopv.product_variation_id
--     INNER JOIN tenant_products AS tp ON tp.id = pv.product_id
--     WHERE tuo.user_id = userId 
--     AND tuo.tenant_id = tenantId 
--     AND tuo.ref = orderRef;
-- END; |
-- DELIMITER ;

-- DELIMITER |
-- CREATE PROCEDURE IF NOT EXISTS get_tenant_shop_user_transactions (IN userId BIGINT, IN tenantId BIGINT)
-- BEGIN
--     SELECT tut.receipt, tut.payment_type, tuo.ref, tuo.amount 
--     FROM tenant_user_transactions AS tut
--     INNER JOIN tenant_user_orders AS tuo ON tut.tenant_user_order_id = tuo.id
--     WHERE tut.tenant_id = tenantId
--     AND tuo.tenant_user_id = userId;
-- END; |
-- DELIMITER ;

-- Updates The User Order Amount
DELIMITER |
CREATE TRIGGER IF NOT EXISTS set_order_amount AFTER INSERT ON order_product_variations FOR EACH ROW
BEGIN
DECLARE order_amount INT DEFAULT 0;
DECLARE bp INT;
(SELECT buy_price INTO bp FROM product_variations pv WHERE pv.id = NEW.product_variation_id);
SET order_amount = order_amount + (bp * NEW.quantity);
UPDATE orders o SET o.amount = order_amount WHERE o.id = NEW.order_id;
END; |
DELIMITER ;

-- Updates Packages Amount
-- DELIMITER |
-- CREATE TRIGGER IF NOT EXISTS set_package_amount AFTER INSERT ON package_product_variations FOR EACH ROW
-- BEGIN
-- DECLARE package_amount INT DEFAULT 0;
-- DECLARE wp DECIMAL;
-- DECLARE wm INT;
-- (SELECT wholesale_price, wholesale_minimum INTO wp, wm FROM product_variations pv WHERE pv.id = NEW.product_variation_id);
-- SET package_amount = package_amount + (wp * wm);
-- UPDATE packages p SET p.amount = package_amount WHERE p.id = NEW.package_id;
-- END; |
-- DELIMITER ;

-- -- Updates The Tenant Order Amount and Adds Tenant Products
-- DELIMITER |
-- CREATE TRIGGER IF NOT EXISTS set_tenant_order_amount AFTER INSERT ON tenant_order_packages FOR EACH ROW
-- BEGIN
-- DECLARE pId BIGINT DEFAULT NULL; -- Package ID
-- DECLARE pAmount INT DEFAULT NULL; -- Package Amount
-- DECLARE tId BIGINT DEFAULT  0; -- Tenant Id
-- DECLARE oAmount INT DEFAULT 0; -- Tenant Order Amount
-- DECLARE tPId BIGINT DEFAULT NULL; -- Tenant Product iD
-- DECLARE pPId BIGINT DEFAULT NULL; -- Package Product Id
-- DECLARE tpStock INT DEFAULT 0; -- Tenant Product Stock
-- DECLARE cStock INT; -- Current Stock

-- (SELECT amount, product_id INTO pAmount, pPId FROM packages p  WHERE p.id = NEW.package_id);

-- (
--     SELECT tot.tenant_id INTO tId 
--     FROM tenant_order_packages AS topt 
--     INNER JOIN tenant_orders AS tot ON tot.id = topt.tenant_order_id 
--     WHERE topt.id = NEW.id
-- );

-- (
--     SELECT id, stock INTO tPId, cStock 
--     FROM tenant_products AS tp 
--     WHERE tp.id = pPId AND tp.tenant_id = tId
-- );

-- IF tPId IS NOT NULL THEN
--     SET tpStock = cStock + NEW.quantity;
--     UPDATE tenant_products AS tp SET tp.stock = tpStock WHERE tp.product_id = pPId AND tp.tenant_id = tId;
-- ELSE
--     INSERT INTO tenant_products(tenant_id, product_id, stock) VALUES (tId, pPId, NEW.quantity);
-- END IF;


-- SET oAmount = oAmount + (pAmount * NEW.quantity);
-- UPDATE tenant_orders SET amount = oAmount WHERE id = NEW.tenant_order_id;

-- END; |
-- DELIMITER ;