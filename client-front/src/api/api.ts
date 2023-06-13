import axios, { AxiosInstance, Cancel } from 'axios';
import { ApiRequestConfig, WithAbortFn, ApiExecutor, ApiExecutorArgs, ApiError } from "./api.types";

const axiosParams = {
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:8080" : "/"
};

const axiosInstance = axios.create(axiosParams);

export const didAbort = (error: unknown): error is Cancel & { aborted: boolean } => axios.isCancel(error);

const getCancelSource = () => axios.CancelToken.source();

export const isApiError = (error: unknown): error is ApiError => axios.isAxiosError(error);

const withAbort = <T>(fn: WithAbortFn) => {
    const executer: ApiExecutor<T> = async (...args: ApiExecutorArgs) => {
        const originalConfig = args[args.length - 1] as ApiRequestConfig;
        const { abort, ...config } = originalConfig;

        if (typeof abort === 'function') {
            const { cancel, token } = getCancelSource();
            config.cancelToken = token;
            abort(cancel);
        }
        
        try {
            if (args.length > 2) {
                const [url, body] = args;
                return await fn<T>(url, body, config)
            } else {
                const [url] = args;
                return await fn<T>(url, config);
            }
        } catch (error) {
            console.log("api error", error);
            if (didAbort(error)) {
                error.aborted = true;
            }
            throw error;
        }

    }
    return executer;
}

const api = (axios: AxiosInstance) => {
    return {
        get: <T>(url: string, config: ApiRequestConfig = {}) => withAbort<T>(axios.get)(url, config),
        delete: <T>(url: string, config: ApiRequestConfig = {}) => withAbort<T>(axios.get)(url, config),
        post: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) => withAbort<T>(axios.get)(url, body, config),
        patch: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) => withAbort<T>(axios.get)(url, body, config),
        put: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) => withAbort<T>(axios.get)(url, body, config),
    };
};

export default api(axiosInstance);

