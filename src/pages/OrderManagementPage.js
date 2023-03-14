import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// @mui
import { Container, Stack, Typography } from '@mui/material';

import CreateOrder from '../sections/OrderManagement/CreateOrder';
import CategoryAndProductList from '../sections/OrderManagement/CategoryAndProductList';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

const OrderManagementPage = () => {
  const [searchParams] = useSearchParams();
  const tableId = searchParams.get("table")
  return (
    <>
      <Helmet>
        <title> Dashboard: Order Mangement </title>
      </Helmet>

      <Container maxWidth="xl">
        {/* <ProductList products={PRODUCTS} /> */}
        {/* <ProductCartWidget /> */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <CreateOrder tableId={tableId}/>
          </Grid>
          <Grid item xs={6}>
            <CategoryAndProductList/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrderManagementPage;
