// import { baseApi } from "../../api/baseApi";

// const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     register: builder.mutation({
//       query: (newUser) => ({
//         url: "/auth/register",
//         method: "POST",
//         body: newUser,
//       }),
//     }),
//     getProfile: builder.query({
//       query: () => ({
//         url: "/auth/profile",
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } =
//   authApi;
