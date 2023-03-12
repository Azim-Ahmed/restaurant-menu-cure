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
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import colors from '../../utils/colors';
import BasicModal from '../../components/ui/BasicModal';
import CreateProductForm from '../@dashboard/Food/CreateProductForm';
import PaymentSection from './PaymentSection';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const CreateOrder = () => {
    const [modalOpen, setModalOpen]= useState(false);
    const modalClose =()=>{
        setModalOpen(false)
    }
  return (
    <>
    <Box sx={{ width: '100%', backgroundColor: '#EDEFF1', padding: '1rem' }}>
       <Box>
        <Typography>Table 1</Typography>
       </Box>
      <Box sx={{padding:".5rem 0rem", display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h4">Create Order</Typography>
        </Box>
        <Box style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="contained"><LocalPrintshopIcon sx={{color:'#EDEFF1'}}/> <Typography>- QTY</Typography> </Button>
          <Button variant="contained"><LocalPrintshopIcon sx={{color:'#EDEFF1'}}/> <Typography>- Bill</Typography></Button>
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

      <Box sx={{ marginTop: '1rem', maxHeight: '35rem',minHeight:"35rem", overflowY: 'scroll' }}>
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

          <StyledTableRow >
            <TableCell align="left">
              <Box sx={{ flex: 3, display: 'flex', alignItems: 'center' }}>
                {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}
                <Typography sx={{ fontSize: 18, fontWeight: '600' }}>Chinese Food</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography>200.00 ৳</Typography>
              </Box>
            </TableCell >
            <TableCell align="right">
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <TextField defaultValue={1} type="number" sx={{ maxWidth: '3rem' }} />
              </Box>
            </TableCell>
            <TableCell align="right">
              {' '}
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography>800.00 ৳</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
                <DeleteIcon sx={{cursor:"pointer", ":hover":{color:colors.failed}}}/>
            </TableCell>
          </StyledTableRow >
          {/* ---------------------- */}
          <StyledTableRow  >
            <TableCell align="left">
              <Box sx={{ flex: 3, display: 'flex', alignItems: 'center' }}>
                {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}
                <Typography sx={{ fontSize: 18, fontWeight: '600' }}>Chinese Food</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography>200.00 ৳</Typography>
              </Box>
            </TableCell >
            <TableCell align="right">
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <TextField defaultValue={1} type="number" sx={{ maxWidth: '3rem' }} />
              </Box>
            </TableCell>
            <TableCell align="right">
              {' '}
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography>700.00 ৳</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
                <DeleteIcon sx={{cursor:"pointer", ":hover":{color:colors.failed}}}/>
            </TableCell>
          </StyledTableRow >
           {/* ---------------------- */}
          <StyledTableRow  >
            <TableCell align="left">
              <Box sx={{ flex: 3, display: 'flex', alignItems: 'center' }}>
                {/* <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} /> */}
                <Typography sx={{ fontSize: 18, fontWeight: '600' }}>Chinese Food</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography>200.00 ৳</Typography>
              </Box>
            </TableCell >
            <TableCell align="right">
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <TextField defaultValue={1} type="number" sx={{ maxWidth: '3rem' }} />
              </Box>
            </TableCell>
            <TableCell align="right">
              {' '}
              <Box sx={{ flex: 1, textAlign: 'end' }}>
                <Typography>200.00 ৳</Typography>
              </Box>
            </TableCell>
            <TableCell align="right">
                <DeleteIcon sx={{cursor:"pointer", ":hover":{color:colors.failed}}}/>
            </TableCell>
          </StyledTableRow >
        </TableBody>
        </Table>
      </Box>
    </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.3rem' }}>Total : </Typography>
          <Typography sx={{ fontSize: '1.3rem' }}>1500 ৳</Typography>
        </Box>
      </Box>
      <Box sx={{marginTop:"1rem", display: 'flex', justifyContent: "flex-end" }}>
        
        <Box style={{ display: 'flex', gap: '1rem'}}>
          <Button variant="contained" sx={{ bgcolor: colors.failed }}>
            Cancel
          </Button>
          <Button onClick={()=>setModalOpen(true)} variant="contained" sx={{ bgcolor: colors.success }}>
            Payment
          </Button>
        </Box>
      </Box>

      <BasicModal open={modalOpen} handleClose={modalClose} modalType="small">
        <Typography sx={{textAlign:"center"}} variant="h4">Payment</Typography>
        <PaymentSection/>
      </BasicModal>
    </>
  );
};

export default CreateOrder;
