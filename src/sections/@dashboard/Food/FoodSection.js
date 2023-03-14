import React, { useState } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Button,
  Typography,
  OutlinedInput,
  InputAdornment,
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';

// component
import Iconify from '../../../components/iconify';
import BasicModal from '../../../components/ui/BasicModal';
import CreateProductForm from './CreateProductForm';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FastfoodIcon from '@mui/icons-material/Fastfood';

import colors from '../../../utils/colors';

import {  } from 'src/features/categories/categoriesApi';
import { useGetFoodsByCategoryQuery } from 'src/features/foods/foodsApi';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

const FoodSection = (props) => {
  const { activeCategory, activeCategoryName } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [submitType, setSubmitType] = useState(null);
  const [updateFood, setUpdateFood] = useState(null);

  const modalClose = () => {
    setModalOpen(false);
    setSubmitType(null);
    setUpdateFood(null);
  };

  const {
    data: foodData,
    isLoading: foodsLoading,
    isSuccess: foodsSuccess,
  } = useGetFoodsByCategoryQuery(activeCategory);

  const [filterName, setFilterName] = useState();

  const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
    marginTop: '1rem',
    width: '100%',
    transition: theme.transitions.create(['box-shadow', 'width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
      width: '100%',
      boxShadow: theme.customShadows.z8,
    },
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
  }));
  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: '#EDEFF1', padding: '1rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4">Food</Typography>
          <Button onClick={() => setModalOpen(true)} variant="contained">
            Add
          </Button>
        </Box>
        <Typography>{activeCategoryName && activeCategoryName}</Typography>

        <Box>
          <StyledSearch
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />
        </Box>
        {foodData?.data?.attributes?.foods?.data?.map((item) => {
          return (
            <Box key={item.id} sx={{ marginTop: '1rem' }}>
              <Card
                variant="outlined"
                sx={{ borderRadius: '0', padding: '.8rem', bgcolor: '#F9FAFB', display: 'flex', alignItems: 'center' }}
              >
                <Box sx={{ flex: 3, display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                  {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}
                  <FastfoodIcon />
                  <Typography sx={{ fontSize: 18, fontWeight: '600' }}>{item.attributes.name}</Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'end' }}>
                  <Typography>{item?.attributes?.unit} </Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'end' }}>
                  <Typography>{item?.attributes?.price} ৳</Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'end' }}>
                  <Box sx={{ textAlign: 'end' }}>
                    <Button onClick={() => alert('delete')}>
                      <DeleteIcon style={{ color: colors.failed }} />
                    </Button>
                    <Button
                      onClick={() => {
                        setSubmitType('update');
                        setUpdateFood(item);
                        setModalOpen(true);
                      }}
                    >
                      <EditIcon />
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          );
        })}
      </Box>

      <BasicModal open={modalOpen} handleClose={modalClose}>
        <Typography variant="h4">{submitType === "update" ?  "Update" : "Create"} Food</Typography>
        <CreateProductForm
          submitType={submitType}
          defaultData={updateFood?.attributes}
          id={updateFood?.id}
          modalClose={modalClose}
          category={activeCategory}
        />
      </BasicModal>
    </>
  );
};

export default FoodSection;
