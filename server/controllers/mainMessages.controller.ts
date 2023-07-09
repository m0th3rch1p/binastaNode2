import { IAddMainMessageReq, IGetMainMessageReq, IUpdateMainMessageReq } from "@/models/MainMessage.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IMainMessage } from "@/models/MainMessage.model";
import * as mainMessagesServices from "@/services/mainMessages.services";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const messages = await mainMessagesServices.fetchMainMessages();
    if (!messages) {
      res.status(500).json({ message: "error fetching mainmessages" });
      return;
    } 

    res.status(200).json({ messages })
};

export const store: RequestHandler = async (req: IAddMainMessageReq, res: Response) => {
  const message: IMainMessage = req.body;
  const response = await mainMessagesServices.storeMainMessage(message);
  
  if (!response) {
    res.status(500).json({ message: "error fetching mainmessages" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateMainMessageReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("main_messages", "UPDATEBYID", [], []);
  
  if (error) {
    res.status(500).json({ message: "error updating mainmessages" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetMainMessageReq, res: Response) => {
  const { response, error } = await execQuery<{ affectedRows: number }>("main_messages", "DELETEBYID", ["id"], [req.params.id]);
  
  if (error) {
    res.status(500).json({ message: "error deleting mainmessages" });
  } else if (response) {
    res.status(200).json({ status: response.affectedRows });
  }
};