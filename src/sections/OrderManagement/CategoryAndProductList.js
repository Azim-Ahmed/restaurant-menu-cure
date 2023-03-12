import React, {useState} from 'react';
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

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const categoryData = [
  {
    id: 1,
    name: 'Category 1',
  },
  {
    id: 1,
    name: 'Category 2',
  },
  {
    id: 1,
    name: 'Category 3',
  },
  {
    id: 1,
    name: 'Category 4',
  },
  {
    id: 1,
    name: 'Category 5',
  },
  {
    id: 1,
    name: 'Category 6',
  },
];
const foodData = [
  {
    id: 1,
    name: 'Food 1',
  },
  {
    id: 1,
    name: 'Food 2',
  },
  {
    id: 1,
    name: 'Food 3',
  },
  {
    id: 1,
    name: 'Food 4',
  },
  {
    id: 1,
    name: 'Food 5',
  },
  {
    id: 1,
    name: 'Food 6',
  },
];
const CategoryAndProductList = () => {
    const [modalOpen, setModalOpen]= useState(false);
    const [productModal, setProductModal] = useState(false);
    const modalClose =()=>{
        setModalOpen(false)
    }
    const closeProductModal = ()=>{
        setProductModal(false)
    }
  return (
    <>
      <Box>
        <Box sx={{ display: 'flex', marginTop: '.5rem', justifyContent: 'space-between' }}>
          <Typography variant="h4">Category</Typography>
          <Button onClick={()=>setModalOpen(true)} variant="contained">Add</Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '.5rem' }}>
          {categoryData?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    ':hover': {
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      backgroundColor: colors.primary,
                      color: 'white',
                    },
                    border: `1px solid ${colors.primary}`,
                    borderRadius: '5px',
                    padding: '0px',
                    paddingBottom: '0px',
                    backgroundColor: index === 0 && colors.primary,
                    color: index === 0 && 'white',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      color="inherit"
                      // variant="subtitle2"
                      // underline="hover"
                      sx={{
                        fontSize: '1.2rem',
                        fontWeight: '500',
                      }}
                    >
                      {item.name}
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
          <Button onClick={()=>setProductModal(true)} variant="contained" sx={{ bgcolor: colors.secondary }}>
            Add
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '.5rem' }}>
          {foodData?.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Card
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
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      color="inherit"
                      // variant="subtitle2"
                      // underline="hover"
                      sx={{
                        typography: 'h5',
                      }}
                    >
                      {item.name}
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
        <CreateCategoryForm />
      </BasicModal>
      <BasicModal open={productModal} handleClose={closeProductModal}>
        <Typography variant="h4">Create Food</Typography>
        <CreateProductForm />
      </BasicModal>
    </>
  );
};

export default CategoryAndProductList;
