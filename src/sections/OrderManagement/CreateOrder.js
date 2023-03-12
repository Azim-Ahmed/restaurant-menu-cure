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

const CreateOrder = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#EDEFF1', padding: '1rem' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h4">Create Order</Typography>
      <Button variant="contained">Print QTY</Button>
      <Button variant="contained"> Print Bill</Button>
      <Button variant="contained">Payemnt</Button>
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

    <Box sx={{ marginTop: '1rem' }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: '0', padding: '.8rem', bgcolor: '#F9FAFB', display: 'flex', alignItems: 'center' }}
      >
        <Box sx={{ flex: 3, display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <img style={{ width: '3rem' }} alt="product" src={'/assets/images/products/product_2.jpg'} />
          <Typography sx={{ fontSize: 18, fontWeight: '600' }}>Chinese Food</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'end' }}>
          <Typography>$20.00</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'end' }}>
          <Button>...</Button>
        </Box>
      </Card>
    </Box>
  </Box>
  )
}

export default CreateOrder