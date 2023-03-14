import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// import { userLoggedOut } from '../auth/authSlice';

// const bUrl = "http://localhost:1337/"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:1337",
//   baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.token;
    if (token) {
        console.log("token is : ", token)
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // if (result?.error?.status === 401) {
    //   api.dispatch(userLoggedOut());
    // }
    return result;
  },
  tagTypes: ['Order', 'Profile'],
  endpoints: (builder) => ({}),
});

export default apiSlice;
