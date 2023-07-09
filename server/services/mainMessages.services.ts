import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IMainMessage } from "@/models/MainMessage.model";

const TABLE_NAME = "main_messages";
export const fetchMainMessages = async () => {
    const query = `SELECT * FROM main_messages ORDER BY DESC`;
    const { response, error } = await execQuery<[IMainMessage][]>(TABLE_NAME, query);
    return execResponse<IMainMessage[]>(response, error);
};

export const storeMainMessage = async (message: IMainMessage) => {
    const query = `INSERT INTO main_messages(name, email, phone_number, message) VALUES (?, ?, ?, ?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [message.name, message.email, message.phone_number, message.message]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};