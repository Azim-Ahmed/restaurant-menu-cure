import { Helmet } from 'react-helmet-async';


// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// section 
import TableItemCard from '../sections/@dashboard/table/TableItemCard';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
import {tables} from '../_mock/tables';

import { useGetTablesQuery, useGetSingleTableDataQuery } from 'src/features/tables/tablesApi';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function TablePage() {
  const {data, isLoading, isSuccess} = useGetTablesQuery();

  console.log("data is: ", data)

  return (
    <>
      <Helmet>
        <title> Dashboard: table </title>
      </Helmet>

      <Container  maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Table
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={3}>
          {data?.data?.map((table, index) => (
            <TableItemCard key={table.attributes.id} tableId ={table.id} table={table.attributes} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
