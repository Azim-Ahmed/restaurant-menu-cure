import React, { useState,useEffect } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, Typography, OutlinedInput, InputAdornment, Card, Container } from '@mui/material';

// component
import Iconify from '../components/iconify';
import BasicModal from '../components/ui/BasicModal';
import CreateProductForm from '../sections/@dashboard/Food/CreateProductForm';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FastfoodIcon from '@mui/icons-material/Fastfood';

import colors from '../utils/colors';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useGetCurrentMonthOrderQuery, useGetOrdersByDateQuery } from '../features/queryApi/queryApi';
import { Yard } from '@mui/icons-material';

import '../style/orderPage.css';
import OrderDetailsView from 'src/sections/Orders/OrderDetailsView';

// ----------------------------------------------------------------------

const OrdersPage = (props) => {
  const { activeCategory, activeCategoryName } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setselectedId] = useState(null);
  const [totalSale, setTotalSale] = useState(null);

  const modalClose = () => {
    setModalOpen(false);
    setselectedId(null);
  };

  const [filterDate, setFilterDate] = useState(new Date());
  const check = moment(filterDate, 'YYYY/MM/DD');
  const day = check?.format('D');
  const month = check?.format('M');
  const monthName = check?.format('MMMM');
  const year = check?.format('YYYY');

  console.log('date is : ', day, month, year);

  // const { data: getOrders } = useGetCurrentMonthOrderQuery();
  const { data: getOrders } = useGetOrdersByDateQuery({
    gtD: `${year}-${month}-${day}`,
    ltD: `${year}-${month}-${day}`,
  });

  useEffect(() => {
    if (!getOrders) {
      return;
    }

    const total = getOrders?.data?.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.attributes.final_price || currentValue.attributes.totalPrice),
      0
    );
    // console.log("total is : ", total);
    setTotalSale(total);
  }, [getOrders]);

  return (
    <>
      {/* <Helmet>
        <title> User | Restaurant System </title>
      </Helmet> */}

      <Container maxWidth="xl">
        <Box sx={{ width: '100%', padding: '1rem' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h4"> Orders ({moment(filterDate).format("Do MMMM YYYY")} )</Typography>
            <Box>{/* <Typography sx={{fontSize:25}}>Today</Typography> */}</Box>
          </Box>
          {/* <Typography>{activeCategoryName && activeCategoryName}</Typography> */}

          <Box>
            <Typography sx={{ fontSize: 20, color: '#007ACC', fontWeight: '700' }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                className="date-picker"
                selected={filterDate}
                onChange={(date) => setFilterDate(date)}
              />
            </Typography>
            <Typography sx={{ fontSize: '1.1rem' }}>
              Total Sale : <span style={{ fontWeight: '700' }}>{totalSale} tk</span>{' '}
            </Typography>
          </Box>
          <Box sx={{ marginTop: '.7rem' }}>
            <Box
              //   variant="outlined"
              sx={{
                borderRadius: '0',
                padding: '.8rem',
                bgcolor: '#007ACC',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box sx={{ flex: 3, display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}

                <Typography sx={{ fontSize: 18, fontWeight: '600' }}>Id</Typography>
                <Typography sx={{ fontSize: 18, fontWeight: '600', marginLeft: '1.2rem' }}>Status</Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography> Items </Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography> Total Price</Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Box sx={{ textAlign: 'end' }}>
                  {/* <Button onClick={() => alert('delete')}> */}
                  {/* <DeleteIcon style={{ color: colors.failed }} /> */}
                  {/* </Button> */}

                  {/* <Typography > Edit</Typography> */}
                </Box>
              </Box>
            </Box>
          </Box>
          {Array.isArray(getOrders?.data) &&
            getOrders?.data?.map((order) => {
              return (
                <Box sx={{ marginTop: '.7rem', cursor: 'pointer' }}>
                  <Card
                    onClick={() => {
                      setselectedId(order?.id)
                      setModalOpen(true);
                    }}
                    variant="outlined"
                    sx={{
                      borderRadius: '0',
                      padding: '.8rem',
                      bgcolor: '#F9FAFB',
                      display: 'flex',
                      alignItems: 'center',
                      ':hover': {
                        bgcolor: '#E8EBEE',
                      },
                    }}
                  >
                    <Box sx={{ flex: 3, display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                      {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}

                      <Typography sx={{ fontSize: 18, fontWeight: '600' }}>{order?.id}</Typography>
                      <Typography sx={{ fontSize: 18, fontWeight: '600', marginLeft: '1.2rem' }}>
                        {order?.attributes?.status === 1 ? 'Pending' : 'Completed'}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: 'end' }}>
                      <Typography> {order?.attributes?.qty?.foodCount?.length} </Typography>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: 'end' }}>
                      <Typography>{order?.attributes.totalPrice} ৳</Typography>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: 'end' }}>
                      <Box sx={{ textAlign: 'end' }}>
                        {/* <Button onClick={() => alert('delete')}> */}
                        {/* <DeleteIcon style={{ color: colors.failed }} /> */}
                        {/* </Button> */}
                        <Button
                        // onClick={() => {
                        //   setSubmitType('update');
                        //   setUpdateFood(item);
                        //   setModalOpen(true);
                        // }}
                        >
                          {/* {
                                order?.attributes?.status === 3 ? "" : <EditIcon />
                            } */}
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              );
            })}
        </Box>
      </Container>
      <BasicModal open={modalOpen} handleClose={modalClose}>
        <Typography variant="h4"> Order Details</Typography>
        <OrderDetailsView orderId={selectedId} />
      </BasicModal>
    </>
  );
};

export default OrdersPage;
