import { IAddDistributorOrderReq, IGetDistributorOrderReq, IUpdateDistributorOrderReq } from "@/models/DistributorOrder.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDistributorOrder } from "@/models/DistributorOrder.model";
import { makeRef } from "@/helpers/StrHelper";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: distributororders , error} = await execQuery<IDistributorOrder[]>("distributor_orders", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching distributororders" });
    } else if (distributororders) {
      res.status(200).json({ distributororders })
    }
};

export const fetchDistributorOrders: RequestHandler = async (req: Request, res: Response) => {
  const { response: distributororders , error} = await execQuery<IDistributorOrder[][]>("distributor_orders", `
    SELECT do.ref, do.status, do.created_at FROM distributor_orders do
    INNER JOIN distributor_address da ON da.id = do.distributor_id
    WHERE do.distributor_id = ? 
  `, null, [req.session.user_id]);

  if (error) {
    res.status(500).json({ message: "error fetching distributororders" });
  } else if (distributororders) {

    res.status(200).json({ orders: distributororders[0] });
  }
}

export const fetchDistributorOrderByRef: RequestHandler = async (req: Request, res: Response) => {
  const { response: distributororders , error} = await execQuery<IDistributorOrder[][]>("distributor_orders", `
    SELECT do.ref, do.status, do.created_at, dop.name, dop.slug, pc.name, pc.slug FROM distributor_orders do
    INNER JOIN distributor_address da ON da.id = do.distributor_id
    INNER JOIN distributor_order_packages dop ON dop.order_id = do.id
    INNER JOIN package_categories pc ON pc.id = dop.package_id
    WHERE do.distributor_id = ?
    LIMIT 1 
  `, null, [req.session.user_id]);

  if (error) {
    res.status(500).json({ message: "error fetching distributororders" });
  } else if (distributororders) {
    res.status(200).json({ order: distributororders[0] });
  }
};

export const store: RequestHandler = async (req: IAddDistributorOrderReq, res: Response) => {
  const distributorOrder: IDistributorOrder = req.body;
  distributorOrder.ref = makeRef(6);

  const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("distributor_orders", "INSERT", ["distributor_id", "distributor_address_id", "ref"], [distributorOrder.distributorId, distributorOrder.distributorAddressId, distributorOrder.ref]);
  if (error) {
    res.status(500).json({ message: "error fetching distributororders" });
  } else if (response?.affectedRows) {
    const orderPackages = [];
    for (const orderPackage of req.body.packages) {
      orderPackages.push([response.insertId, orderPackage[0], orderPackage[1]]);
    }

    const { response: orderPacakgesResponse, error: orderPackagesError } = await execQuery<{ affectedRows: number, insertId: number}>("distributor_order_packages", "BATCHINSERT", ["distributor_order_id", "package_id", "quantity"], orderPackages);
    
    res.status(200).json({ status: orderPacakgesResponse?.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDistributorOrderReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_orders", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating distributororders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDistributorOrderReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("distributor_orders", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting distributororders" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};