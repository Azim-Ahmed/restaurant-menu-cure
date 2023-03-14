import React, { useState, useEffect } from 'react';
import { TextField, Box, Button } from '@mui/material';

const PaymentSection = (props) => {
  const { submitOrder, totalPrice, finalPrice, setFinalPrice, discount, setDiscount } = props;

  const [pay, setPay] = useState();
  const [changeAmount, setChangeAmount] = useState(0);

  const changeFinalPrice = (d) => {
    setDiscount(d);
    setFinalPrice(Number(totalPrice) - Number(d));
  };

  useEffect(() => {
    setChangeAmount(Number(pay) - Number(finalPrice));
  }, [finalPrice, pay, discount]);

  const submit = () => {
    if(!pay){
      alert("Please pay first");
      return
    }

    if(pay < finalPrice){
      alert("Please pay correct amount");
      return
    }
    submitOrder();
  };

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: '30rem', marginTop: '1rem', textAlign: 'center', padding: '.5rem 1rem' }}>
        <TextField defaultValue={totalPrice} disabled={true} placeholder="Bill Amount" sx={{ width: '100%' }} />
        <Box sx={{ display: 'flex', gap: '.5rem' }}>
          <TextField
            value={discount}
            onChange={(e) => changeFinalPrice(e.target.value)}
            placeholder="Discount (TK)"
            sx={{ width: '100%', marginTop: '.5rem' }}
            type="number"
          />
          <TextField
            value={finalPrice}
            onChange={(e) => setFinalPrice(e.target.value)}
            placeholder="Payble Amount"
            disabled
            sx={{ width: '100%', marginTop: '.5rem' }}
            type="number"
          />
        </Box>
        <TextField
          value={pay}
          onChange={(e) => setPay(e.target.value)}
          placeholder="Pay"
          sx={{ width: '100%', marginTop: '.5rem' }}
          type="number"
        />
        <TextField
          // defaultValue={120}
          placeholder="Change amount"
          disabled
          sx={{ width: '100%', marginTop: '.5rem' }}
          type="number"
          value={changeAmount}
        />
        <Button onClick={()=>submit()} sx={{ width: '100%', marginTop: '1rem' }} type="submit" variant="contained">
          Pay Bill
        </Button>
      </Box>
    </>
  );
};

export default PaymentSection;
