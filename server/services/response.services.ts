import logger from "@/helpers/logger";

type storeResponse = { affectedRows: number, insertId: number };

export const execResponse = <T>(response: [unknown][] | storeResponse |  null, error: unknown) => {
    if (error) {
        logger.error("[-] response error", error);
        return null;
    }

    if (!Array.isArray(response)) {
        return response ? <T>response : null;
    }

    return <T> response?.[0] 
};