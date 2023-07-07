import { IAddDistributorProductVariationReq, IGetDistributorProductVariationReq, IUpdateDistributorProductVariationReq } from "@/models/DistributorProductVariation.model";
import { Request, Response, RequestHandler } from "express";
import * as distributorProductVariationServices from "@/services/distributorProductVariations.services";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorProductVariation } from "@/models/DistributorProductVariation.model";
import { fetchProductsBySlug } from "@/services/products.services";
import { fetchProductImagesByProductId } from "@/services/productImages.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributorproductvariations , error} = await execQuery<IDistributorProductVariation[]>("distributor_product_variations", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributorproductvariations" });
    } else if (distributorproductvariations) {
      res.status(200).json({ distributorproductvariations })
    }
};

export const fetchDistributorProductVariations: RequestHandler = async (req: Request, res: Response) => {
  const products = await distributorProductVariationServices.fetchDistributorProductVariations("distributor", req.session.user_id as number);
  if (!products) {
    res.status(500).json({ message: 'Error fetching distributor product variations' });
  } else {
    res.status(200).json({ products });
  }
}

export const fetchDistributorProductVariationsByProductSlug: RequestHandler = async (req: Request, res: Response) => {
  const product = await fetchProductsBySlug(req.params.slug);
  if (!product) {
    res.status(500).json({ message: 'Error fetching distributor product' });
    return;
  } else if (!product.length) {
    res.status(404).json({ message: 'Product not found' });
    return;  
  }

  const productImages = await fetchProductImagesByProductId(product[0].id as number);
  console.log(productImages);
  if (productImages) {
      product[0].images = productImages;
  }

  const productVaraitions = await distributorProductVariationServices.fetchDistributorProductVariationsByProductById("distributor", req.session.user_id as number, product[0].id as number);
  if (!productVaraitions) {
    res.status(500).json({ message: 'Error fetching distributor product' });
    return;
  }
  
  product[0].variations = productVaraitions;

  res.status(200).json({ product: product[0] });
};

export const store: RequestHandler = async (req: IAddDistributorProductVariationReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_product_variations", "INSERT", [], []);
  
  if (error) {
    res.status(500).json({ message: "error fetching distributorproductvariations" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorProductVariationReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_product_variations", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributorproductvariations" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorProductVariationReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_product_variations", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributorproductvariations" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};