import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type User = {
    id?: number | null,
    fullname?: string,
    email?: string,
    password?: string,
    reward_points?: number,
    status?: "pending" | "active" | "suspended" | "disabled",
    referal_code?: string,
    store_name?: string,
    authenticated?: boolean
}

const initialUser: User = {
    authenticated: false
};

export const userApiSlice = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `/auth`,
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        registerUser: builder.mutation<{ status: boolean }, User>({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user
            }),
            transformResponse: (response: { status: boolean }) => response as { status: boolean }  
        }),
        authenticateUser: builder.mutation<{user: User}, User>({
          query: (user) => ({
            url: "/login",
            method: "POST",
            body: user
          }),
        })
    })
});

export const {  useRegisterUserMutation, useAuthenticateUserMutation  } = userApiSlice;

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        resetUserSlice: (state) => {
            state = initialUser
        },
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload
        }
    }
});

export const resetUsersApiSlice = () => userApiSlice.util.resetApiState();

export const { resetUserSlice, setAuthenticated } = userSlice.actions;

export default userSlice.reducer;