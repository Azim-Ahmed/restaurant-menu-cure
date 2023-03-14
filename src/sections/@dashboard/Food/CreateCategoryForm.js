import React from 'react';
import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import HookFormTextField from 'src/components/Reusable/HookFormTextField';

import { useCreateCategoryMutation, useUpdateCategoryMutation } from '../../../features/categories/categoriesApi';

const CreateCategoryForm = (props) => {
  const { submitType,defaultData,modalClose,id } = props;
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  console.log("id is :", id)

  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: 'all',
  });
  const onSubmit =async (data) => {
    console.log('category submit Data is : ', data);
    const submitData = {
      data: {
        name: data.name,
        description: data.description,
      },
    };

    console.log("data is : ", submitData)
    if(submitType === "update"){
      console.log("called in update")
      await updateCategory({id, submitData})
    }else{
      console.log("called in creation")
      await createCategory(submitData)
    }

    modalClose();
  };
  return (
    <Box sx={{ width: '100%', marginTop: '1rem', textAlign: 'center', padding: '.5rem 1rem' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', textAlign: 'center' }}>
        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label={`Name`}
          name="name"
          control={control}
          defaultValue={defaultData?.name}
        />
        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label={`Description`}
          name="description"
          control={control}
          defaultValue={defaultData?.description}
        />

        <Button sx={{ width: '100%', marginTop: '1rem' }} type="submit" variant="contained">
          {submitType === "update" ? "Update" : "Create"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateCategoryForm;
