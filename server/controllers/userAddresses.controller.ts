import { IAddUserAddressReq, IGetUserAddressReq, IUpdateUserAddressReq, IUserAddress } from "@/models/UserAddress.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";

const TABLE_NAME = "user_addresses";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IUserAddress[][]>(TABLE_NAME, "SELECTALL");
    if (error) res.status(500).json({message: 'Error fetching user addresses'});
    else if (response) {
        const [ addresses ] = response;
        res.status(200).json({ addresses });
    }
};

export const fethUserAddresses = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IUserAddress[][]>(TABLE_NAME, `SELECT (address, phone_number, default) FROM ${TABLE_NAME} WHERE user_id = ?`, null, [req.session.user_id]);
    if (error) res.status(500).json({ message: 'Error fetching user addresses' });
    else if (response) {
        const [ addresses ] = response;
        res.status(200).json({ addresses });
    }
}

export const store: RequestHandler = async (req: IAddUserAddressReq, res: Response) => {
    const userAddress: IUserAddress = req.body;

    userAddress.userId = req.session.user_id;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "INSERT", ['user_id', 'address', 'phone_number'], [userAddress.userId, userAddress.address, userAddress.phoneNumber]);
    if (error) res.status(500).json({ message: 'Error saving user address' });
    else if (response) {
        const { affectedRows, insertId } = response;
        res.status(200).json({ status: affectedRows, id: insertId });
    }
};  

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateUserAddressReq, res: Response) => {
    
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetUserAddressReq, res: Response) => {
    
};