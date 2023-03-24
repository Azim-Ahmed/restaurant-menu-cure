import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  TableHead,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  TextField,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import colors from '../../utils/colors';
import BasicModal from '../../components/ui/BasicModal';
import CreateProductForm from '../@dashboard/Food/CreateProductForm';
import PaymentSection from './PaymentSection';

import {
  addToCart,
  setInital,
  removeFromCart,
  decreaseProductQuantity,
  resetCart,
} from '../../features/cart/cartSlice';
import { useCreateOrderMutation, useUpdateOrderMutation } from 'src/features/orders/ordersApi';
import { useUpdateTableMutation, useGetSingleTableDataQuery } from 'src/features/tables/tablesApi';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CreateOrder = (props) => {
  const { tableId } = props;
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [orderIsUpdate, setOrderIsUpdate] = useState(false);
  const modalClose = () => {
    setModalOpen(false);
  };
  const dispatch = useDispatch();

  const [createOrder] = useCreateOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();
  const [updateTable] = useUpdateTableMutation();
  const { data: getSingleTableData,isLoading:getTableLoading, isSuccess:getTableSuccess } = useGetSingleTableDataQuery(tableId);
  // const tableOrder = getSingleTableData?.data?.attributes?.order?.data;


  let totalPrice = 0;
  const [finalPrice, setFinalPrice] = useState();
  const [discount, setDiscount] = useState();

  const { cart } = useSelector((state) => state.cart);

  totalPrice =
    cart?.length > 0 &&
    cart?.reduce(function (accumulator, currentValue) {
      return Number(accumulator) + Number(currentValue.price) * Number(currentValue.food_qty);
    }, 0);

  useEffect(() => {
    setFinalPrice(totalPrice);
  }, [totalPrice]);

  // useEffect(() => {
  //   console.log("table order from use effect = ", tableOrder)
  //   if (tableOrder) {
  //     setOrderIsUpdate(true);
  //     console.log('im called from existing foods');
  //     const extOrder = getSingleTableData?.data?.attributes?.order?.data?.attributes?.foods?.data;
  //     const foodsQty = getSingleTableData?.data?.attributes?.order?.data?.attributes?.qty?.foodCount;
  //     const getSingleQutry = (id) => {
  //       const f = foodsQty.find((f) => f.food_id == id);
  //       return f?.food_qty;
  //     };
  //     const orderItems =
  //       extOrder &&
  //       extOrder.map((d) => {
  //         return {
  //           id: d.id,
  //           ...d.attributes,
  //           food_qty: getSingleQutry(d.id),
  //         };
  //       });
  //     dispatch(setInital(orderItems));
  //   } else {
  //     setOrderIsUpdate(false);
  //     dispatch(setInital([]));
  //   }
  // },[getSingleTableData, tableOrder]);

  useEffect(()=>{
    const tableOrder =  getSingleTableData?.data?.attributes?.order?.data
    if (tableOrder) {
      setOrderIsUpdate(true);
      console.log('im called from existing foods');
      const extOrder = getSingleTableData?.data?.attributes?.order?.data?.attributes?.foods?.data;
      const foodsQty = getSingleTableData?.data?.attributes?.order?.data?.attributes?.qty?.foodCount;
      const getSingleQutry = (id) => {
        const f = foodsQty.find((f) => f.food_id == id);
        return f?.food_qty;
      };
      const orderItems =
        extOrder &&
        extOrder.map((d) => {
          return {
            id: d.id,
            ...d.attributes,
            food_qty: getSingleQutry(d.id),
          };
        });
      dispatch(setInital(orderItems));
    } else {
      setOrderIsUpdate(false);
      dispatch(setInital([]));
    }

  },[getSingleTableData]);


  const createOrderQty = async () => {
    if (!cart) {
      return;
    }
    if (cart.length < 1) {
      return;
    }
    const orderData = {
      data: {
        order_status: 1,
        totalPrice: totalPrice,
        foods: await cart?.map((i) => i.id),
        qty: {
          foodCount: await cart?.map((i) => {
            return { food_id: i.id, food_qty: i.food_qty };
          }),
        },
        table: tableId,
      },
    };

    if (orderIsUpdate) {
      const data = await updateOrder({id: getSingleTableData?.data?.attributes?.order?.data?.id, submitData:orderData});
      console.log('updated order data is : ', data);
      alert('your order is updated');
    } else {
      const data = await createOrder(orderData);
      console.log('created order data is : ', data);
      const updatedTable = await updateTable({ id: tableId, submitData: { data: { status: 0 } } });
      console.log('updated table is :  : ', updatedTable);
      alert('Your order is created');
    }
  };

  const paymentOrder = async () => {
    if (!cart) {
      return;
    }
    if (cart.length < 1) {
      return;
    }
    const orderData = {
      data: {
        order_status: 3,
        totalPrice: totalPrice,
        foods: await cart?.map((i) => i.id),
        qty: {
          foodCount: await cart?.map((i) => {
            return { food_id: i.id, food_qty: i.food_qty };
          }),
        },
        table: tableId,
      },
    };
    const data = await createOrder(orderData);

    console.log('created order data is : ', data);
    const updatedTable = await updateTable({ id: tableId, submitData: { data: { status: 1 } } });
    console.log('table status is : ', updateTable);
    alert('orderSubmited');
    modalClose();
    navigate('/dashboard/table');
  };

  const cancelOrder = () => {};

  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: '#EDEFF1', padding: '1rem' }}>
        <Box>
          <Typography>Table 1</Typography>
        </Box>
        <Box sx={{ padding: '.5rem 0rem', display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h4">Create Order</Typography>
          </Box>
          <Box style={{ display: 'flex', gap: '1rem' }}>
            <Button onClick={() => createOrderQty()} variant="contained">
              <LocalPrintshopIcon sx={{ color: '#EDEFF1' }} /> <Typography>- QTY</Typography>{' '}
            </Button>
            <Button variant="contained">
              <LocalPrintshopIcon sx={{ color: '#EDEFF1' }} /> <Typography>- Bill</Typography>
            </Button>
          </Box>
        </Box>

        {/* <Box>
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
    </Box> */}

        <Box sx={{ marginTop: '1rem', maxHeight: '35rem', minHeight: '35rem', overflowY: 'scroll' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">QTY</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.map((item, index) => {
                return (
                  <StyledTableRow key={index}>
                    <TableCell align="left">
                      <Box sx={{ flex: 3, display: 'flex', alignItems: 'center' }}>
                        {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}
                        <Typography sx={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ flex: 1, textAlign: 'end' }}>
                        <Typography>{item.price} ৳</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ flex: 1, display: 'flex', gap: '.5rem', alignItems: 'center', textAlign: 'end' }}>
                        <Box sx={{ width: '100%', height: '100%' }}>
                          <Typography sx={{ fontSize: '1.5rem' }}>{item.food_qty}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <AddBoxIcon
                            onClick={() => dispatch(addToCart(item))}
                            sx={{
                              cursor: 'pointer',
                              color: '#616165',
                              fontSize: '1.1rem',
                              ':hover': { color: colors.secondary },
                            }}
                          />
                          <RemoveCircleIcon
                            onClick={() => dispatch(decreaseProductQuantity(item))}
                            sx={{
                              cursor: 'pointer',
                              color: '#616165',
                              fontSize: '1.1rem',
                              ':hover': { color: colors.failed },
                            }}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ flex: 1, textAlign: 'end' }}>
                        <Typography>{Number(item.price) * Number(item.food_qty)} ৳</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <DeleteIcon
                        onClick={() => dispatch(removeFromCart(item))}
                        sx={{ cursor: 'pointer', ':hover': { color: colors.failed } }}
                      />
                    </TableCell>
                  </StyledTableRow>
                );
              })}
              {/* ---------------------- */}
            </TableBody>
          </Table>
        </Box>
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.3rem' }}>Total : </Typography>
          <Typography sx={{ fontSize: '1.3rem' }}>{totalPrice} ৳</Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Box style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="contained" sx={{ bgcolor: colors.failed }}>
            Cancel
          </Button>
          <Button onClick={() => setModalOpen(true)} variant="contained" sx={{ bgcolor: colors.success }}>
            Payment
          </Button>
        </Box>
      </Box>

      <BasicModal open={modalOpen} handleClose={modalClose} modalType="small">
        <Typography sx={{ textAlign: 'center' }} variant="h4">
          Payment
        </Typography>
        <PaymentSection
          submitOrder={paymentOrder}
          totalPrice={totalPrice}
          finalPrice={finalPrice}
          setFinalPrice={setFinalPrice}
          discount={discount}
          setDiscount={setDiscount}
        />
      </BasicModal>
    </>
  );
};

export default CreateOrder;
