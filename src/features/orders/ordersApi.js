import apiSlice from '../api/apiSlice';

const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/api/orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Order'],
      providesTags: ['Order'],
    }),
    updateOrder: builder.mutation({
      query: ({ id, submitData }) => {
        console.log('UPDATE ORDER IS :', submitData)
       return ({
          url: `/api/orders/${id}`,
          method: 'PUT',
          body: submitData,
        });
      },
      invalidatesTags: ['Order'],
      providesTags: ['Order'],
    }),

    // deleteCategory: builder.mutation({
    //   query: (id) => ({
    //     url: `/api/categories/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Category'],
    //   providesTags: ['Category'],
    // }),

    getOrders: builder.query({
      query: () => '/api/categories',
      providesTags: ['Order'],
    }),
    getFullOrder: builder.query({
      query: (id) => `/api/orders/${id}?populate=foods`,
      providesTags: ['Order'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateOrderMutation, useUpdateOrderMutation, useGetFullOrderQuery, useGetOrdersQuery } = ordersApi;
