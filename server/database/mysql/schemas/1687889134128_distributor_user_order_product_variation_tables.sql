CREATE TABLE IF NOT EXISTS distributor_user_order_product_variations(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  distributor_user_order_id BIGINT UNSIGNED NOT NULL REFERENCES distributor_user_orders(id),
  distributor_product_variation_id BIGINT UNSIGNED NOT NULL REFERENCES distributor_product_variations(product_id),
  quantity INT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);