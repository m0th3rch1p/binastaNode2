import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type User = {
    email?: string,
    password?: string,
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
        authenticateUser: builder.mutation<{user: User}, User>({
          query: (user) => ({
            url: "/login",
            method: "POST",
            body: user
          })
        })
    })
});


export const { useAuthenticateUserMutation  } = userApiSlice;

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