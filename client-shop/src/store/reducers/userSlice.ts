import { BASE_URL } from '@/constants/apiStatus';
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type User = {
    id?: number,
    email?: string,
    password?: string
}

const initialUser: User = {
    id: 0,
    email: ''
};

export const userApiSlice = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/auth`,
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        registerUser: builder.mutation<any, User>({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user
            }),
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
        resetUserSlice: () => initialUser
    }
});

export const resetUsersApiSlice = () => userApiSlice.util.resetApiState();

export const { resetUserSlice } = userSlice.actions;

export default userSlice.reducer;