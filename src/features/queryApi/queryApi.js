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
        return `/api/orders?populate=foods&pagination[page]=1&pagination[pageSize]=100`;
      },
      providesTags: ['Order'],
    }),
    getCurrentMonthOrder: builder.query({
      query: (id) => `/api/orders?populate=foods&pagination[page]=1&pagination[pageSize]=100`,
      providesTags: ['Order'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetCurrentMonthOrderQuery, useGetOrdersByDateQuery } = queryApi;
