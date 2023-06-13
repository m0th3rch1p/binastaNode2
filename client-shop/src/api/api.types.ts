import { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosPromise, Canceler } from "axios";

export type { Canceler };

type AxiosMethods = Pick<AxiosInstance, "get" | "put" | "patch" | "delete" | "post">;

export type WithAbortFn = AxiosMethods[keyof AxiosMethods];

export type ApiExecutor<T> = {
    (url: string, body: unknown, config: AxiosRequestConfig) : AxiosPromise<T>
    (url: string, config: AxiosRequestConfig): AxiosPromise<T>
};

export type ApiExecutorArgs = [string, unknown, AxiosRequestConfig] | [string, AxiosRequestConfig];

export type ApiRequestConfig = AxiosRequestConfig & { 
    abort?: (cancel: Canceler) => void
};

export type ApiError = AxiosError;