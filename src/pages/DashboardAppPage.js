import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Button, Typography, Box, Chip, Card, CardContent, CardActions, Table, TableHead, TableRow, TableCell } from '@mui/material';

import QrCodeIcon from '@mui/icons-material/QrCode';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OutboundIcon from '@mui/icons-material/Outbound';

import colors from '../utils/colors';

// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  const handleClickChip = () => { };
  const { user } = useSelector(state => state.auth)

  const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      •
    </Box>
  );

  const card = (
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
        <Typography sx={{ fontSize: '1rem', color: colors.black1 }}>Orders</Typography>
        <Typography sx={{ fontSize: '2rem', color: colors.black1 }}>0</Typography>
      </Box>
      <Box>
        <OutboundIcon sx={{ height: '3rem', width: '3rem', color: colors.primary }} />
      </Box>
    </Box>
  );

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
          {/* <Box sx={{ textAlign: 'right' }}>
            <Typography>Your Customer App url</Typography>
            <Box
              sx={{
                textAlign: 'right',
                display: 'flex',
                gap: '.5rem',
              }}
            >
              <QrCodeIcon sx={{ cursor: 'pointer' }} />
              <ContentCopyIcon sx={{ cursor: 'pointer' }} />
              <Typography>https://menutigr.com/artichoke-144531222993074</Typography>
            </Box>
          </Box> */}
        </Box>
        {/* Weeks & date section */}
        <Box>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Chip label="Today" variant="outlined" onClick={handleClickChip} />
            <Chip label="Week" variant="outlined" onClick={handleClickChip} />
            <Chip label="Month" variant="outlined" onClick={handleClickChip} />
            <Chip label="Custom" variant="outlined" onClick={handleClickChip} />
          </Box>
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
            <Typography>03/08/2023 - 03/08/2023</Typography>
          </Box>
        </Box>
        {/* analytics section */}
        <Box sx={{ marginTop: '1rem' }}>
          <Box sx={{ display: 'flex', width: '100%', gap: '1rem' }}>
            <Box sx={{ minWidth: 275, flex: 1 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
            <Box sx={{ minWidth: 275, flex: 1 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
            <Box sx={{ minWidth: 275, flex: 1 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: '1rem',
              minHeight: '25rem',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
              padding: '1rem',
              borderRadius: '.5rem',
            }}
          >
            <Typography sx={{ fontSize: '1.3rem', fontWeight: '600' }}>Order Analytics</Typography>
          </Box>
        </Box>
        {/* Most sold food section */}
        <Box
          sx={{
            marginTop: '1rem',
            minHeight: '25rem',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            padding: '1rem',
            borderRadius: '.5rem',
          }}
        >
          <Typography sx={{ fontSize: '1.3rem', fontWeight: '600' }}>Order Analytics</Typography>

          <Table sx={{ marginTop: "1rem" }}>
            <TableHead>
              <TableRow>
                <TableCell>Food name</TableCell>
                <TableCell>Item price</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </Container>
    </>
  );
}
