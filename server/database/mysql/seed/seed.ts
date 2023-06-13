import * as seedFunctions from './seed_functions';

import { db_init } from '@/database';

import { registerUser } from '@/services/user.service';
import { insert as storeUserAddress } from '@/services/userAddress.services';
import { store as storeCountry } from '@/services/country.services';
import { store as storeProductCategory } from '@/services/productCategory.services';
import { store as storeProduct } from '@/services/product.services';
import { store as storeProductVariation } from '@/services/productVariation.services';
import { store as storePackageCategory } from '@/services/packageCategory.services';
import { insert as storePackage } from '@/services/package.services';
import { addProductVariation as storePackageProductVariaion } from '@/services/package.services';
import { store as storeTenant } from '@/services/tenant.services';
import { store as storeTanantAddress } from '@/services/tenantAddress.services';

import { IUserAddressModel } from '@/models/userAddress.model';
import { Country } from '@/types/country.types';
import { ICountryModel } from '@/models/country.model';
import { IUserModel } from '@/models/user.model';
import { Product } from '@/types/product.types';
import { IProductModel } from '@/models/product.model';
import { IProductVariationModel } from '@/models/productVariation.model';
import { ProductVariation } from '@/types/productVariation.types';
import { PackageCategory } from '@/types/packageCategory.types';
import { Package } from '@/types/package.types';
import { Tenant, TenantAddress } from '@/types/tenant.types';

db_init()

const seedUsers = async (records: number) : Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const user: IUserModel = seedFunctions.generateUser();
            const [ results ] = await registerUser(user);
    
            if (!results.affectedRows) throw new Error("Error registering user:");
        }
        console.log(`User seeding comlete.\nRecords Seeded: ${records}`);   
    } catch (error) {
        console.error(`Error seeding users:\n${error}`);
    }
};

const seedUserAddresses = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const userAddress: IUserAddressModel | null = await seedFunctions.generateUserAddress();
            if (!userAddress) break;
            
            const [ results ] = await storeUserAddress(userAddress);
            if (!results.affectedRows) throw new Error(`Error seeding user address: ${userAddress.address.address}`);
        }
        console.log(`Done seeding user addresses with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding user addresses:\n${error}`);
    }
};

const seedCountries = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const country: ICountryModel | null = seedFunctions.generateCountry(); 
            if (!country) break;
            
            const [ results ] = await storeCountry(country);
            if (!results.affectedRows) throw new Error(`Error seeding user address: ${country.country.countryName}`);
        }
        console.log(`Done seeding countries with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding countries:\n${error}`);
    }
};

const seedProductCategories = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const productCategory = seedFunctions.generateProductCategory();
            const [ results ] = await storeProductCategory(productCategory);
            
            if (!results.affectedRows) throw new Error(`Error seeding user address: ${productCategory.category.name}`);
        }
        console.log(`Done seeding product categories with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding countries:\n${error}`);
    }
};

const seedProducts = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const product: IProductModel = await seedFunctions.generateProduct();

            const [ results ] = await storeProduct(product);
            if (!results.affectedRows) throw new Error(`Error seeding product: ${product.product.name}`);
            
            //Seed Random between 1 - 10 Product Variations with same number of records
            for (let index = 0; index < (Math.floor(Math.random() * (10 - 1) + 1)); index++) {
                const productVariation: ProductVariation = seedFunctions.generateProductVariations(results.insertId); 
                const [ variationResults ] = await storeProductVariation(productVariation);
               
                if (!results.affectedRows) throw new Error(`Error seeding product variation: ${productVariation.variation}`);
            }
        }   
        console.log(`Done seeding products with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding products:\n${error}`);
    }
};

const seedPackageCategories = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const packageCategory: PackageCategory = seedFunctions.generatePackageCategory();
            const [ results ] = await storePackageCategory(packageCategory);

            if (!results.affectedRows) throw new Error(`Error seeding product: ${packageCategory.category_name}`);
        }   
        console.log(`Done seeding package categories with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding product categories:\n${error}`);
    }
};

const seedPackages = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const _package: Package = await seedFunctions.generatePackage();
            const [ results ] = await storePackage(_package);

            if (!results.affectedRows) throw new Error(`Error seeding package: ${_package.package_name}`);

            const productVariations = [];
            for (let index = 0; index < (Math.floor(Math.random() * 11)); index++) {
                const packageVariation = await seedFunctions.generatePackageProductVariations(results.insertId);
                productVariations.push([<Package["id"]>results.insertId, <ProductVariation["id"]>packageVariation.product_variation_id]);
            }

            //@ts-expect-error
            if (productVariations && productVariations.length) await storePackageProductVariaion(productVariations);
        }   
        console.log(`Done seeding packages with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding packagess:\n${error}`);
    }
};

const seedTenants = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const tenant: Tenant = await seedFunctions.generateTenants();
            const [ results ] = await storeTenant(tenant);

            if (!results.affectedRows) throw new Error(`Error seeding package: ${tenant.full_name}`);
        }   
        console.log(`Done seeding tenants with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding tenants:\n${error}`);
    }
};

const seedTenantAddresses = async (records: number): Promise<void> => {
    try {
        for (let index = 0; index < records; index++) {
            const tenantAddress: TenantAddress = await seedFunctions.generateTenantAddress();
            const [ results ] = await storeTanantAddress(tenantAddress);

            if (!results.affectedRows) throw new Error(`Error seeding tenant address: ${tenantAddress.address}`);
        }   
        console.log(`Done seeding tenant addresses with ${records} records`);   
    } catch (error) {
        console.error(`Error seeding tenant addressess:\n${error}`);
    }
};

try {
    if (!process.env.npm_config_records) throw new Error(`Usage: node run seed [--seedName=name] --seedRecords=number of records`);

    switch (process.env.npm_config_seedName) {
        case 'users':
            seedUsers(parseInt(process.env.npm_config_records));
            break;
        case 'userAddresses':
            seedUserAddresses(parseInt(process.env.npm_config_records))
            break;
        case 'countries':
            seedCountries(parseInt(process.env.npm_config_records));
            break;
        case 'productCategories':
            seedProductCategories(parseInt(process.env.npm_config_records));
            break;
        case 'products':
            seedProducts(parseInt(process.env.npm_config_records));
            break;
        case 'packageCategories':
            seedPackageCategories(parseInt(process.env.npm_config_records));
            break;
        case 'packages':
            seedPackages(parseInt(process.env.npm_config_records));
            break;
        case 'tenants':
            seedTenants(parseInt(process.env.npm_config_records));
            break;
        case 'tenantAddresses':
            seedTenantAddresses(parseInt(process.env.npm_config_records));
            break;
        default:
            seedUsers(parseInt(process.env.npm_config_records));
            seedUserAddresses(parseInt(process.env.npm_config_records))
            seedCountries(parseInt(process.env.npm_config_records));
            seedProductCategories(parseInt(process.env.npm_config_records));
            seedProducts(parseInt(process.env.npm_config_records));
            seedPackageCategories(parseInt(process.env.npm_config_records));
            seedPackages(parseInt(process.env.npm_config_records));
            seedTenants(parseInt(process.env.npm_config_records));
            seedTenantAddresses(parseInt(process.env.npm_config_records));
            break;
    }   
} catch (error) {
    console.error(error);    
}
