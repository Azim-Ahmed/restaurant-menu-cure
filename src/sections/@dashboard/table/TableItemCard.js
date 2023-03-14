import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
import {Link} from 'react-router-dom';
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

export default function TableItemCard({tableId, table, index }) {
  const { name } = table;

  const tableType = name?.split(" ")[0];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link style={{textDecoration:"none"}} to={{
        pathname: "/dashboard/order-management",
        search: `?table=${tableId}`, 
      }}
       >
      <Card sx={{ ":hover":{
        boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",

      },
      bgcolor: table.status == false ? colors.primary : "white",
      color: table.status == false ? "white" : "black"
      }}>
        <CardContent sx={{textAlign:'center'}}>
          <Box>
            {table.type === "delivery" ? <DeliveryDiningIcon sx={{ color: table.status == false? "white" :colors.black2, fontSize:100}}/> : table.type === "takeaway" ? <ShoppingBagIcon sx={{ color: table.status == false? "white" :colors.black2, fontSize:100}}/> : <TableBarIcon sx={{ color: table.status == false? "white" :colors.black2, fontSize:100}}/>}
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
