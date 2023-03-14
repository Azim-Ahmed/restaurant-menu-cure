// component
import GridViewIcon from '@mui/icons-material/GridView';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TableBarIcon from '@mui/icons-material/TableBar';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <GridViewIcon />,
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Food',
    path: '/dashboard/food',
    icon: <FastfoodIcon />,
  },
  {
    title: 'Table',
    path: '/dashboard/table',
    icon: <TableBarIcon />
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
