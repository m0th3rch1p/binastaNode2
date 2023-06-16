import bcrypt from 'bcrypt';
import { IAddAdminReq, IGetAdminReq, IUpdateAdminReq } from "@/models/Admin.model";
import { Request, Response, RequestHandler } from "express";
import { execQuery } from "@/helpers/queryHelpers";
import { IAdmin } from "@/models/Admin.model";

const TABLE_NAME = "admins";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IAdmin[][]>(TABLE_NAME, "SELECT", ['id', 'email', 'created_at']);
    if(error) res.status(500).json({ message: 'Error fetching admins. Please try again' });
    else if (response) {
        const [ admins ] = response;
        res.status(200).json({ admins });
    }
};

export const store: RequestHandler = async (req: IAddAdminReq, res: Response) => {
    const admin: IAdmin = req.body;
    admin.password = await bcrypt.hash(<string>admin.password, 10);
    const { response, error } = await execQuery<{affectedRows:number, insertId: number}>(TABLE_NAME, "INSERT", ['email', 'password'], [admin.email, admin.password]);

    if(error) res.status(500).json({ message: 'Error registering admin. Please try again' });
    else if (response) {
        const { affectedRows, insertId } = response;
        req.session.user_id = insertId;
        req.session.role = 'admin';

        res.status(200).json({ status: affectedRows });
    }
};

export const authenticate: RequestHandler = async (req: IAddAdminReq, res: Response) => {
    const admin: IAdmin = req.body;

    const { response, error } = await execQuery<IAdmin[][]>(TABLE_NAME, "AUTH", null, [admin.email]);
    console.log(error);
    if(error) res.status(500).json({ message: 'Error authenticating admin. Please try again' });
    else if (response) {
        const [ adminArr ] = response;
        if (adminArr.length) {
            const match = await bcrypt.compare(admin.password as string, adminArr[0].password as string);
            if (match) {
                req.session.user_id = adminArr[0].id;
                req.session.role = 'admin';
                res.status(200).json({ status: true });
            }
            else res.status(401).json({ status:false, message: 'Invalid credentials'});
        } else res.status(401).json({ status:false, message: 'Invalid credentials'});
    } else res.status(500).json({ message: 'Error authenticating admin. Please try again' });
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateAdminReq, res: Response) => {
    
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetAdminReq, res: Response) => {
    
};