import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// @mui
import { Container, Stack, Typography } from '@mui/material';

import CategorySection from '../sections/@dashboard/Food/CategorySection';
import FoodSection from '../sections/@dashboard/Food/FoodSection';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function FoodPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeCategoryName, setActiveCategoryName] = useState(null)

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1E1E1E',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Helmet>
        <title> Dashboard: Foods </title>
      </Helmet>

      <Container maxWidth="xl">
        {/* <ProductList products={PRODUCTS} /> */}
        {/* <ProductCartWidget /> */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <CategorySection setActiveCategoryName={setActiveCategoryName} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          </Grid>
          <Grid item xs={8}>
            <FoodSection activeCategoryName={activeCategoryName} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
