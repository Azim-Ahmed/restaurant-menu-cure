import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Button, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// icons
import TableBarIcon from '@mui/icons-material/TableBar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

import colors from '../../utils/colors';
import BasicModal from '../../components/ui/BasicModal';
import CreateCategoryForm from '../@dashboard/Food/CreateCategoryForm';
import CreateProductForm from '../@dashboard/Food/CreateProductForm';
// ----------------------------------------------------------------------

import { useGetCategoriesQuery } from 'src/features/categories/categoriesApi';
import { useGetFoodsByCategoryQuery } from 'src/features/foods/foodsApi';

import {addToCart, removeFromCart, decreaseProductQuantity, resetCart} from '../../features/cart/cartSlice';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});


const CategoryAndProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(5);

  const { data: categoryData, isLoading: categoriesLoading, isSuccess: categoriesSuccess } = useGetCategoriesQuery();
  const {
    data: foodData,
    isLoading: foodsLoading,
    isSuccess: foodsSuccess,
  } = useGetFoodsByCategoryQuery(selectedCategory);

  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [productModal, setProductModal] = useState(false);

  const modalClose = () => {
    setModalOpen(false);
  };
  const closeProductModal = () => {
    setProductModal(false);
  };

  console.log('food is : ', foodData);
  console.log('categories is : ', categoryData);

  return (
    <>
      <Box>
        <Box sx={{ display: 'flex', marginTop: '.5rem', justifyContent: 'space-between' }}>
          <Typography variant="h4">Category</Typography>
          <Button onClick={() => setModalOpen(true)} variant="contained">
            Add
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '.5rem' }}>
          {categoryData?.data?.map((item, index) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <Card
                  onClick={() => setSelectedCategory(item.id)}
                  sx={{
                    cursor: 'pointer',
                    ':hover': {
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      backgroundColor: selectedCategory === item.id && colors.primary,
                      color: selectedCategory === item.id && 'white',
                    },
                    border: `1px solid ${colors.primary}`,
                    borderRadius: '5px',
                    padding: '0px',
                    paddingBottom: '0px',
                    backgroundColor: selectedCategory === item.id && colors.primary,
                    color: selectedCategory === item.id && 'white',
                    height: '100%',
                    alignItems: 'center',
                  }}
                >
                  <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                      color="inherit"
                      // variant="subtitle2"
                      // underline="hover"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: '500',
                        textAlign: 'center',
                      }}
                    >
                      {item.attributes.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Box sx={{ display: 'flex', marginTop: '.5rem', justifyContent: 'space-between' }}>
          <Typography variant="h4">Food</Typography>
          <Button onClick={() => setProductModal(true)} variant="contained" sx={{ bgcolor: colors.secondary }}>
            Add
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '.5rem' }}>
          {foodData?.data?.attributes?.foods?.data?.map((item) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <Card
                  onClick={()=>dispatch(addToCart({...item.attributes, id:item.id}))}
                  sx={{
                    cursor: 'pointer',
                    ':hover': {
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      backgroundColor: colors.secondary,
                      color: 'white',
                    },
                    border: `1px solid ${colors.secondary}`,
                    borderRadius: '5px',
                    padding: '0px',
                    paddingBottom: '0px',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ textAlign: 'left', padding:".5rem"}}>
                    <Typography
                      color="inherit"
                      sx={{
                       fontSize:"1.1rem", 
                       fontWeight:'600',
                       lineHeight:"1.3rem"
                      }}
                    >
                      {item?.attributes?.name}
                    </Typography>
                    <Typography
                      color="inherit"
                      sx={{
                        fontSize:".9rem",  
                      }}
                    > 
                     <span style={{fontWeight:'600'}}>Price : </span> 	৳ {item?.attributes?.price} 
  
                    </Typography>
                    <Typography
                      color="inherit"
                      sx={{
                        fontSize:".9rem",  
                      }}
                    >
                     <span style={{fontWeight:'600'}}>Unit :</span>  {item?.attributes?.unit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <BasicModal open={modalOpen} handleClose={modalClose}>
        <Typography variant="h4">Create Category</Typography>
        <CreateCategoryForm modalClose={modalClose}/>
      </BasicModal>
      <BasicModal open={productModal} handleClose={closeProductModal}>
        <Typography variant="h4">Create Food</Typography>
        <CreateProductForm category={selectedCategory} modalClose={closeProductModal}/>
      </BasicModal>
    </>
  );
};

export default CategoryAndProductList;
