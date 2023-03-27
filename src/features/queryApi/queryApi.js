import apiSlice from '../api/apiSlice';

const queryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // deleteCategory: builder.mutation({
    //   query: (id) => ({
    //     url: `/api/categories/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Category'],
    //   providesTags: ['Category'],
    // }),

    getOrdersByDate: builder.query({
      query: ({ ltD, gtD }) => {
        return `http://localhost:1337/api/orders?createdAt_gte=${gtD}&createdAt_lte=${ltD}`;
      },
      providesTags: ['Order'],
    }),
    getCurrentMonthOrder: builder.query({
      query: (id) => `api/orders?createdAt_gte=2023-03-25&createdAt_lte=2023-03-25`,
      providesTags: ['Order'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetCurrentMonthOrderQuery, useGetOrdersByDateQuery } = queryApi;
