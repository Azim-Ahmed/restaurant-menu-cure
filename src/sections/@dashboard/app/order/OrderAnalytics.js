import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import { Box, Card, Typography } from '@mui/material';
import moment from 'moment/moment';

import { useGetCurrentMonthOrderQuery } from 'src/features/queryApi/queryApi';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OrderAnalytics = () => {
  var check = moment(new Date(), 'YYYY/MM/DD');
  const day = check.format('D');
  const month = check.format('M');
  const monthName = check.format('MMMM');
  const year = check.format('YYYY');
  // console.log('check is : ', day, month, year);

  const { data: currentMothOrders } = useGetCurrentMonthOrderQuery();

  const [allLabels, setAllLabels] = useState([]);
  const arr = Array.from({ length: day }, (_, index) => index + 1);
  // console.log('current month orders is : ', currentMothOrders?.data);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "Current month's order analytics",
        font:{
          size:20
        }
      },
    },
  };

  const getFormatedDay = (arg) => {
    const c = moment(arg, 'YYYY/MM/DD');
    const day = c.format('D');
    return day;
  };

  const setupAllLabels = async (d) => {
    arr.map(async (num) => {
      const dayOrders = await d.filter((o) => getFormatedDay(o.attributes.createdAt) == num);
      //   console.log('day Order is : ', dayOrders);
      if (!dayOrders) {
        return;
      }
      if (dayOrders.length > 0) {
        const totalPrice = dayOrders.reduce(function (accumulator, currentValue) {
          return Number(accumulator) + Number(currentValue.attributes.totalPrice);
        }, 0);
        // console.log('total price is : ', totalPrice);
        setAllLabels((prev) => [...prev, { date: `${num}`, totalPrice: totalPrice }]);
        return;
      } else {
        setAllLabels((prev) => [...prev, { date: `${num}`, totalPrice: 0 }]);
        return;
      }
    });
  };

  // console.log('all labels is : ', allLabels);

  useEffect(() => {
    setupAllLabels(currentMothOrders?.data);
  }, [currentMothOrders]);

  const data = {
    labels: allLabels.map((l) => l.date),
    datasets: [
      {
        label: monthName,
        // data: [10, 100,50,80,200],
        data: allLabels.map((l) => Number(l.totalPrice)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)',
        fontSize: '70px',
      },
    ],
  };

  // console.log('faker value is : ');
  return (
    <>
      <Box
        sx={{
          marginTop: '1rem',
          minHeight: '25rem',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
          padding: '1rem',
          borderRadius: '.5rem',
        }}
      >
        {/* <Typography sx={{ fontSize: '1.3rem', fontWeight: '600' }}>Order Analytics</Typography> */}

        <Line options={options} data={data} />
      </Box>
    </>
  );
};

export default OrderAnalytics;
