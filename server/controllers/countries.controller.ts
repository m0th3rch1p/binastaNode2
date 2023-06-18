import { slugify } from "@/helpers/StrHelper";
import { execQuery } from "@/helpers/queryHelpers";
import { IAddCountryReq, ICountry, IGetCountryReq, IUpdateCountryReq } from "@/models/Country.model";
import { Request, Response, RequestHandler } from "express";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: countries, error } = await execQuery<ICountry[][]>("countries", "SELECTALL"); 
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ countries });
    }
};

export const fetchDistributorCountries: RequestHandler = async (req: Request, res: Response) => {
    const { response: countries, error } = await execQuery<ICountry[][]>("countries", "SELECT", ["name", "country_code"]); 
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ countries });
    }
}

export const fetchDistributorCountryBySlug: RequestHandler = async (req: Request, res: Response) => {
    const { response: countries, error } = await execQuery<ICountry[][]>("countries", `
        
    `); 
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ countries });
    }
}

export const store: RequestHandler = async (req: IAddCountryReq, res: Response) => {
    const country: ICountry = req.body;
    country.slug = slugify(country.name as string);
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("countries", "INSERT", ['name', 'slug', 'country_code'], [country.name, country.slug, country.countryCode]); 
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ status: response?.affectedRows });
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateCountryReq, res: Response) => {
    const country: ICountry = req.body;
    country.slug = slugify(<string>country.name);
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("countries", "UPDATEBYID", ['name', 'slug', 'country_code'], [country.name, country.slug, country.countryCode, country.id]); 
    if (error) {
        res.status(500).json({ message: "Error updating country" });
    } else {
        res.status(200).json({ status: response?.affectedRows });
    }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetCountryReq, res: Response) => {
    const country: ICountry = { ...req.params, ...req.body };
    country.slug = slugify(<string>country.name);
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("countries", "DELETEBYID", ['id'], [country.name, country.slug, country.countryCode, country.id]); 
    if (error) {
        res.status(500).json({ message: "Error deleting countries" });
    } else {
        res.status(200).json({ status: response?.affectedRows });
    }
};