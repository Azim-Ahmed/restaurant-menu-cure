import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetFullOrderQuery } from '../../features/orders/ordersApi';
import moment from 'moment';

const OrderDetailsView = ({ orderId }) => {
  // console.log("Order id is : ", orderId);
  const { data: order } = useGetFullOrderQuery(orderId);
  console.log('order is : ', order);
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography>Order Id : {order?.data?.id}</Typography>
      <Typography>Order Status : {order?.data?.attributes?.status}</Typography>
      <Typography>Created at : {moment(order?.data?.attributes?.createdAt).format("MMM Do YY")}</Typography>
      <Typography>Updated at : {moment(order?.data?.attributes?.updatedAt).format("MMM Do YY") }</Typography>
      <hr style={{ opacity: '.3' }} />
      <Typography sx={{ color: '#007ACC', fontWeight: '600' }}>Foods : </Typography>
      <Box>
        <Box sx={{bgcolor:"#007ACC", color:'white', display: 'flex', gap: '1rem',padding:".2rem .5rem" }}>
          <Typography sx={{ flex: 0.2 }}>Id</Typography>
          <Typography sx={{ flex: 6 }}>Name</Typography>
          <Typography sx={{ flex: 2 }}>Price</Typography>
        </Box>
        {order?.data?.attributes?.foods?.data &&
          Array.isArray(order?.data?.attributes?.foods?.data) &&
          order?.data?.attributes?.foods?.data.map((food, index) => {
            return (
              <Box key={food?.id} sx={{ bgcolor:index % 2 === 0 ? 'white' : '#E8EBEE',padding:".2rem .5rem", display: 'flex', gap: '1rem' }}>
                <Typography sx={{ flex: 0.2 }}>{food?.id}</Typography>
                <Typography sx={{ flex: 6 }}>{food?.attributes?.name}</Typography>
                <Typography sx={{ flex: 2 }}>{food?.attributes?.price}</Typography>
              </Box>
            );
          })}
      </Box>
          <hr style={{ opacity: '.3', marginTop:"1rem" }} />
      <Box sx={{marginTop:1}}>
        <Typography>Total Price : {order?.data?.attributes?.totalPrice} tk</Typography>
        <Typography>Final Price : {order?.data?.attributes?.final_price || 0} tk</Typography>
      </Box>
    </Box>
  );
};

export default OrderDetailsView;
