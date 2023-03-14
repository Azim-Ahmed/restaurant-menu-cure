import React, { useState } from 'react';

import { Box, Typography, Button, Card } from '@mui/material';
import BasicModal from '../../../components/ui/BasicModal';
import CreateCategoryForm from './CreateCategoryForm';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import colors from '../../../utils/colors';

import { useGetCategoriesQuery, useDeleteCategoryMutation } from 'src/features/categories/categoriesApi';

const CategorySection = (props) => {
  const { activeCategory, setActiveCategory, setActiveCategoryName } = props;
  const {data:categoryData, isLoading:categoriesLoading, isSuccess:categoriesSuccess} = useGetCategoriesQuery();
  
  // const {data:createdCategory, isLoading:createLoading, isSuccess:createSuccess} = useCreateCategoryMutation();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [submitType, setSubmitType]= useState(null)
  const [updateCategory, setUpdateCategory] = useState(null);

  const [deleteCategory] = useDeleteCategoryMutation();

  const modalClose = () => {
    setModalOpen(false);
    setSubmitType(null);
    setUpdateCategory(null);
  };

  // const deleteCategory = async (id)=>{

  // }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          <Typography variant="h4">Category</Typography>
          <Button variant="contained" onClick={() => setModalOpen(true)}>
            Add
          </Button>
        </Box>
        {categoryData?.data?.map(category=>{

       return <Box key={category.id} sx={{ marginTop: '.5rem' }}>
          <Card
           
            variant="outlined"
            sx={{
              borderRadius: '0',
              padding: '.8rem',
              justifyContent: 'space-between',
              bgcolor: '#F9FAFB',
              display: 'flex',
              alignItems: 'center',
              ":hover":{
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              },
              color: activeCategory === category.id && "white",
              backgroundColor: activeCategory === category.id && colors.primary
            }}
          >
            <Box  onClick={()=>{
              setActiveCategory(category.id)
              setActiveCategoryName(category.attributes.name)
              }} sx={{ cursor:"pointer", display: 'flex', gap: '.5rem', alignItems: 'center' }}>
              {/* <img style={{width:"3rem"}} alt='product' src={"/assets/images/products/product_7.jpg"}/> */}
              <MenuBookIcon />
              <Typography sx={{ fontSize: 18, fontWeight: '600' }}>{category.attributes.name}</Typography>
            </Box>
            <Box sx={{ textAlign: 'end' }}>
              <Button  onClick={()=>deleteCategory(category?.id)}>
                <DeleteIcon style={{ color: colors.failed }} />
              </Button>
              <Button onClick={()=>{
                setSubmitType("update");
                setUpdateCategory(category);
                setModalOpen(true);
              }}>
                <EditIcon style={{ color: activeCategory === category.id && "white"}}/>
              </Button>
            </Box>
          </Card>
        </Box>
        })}
      </Box>

      <BasicModal open={modalOpen} handleClose={modalClose}>
        <Typography variant="h4">{submitType === "update" ?  "Update" : "Create"} Category</Typography>
        <CreateCategoryForm submitType={submitType} defaultData={updateCategory?.attributes} id={updateCategory?.id} modalClose={modalClose}/>
      </BasicModal>
    </>
  );
};

export default CategorySection;
