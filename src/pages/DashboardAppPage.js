import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Container,
  Button,
  Typography,
  Box,
  Chip,
  Card,
  CardContent,
  CardActions,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import moment from 'moment';

import OutboundIcon from '@mui/icons-material/Outbound';
import { Link } from 'react-router-dom';
import colors from '../utils/colors';

import { useGetTablesQuery } from '../features/tables/tablesApi';
import { useGetCurrentMonthOrderQuery, useGetOrdersByDateQuery } from '../features/queryApi/queryApi';

import { useSelector } from 'react-redux';
import OrderAnalytics from 'src/sections/@dashboard/app/order/OrderAnalytics';
import { useGetOrdersQuery } from 'src/features/orders/ordersApi';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

  const check = moment(new Date(), 'YYYY/MM/DD');
  const day = check?.format('D');
  const month = check?.format('M');
  const year = check?.format('YYYY');

  const [activeTables, setActiveTables] = useState([]);
  const [totalSale, setTotalSale] = useState(null);

  const { data: allTables } = useGetTablesQuery();
  const { data: allOrders } = useGetOrdersByDateQuery({gtD:`${year}-${month}-${day}`,ltD:`${year}-${month}-${day}`});

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!allTables) {
      return;
    }
    const a = Array.isArray(allTables?.data) && allTables?.data?.filter((t) => t.attributes.status === false);
    // console.log('active tables is : ', a);
    setActiveTables(a);
  }, [allTables]);

  useEffect(() => {
    if (!allOrders) {
      return;
    }

    const total = allOrders?.data?.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.attributes.final_price || currentValue.attributes.totalPrice),
      0
    );
    // console.log("total is : ", total);
    setTotalSale(total);
  }, [allOrders]);

  // console.log('all table is : ', allTables);

  return (
    <>
      <Helmet>
        <title> Dashboard | Restaurant System </title>
      </Helmet>

      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor: colors.primary,
            mb: 5,
            padding: '1rem',
            color: 'white',
            alignItems: 'center',
            borderRadius: '.5rem',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: '500',
              color: 'white',
            }}
          >
            {user?.restaurant_name}
          </Typography>

        </Box>
        <Box>

          <Box
            sx={{
              marginTop: '1rem',
              display: 'flex',
              gap: '.4rem',
              padding: '.3rem .5rem',
              borderRadius: '5px',
              border: `1px solid ${colors.borderColor1}`,
              width: 'max-content',
            }}
          >
            <Typography>{moment(new Date()).format("Do MMMM YYYY") }</Typography>
          </Box>
        </Box>
        {/* analytics section */}
        <Box sx={{ marginTop: '1rem' }}>
          <Box sx={{ display: 'flex', width: '100%', gap: '1rem' }}>
            <Box sx={{ minWidth: 275, flex: 1 }}>
              <Card variant="outlined">
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    alignItems: 'center',
                    cursor: 'pointer',
                    ':hover': {
                      backgroundColor: '#dae7f9',
                    },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: '1rem', color: colors.black1 }}>Total Sale</Typography>
                    <Typography sx={{ fontSize: '2rem', color: colors.black1 }}>{totalSale}tk</Typography>
                  </Box>
                  <Box>
                    <OutboundIcon sx={{ height: '3rem', width: '3rem', color: colors.primary }} />
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box sx={{ minWidth: 275, flex: 1 }}>
              <Link to="/dashboard/orders" style={{ textDecoration: 'none' }}>
                <Card variant="outlined">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      alignItems: 'center',
                      cursor: 'pointer',
                      ':hover': {
                        backgroundColor: '#dae7f9',
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '1rem', color: colors.black1 }}>Total orders</Typography>
                      <Typography sx={{ fontSize: '2rem', color: colors.black1 }}>
                        {(allOrders && Array.isArray(allOrders?.data) && allOrders?.data?.length) || 0}
                      </Typography>
                    </Box>
                    <Box>
                      <OutboundIcon sx={{ height: '3rem', width: '3rem', color: colors.primary }} />
                    </Box>
                  </Box>
                </Card>
              </Link>
            </Box>
            <Box sx={{ minWidth: 275, flex: 1 }}>
              <Link to="/dashboard/table" style={{ textDecoration: 'none' }}>
                <Card variant="outlined">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      alignItems: 'center',
                      cursor: 'pointer',
                      ':hover': {
                        backgroundColor: '#dae7f9',
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '1rem', textDecoration: 'none', color: colors.black1 }}>
                        Current orders
                      </Typography>
                      <Typography sx={{ fontSize: '2rem', textDecoration: 'none', color: colors.black1 }}>
                        {activeTables.length}
                      </Typography>
                    </Box>
                    <Box>
                      <OutboundIcon sx={{ height: '3rem', width: '3rem', color: colors.primary }} />
                    </Box>
                  </Box>
                </Card>
              </Link>
            </Box>
          </Box>
          <OrderAnalytics />
        </Box>
        {/* Most sold food section */}
      </Container>
    </>
  );
}
