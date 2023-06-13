import api from "./api";

export type Address = {
    id: number,
    address: string,
    phone_number: string
};

export const store = (address: Address) => api.post('/addresses', address);
