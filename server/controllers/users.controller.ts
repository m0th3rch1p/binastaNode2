import bcrypt from 'bcrypt';
import { execQuery } from "@/helpers/queryHelpers";
import { IAddUserReq, IGetUserReq, IUpdateUserReq, IUser } from "@/models/User.model";
import { Request, Response, RequestHandler } from "express";
import { ResultSetHeader } from 'mysql2';

const TABLE_NAME = "users";

export const index: RequestHandler = async (req: Request, res: Response) => {
    const { response, error } = await execQuery<IUser[][]>(TABLE_NAME, "SELECT", ['id', 'email', 'created_at']);
    if(error) res.status(500).json({ message: 'Error fetching users. Please try again' });
    else if (response) {
        const [ users ] = response;
        res.status(200).json({ users: users });
    }
};

export const store: RequestHandler = async (req: IAddUserReq, res: Response) => {
    const user: IUser = req.body;
    user.password = await bcrypt.hash(<string>user.password, 10);
    const { response, error } = await execQuery<[ResultSetHeader]>(TABLE_NAME, "INSERT", ['email', 'password'], [user.email, user.password]);

    if(error) res.status(500).json({ message: 'Error registering user. Please try again' });
    else if (response && response.length) {
        req.session.user_id = response[0].insertId;
        req.session.role = 'user';

        console.log(response);
        res.status(200).json({ status: true });
    }
    
};

export const authenticate: RequestHandler = async (req: IAddUserReq, res: Response) => {
    const user: IUser = req.body;

    const { response, error } = await execQuery<IUser[][]>(TABLE_NAME, "AUTH", null, [user.email]);
    if(error) res.status(500).json({ message: 'Error authenticating user. Please try again' });
    else if (response) {
        const [ userArr ] = response;
        if (userArr.length) {
            const match = await bcrypt.compare(<string>user.password, <string>userArr[0].password);
            if (match) {
                req.session.user_id = userArr[0].id;
                req.session.role = 'user';
                res.status(200).json({ status: true });
            }
            else res.status(401).json({ status:false, message: 'Invalid credentials'});
        } else res.status(401).json({ status:false, message: 'Invalid credentials'});
    } else res.status(500).json({ message: 'Error authenticating user. Please try again' });
};

//@ts-expect-error
export const updateById: RequestHandler = async (req: IUpdateUserReq, res: Response) => {
    const user: IUser = {...req.params, ...req.body};
    
};

//@ts-expect-error
export const destroyById: RequestHandler = async (req: IGetUserReq, res: Response) => {
    const { response, error } = await execQuery<[{affectedRows: number, insertId: number}]>(TABLE_NAME, "DELETEBYID", null, [req.params.id])
    if(error) res.status(500).json({ message: 'Error deleting user. Please try again' });
    else if (response) {
        const { affectedRows } = response[0];
        res.status(200).json({ status: affectedRows });
    }
};