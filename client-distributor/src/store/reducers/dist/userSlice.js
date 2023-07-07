"use strict";
var _a;
exports.__esModule = true;
exports.setAuthenticated = exports.resetUserSlice = exports.resetUsersApiSlice = exports.userSlice = exports.useAuthenticateUserMutation = exports.useRegisterUserMutation = exports.userApiSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_1 = require("@reduxjs/toolkit/query/react");
var initialUser = {
    authenticated: false
};
exports.userApiSlice = react_1.createApi({
    reducerPath: "userApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "/auth"
    }),
    tagTypes: ['user'],
    endpoints: function (builder) { return ({
        registerUser: builder.mutation({
            query: function (user) { return ({
                url: "/register",
                method: "POST",
                body: user
            }); },
            transformResponse: function (response) { return response; }
        }),
        authenticateUser: builder.mutation({
            query: function (user) { return ({
                url: "/login",
                method: "POST",
                body: user
            }); }
        })
    }); }
});
exports.useRegisterUserMutation = exports.userApiSlice.useRegisterUserMutation, exports.useAuthenticateUserMutation = exports.userApiSlice.useAuthenticateUserMutation;
exports.userSlice = toolkit_1.createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        resetUserSlice: function (state) {
            state = initialUser;
        },
        setAuthenticated: function (state, action) {
            state.authenticated = action.payload;
        }
    }
});
exports.resetUsersApiSlice = function () { return exports.userApiSlice.util.resetApiState(); };
exports.resetUserSlice = (_a = exports.userSlice.actions, _a.resetUserSlice), exports.setAuthenticated = _a.setAuthenticated;
exports["default"] = exports.userSlice.reducer;
