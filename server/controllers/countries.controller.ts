import { slugify } from "@/helpers/StrHelper";
import { execQuery } from "@/helpers/queryHelpers";
import { IAddCountryReq, ICountry, IGetCountryReq, IUpdateCountryReq } from "@/models/Country.model";
import { Request, Response, RequestHandler } from "express";
import * as countriesServices from "@/services/countries.services"

export const index: RequestHandler = async (req: Request, res: Response) => {
    const countries = await countriesServices.fetchCountries("admin");
    if (!countries) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ countries });
    }
};

export const fetchDistributorCountries: RequestHandler = async (req: Request, res: Response) => {
    const countries = await countriesServices.fetchCountries("distributor");
    if (!countries) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ countries });
    }
}

export const fetchDistributorCountryBySlug: RequestHandler = async (req: Request, res: Response) => {
    const countries = await countriesServices.fetchCountriesBySlug(req.params.slug, "distributor");
    if (!countries) {
        res.status(500).json({ message: "Error fetching countries" });
    } else {
        res.status(200).json({ countries });
    }
}

export const store: RequestHandler = async (req: IAddCountryReq, res: Response) => {
    const country: ICountry = req.body;
    const results = await countriesServices.storeCountry(country);
    if (!results) {
        res.status(500).json({ message: "Error storing country" });
    } else {
        res.status(200).json(results);
    }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateCountryReq, res: Response) => {
    const country: ICountry = req.body;
    country.slug = slugify(<string>country.name);
    const results = countriesServices.updateCountryById(country);
    if (!results) {
        res.status(500).json({ message: "Error update country by id" });
    } else {
        res.status(200).json(results);
    }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetCountryReq, res: Response) => {
    const results = countriesServices.destroyCountryById(req.params.id as number);
    if (!results) {
        res.status(500).json({ message: "Error deleting country by id" });
    } else {
        res.status(200).json(results);
    }
};