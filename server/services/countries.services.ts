import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { ICountry } from "@/models/Country.model";
import { slugify } from "@/helpers/StrHelper";

const TABLE_NAME = "countries";

export type Client = "admin" | "distributor";

export const fetchCountries = async (client: Client) => {
    const { response, error } = client === "admin" ? await execQuery<[ICountry[]][]>(TABLE_NAME, "SELECTALL") : await execQuery<[ICountry[]][]>(TABLE_NAME, "SELECT id, name, country_code FROM countries", null, null); 
    return execResponse<ICountry[]>(response, error);
};

export const fetchCountriesBySlug = async (slug: string, client: Client) => {
    const { response, error } = client === "admin" ? await execQuery<[ICountry[]][]>(TABLE_NAME, "SELECT id, name, country_code, created_at FROM countries WHERE slug=?", null, [slug]) : await execQuery<[ICountry[]][]>(TABLE_NAME, "SELECT id, name, country_code FROM countries WHERE slug=?", null, [slug]); 
    return execResponse<ICountry[]>(response, error);
};

export const storeCountry = async (country: ICountry) => {
    country.slug = slugify(country.name as string);
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("countries", "INSERT", ['name', 'slug', 'country_code'], [country.name, country.slug, country.country_code]); 
    return execResponse(response, error);
};

export const updateCountryById = async (country: ICountry) => {
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("countries", "UPDATEBYID", ['name', 'slug', 'country_code'], [country.name, country.slug, country.country_code, country.id]); 
    return execResponse(response, error);
};

export const destroyCountryById = async (id: number) => {
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("countries", "DELETEBYID", ['id'], [id]); 
    return execResponse(response, error);
}

export const countriesStats = async () => {

};
