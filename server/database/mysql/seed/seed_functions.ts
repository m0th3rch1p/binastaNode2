import { getFirstLastInsertedProductVariationId } from './../../../services/productVariation.services';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { UserOrder } from "@/types/user.types";
import { IUserModel } from '@/models/user.model';
import { getFirstLastInsertedUserId } from '@/services/user.service';
import { IUserAddressModel } from '@/models/userAddress.model';
import { ICountryModel } from '@/models/country.model';
import { IProductModel } from '@/models/product.model';
import { IProductCategoryModel } from '@/models/productCategory.model';
import { makeRef, slugify } from '@/helpers/StrHelper';
import { getFirstLastInsertedProductCategoryId } from '@/services/productCategory.services';
import { ProductVariation } from '@/types/productVariation.types';
import { PackageCategory } from '@/types/packageCategory.types';
import { Package } from '@/types/package.types';
import { getFirstLastInsertedPackageCategoryId } from '@/services/packageCategory.services';
import { getRandomUserAddress } from '@/services/userAddress.services';
import { Tenant, TenantAddress } from '@/types/tenant.types';
import { getFirstLastInsertedCountryId } from '@/services/country.services';
import { getFirstLastInsertedTenantId } from '@/services/tenant.services';

export const generateUser = () => {
    const user: IUserModel = {
        password: bcrypt.hashSync(faker.random.alphaNumeric(), 10),
        user: {
            id: undefined,
            email: faker.internet.email(),
            is_active: undefined
        }
    }
    
    return user;
};

export const generateUserAddress = async () => {
    const [ results ] = await getFirstLastInsertedUserId();
    if (!results[0].lastId || !results[0].firstId) {
        console.error(`Users cannot be found in table.`);
        return null;
    }
    const userAddress: IUserAddressModel = {
        user_id: Math.floor(Math.random() * (results[0].lastId - results[0].firstId + 1) + results[0].firstId),
        address: {
            address: faker.address.city(),
            phoneNumber: faker.phone.number("254#########")
        }
    };

    return userAddress;
};

export const generateCountry = () => {
    const country: ICountryModel = {
        country: {
            countryName: faker.address.country()
        }
    };

    return country;
};

export const generateProductCategory = () => {
    const categoryName = faker.commerce.productAdjective();
    const productCategory: IProductCategoryModel = {
        category: {
            name: categoryName,
            slug: slugify(categoryName),
        }
    };

    return productCategory;
};

export const generateProduct = async () => {
    const [ results ] = await getFirstLastInsertedProductCategoryId();
    const productName = faker.commerce.productName();
    const product: IProductModel = {
        category_id: Math.floor(Math.random() * (results[0].lastId - results[0].firstId) + results[0].firstId),
        product: {
            name: productName,
            slug: slugify(productName),
            description: faker.commerce.productDescription(),            
        }
    }; 
    return product;
};

export const generateProductVariations = (productId: number) => {    
    const buying_price = parseFloat(faker.commerce.price(100));
    const wholesale_price = parseFloat(faker.commerce.price(buying_price));
    const sale_price = parseFloat(faker.commerce.price(wholesale_price));
    const recommended_price = parseFloat(faker.commerce.price(sale_price));

    const productVariation: ProductVariation = {
        product_id: productId,
        variation: `${Math.floor(Math.random() * (1000))}mg`,
        buying_price,
        sale_price,
        wholesale_price,
        recommended_price,
        wholesale_minimum: Math.floor(Math.random() * 100),
        stock: Math.floor(Math.random() * 1000),
        sold: Math.floor(Math.random() * 500)       
    }
    return productVariation;
};

export const generatePackageCategory = () => {
    const category_name = faker.commerce.productAdjective();
    const category_slug = slugify(category_name);
    const packageCategory: PackageCategory = {
        category_name,
        category_slug
    };
    return packageCategory;
};

export const generatePackage = async () => {
    const [ results ] = await getFirstLastInsertedPackageCategoryId();
    
    const package_name = faker.commerce.productAdjective();
    const package_slug = slugify(package_name);
    const _package: Package = {
        package_name,
        package_slug,
        package_category_id: Math.floor(Math.random() * (results[0].lastId - results[0].firstId + 1) + results[0].firstId),
        description: faker.commerce.productDescription(),
        amount: 0,
    };

    return _package;
};

export const generatePackageProductVariations = async (id: number) => {
    const [ results ] = await getFirstLastInsertedProductVariationId();
    return {
        product_variation_id: (Math.random() * (results[0].lastId - results[0].firstId + 1) + results[0].firstId)
    }
};

export const generateUserOrders = async () => {
    const [ userResults ] = await getFirstLastInsertedUserId();
    const userId = userResults[0].lastId;

    const [ userAddressResults ] = await getRandomUserAddress(userId);
    const userOrder: UserOrder = {
        user_id: Math.floor(Math.random() * (userResults[0].lastId - userResults[0].firstId + 1) + userResults[0].firstId),
        user_address_id: userAddressResults[0].id,
        ref: makeRef(5),
        status: 'pending',
        amount: 0
    };

    return userOrder;
};

export const generateUserOrderProductVariation = async (orderId: number) => {
    const [ results ] = await getFirstLastInsertedProductVariationId();
    return [orderId, Math.random() * (results[0].lastId - results[0].firstId + 1) + results[0].firstId, Math.random() % 101]
};

export const generateTenants = async () => {
    const [ results ] = await getFirstLastInsertedCountryId();
    
    const tenant: Tenant = {
        country_id: Math.random() * (results[0].lastId - results[0].firstId + 1) + results[0].firstId,
        store_name: faker.internet.domainWord(),
        full_name: faker.name.fullName(),
        gender: faker.name.sex(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password(), 10),
        phone_number: faker.phone.number("2547########"),
        referal_code: makeRef(5),
    };

    return tenant;
}

export const generateTenantAddress = async () => {
    const [ results ] = await getFirstLastInsertedTenantId();
    const tenantAddress: TenantAddress = {
        tenant_id: Math.random() * (results[0].lastId - results[0].firstId + 1) + results[0].firstId,
        address: faker.address.city(),
        phone_number: faker.phone.number()
    };

    return tenantAddress;
};
