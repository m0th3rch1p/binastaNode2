import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { setAuthenticated } from "@/store/reducers/userSlice";

const baseQuery = (baseUrl: string) => fetchBaseQuery({ baseUrl });
export const baseQueryWithReauth : (baseUrl:string) => BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = (baseUrl: string) => async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  let result = await baseQuery(baseUrl)(args, api, extraOptions);
  if (result.error && (result.error.status === 401 || result.error.status === 403)) {
    setAuthenticated(false);
    window.location.href = "/login";

  }
  return result
}