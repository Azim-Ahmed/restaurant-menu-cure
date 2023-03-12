import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// icons
import TableBarIcon from '@mui/icons-material/TableBar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

import colors from '../../../utils/colors';
//
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

// const StyledTitle = styled(Link)({
//   height: 44,
//   overflow: 'hidden',
//   WebkitLineClamp: 2,
//   display: '-webkit-box',
//   WebkitBoxOrient: 'vertical',
// });


// ----------------------------------------------------------------------

TableItemCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function TableItemCard({ table, index }) {
  const { name } = table;

  const tableType = name?.split(" ")[0];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link style={{textDecoration:"none"}} href='/dashboard/order-management'>
      <Card sx={{ ":hover":{
        boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"
      }}}>
        <CardContent sx={{textAlign:'center'}}>
          <Box>
            {tableType === "Delivery" ? <DeliveryDiningIcon sx={{color:colors.black2, fontSize:100}}/> : tableType === "Take" ? <ShoppingBagIcon sx={{color:colors.third, fontSize:100}}/> : <TableBarIcon sx={{color:colors.third, fontSize:100}}/>}
            
          </Box>
          <Typography
            color="inherit"
            // variant="subtitle2"
            // underline="hover"
            sx={{
              typography: 'h5',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
}
