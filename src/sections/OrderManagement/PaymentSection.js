import React from 'react';
import { TextField, Box, Button } from '@mui/material';

const PaymentSection = () => {
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: '30rem', marginTop: '1rem', textAlign: 'center', padding: '.5rem 1rem' }}>
        <TextField defaultValue={1500} disabled={true} placeholder="Bill Amount" sx={{ width: '100%' }} />
        <TextField placeholder="Pay" sx={{ width: '100%', marginTop: '.5rem' }} type="number" />
        <Box sx={{ display: 'flex', gap: '.5rem' }}>
          <TextField placeholder="Discount %" sx={{ width: '100%', marginTop: '.5rem' }} type="number" />
          <TextField placeholder="Payble Amount" disabled sx={{ width: '100%', marginTop: '.5rem' }} type="number" />
        </Box>
        <TextField
          // defaultValue={120}
          placeholder="Change amount"
          disabled
          sx={{ width: '100%', marginTop: '.5rem' }}
          type="number"
        />
        <Button sx={{ width: '100%', marginTop: '1rem' }} type="submit" variant="contained">
          Pay Bill
        </Button>
      </Box>
    </>
  );
};

export default PaymentSection;
