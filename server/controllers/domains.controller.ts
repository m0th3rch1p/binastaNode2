import { IAddDomainReq, IGetDomainReq, IUpdateDomainReq } from "@/models/Domain.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IDomain } from "@/models/Domain.model";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response: domains , error} = await execQuery<IDomain[]>("domains", "SELECTALL");
    if (error) {
      res.status(500).json({ message: "error fetching domains" });
    } else if (domains) {
      res.status(200).json({ domains })
    }
};

export const store: RequestHandler = async (req: IAddDomainReq, res: Response) => {
  const domain: IDomain = req.body;
  const { response, error } = await execQuery<{ affectedRows: number }>("domains", "INSERT", ["distributor_id", "name"], [domain.distributor_id, domain.domain]);
  
  if (error) {
    res.status(500).json({ message: "error fetching domains" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateDomainReq, res: Response) => {
  const domain: IDomain = req.body;
  const { response, error } = await execQuery<{ affectedRows: number }>("domains", "UPDATEBYID", ["distributor_id", "name"], [domain.distributor_id, domain.domain]);
  
  if (error) {
    res.status(500).json({ message: "error updating domains" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetDomainReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("domains", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting domains" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};