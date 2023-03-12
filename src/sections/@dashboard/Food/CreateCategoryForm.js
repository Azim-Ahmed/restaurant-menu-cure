import React from 'react';
import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import HookFormTextField from 'src/components/Reusable/HookFormTextField';

const CreateCategoryForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: "all",
  });
  const onSubmit = (data) => {
    console.log({ data })
  }
  return (
    <Box sx={{ width: '100%', marginTop: "1rem", textAlign: 'center', padding: ".5rem 1rem" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '100%', textAlign: 'center' }}>
        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label={`Name`} name="name" control={control} />
        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label={`Description`} name="description" control={control} />

        <Button sx={{ width: "100%", marginTop: "1rem" }} type="submit" variant='contained'>Submit</Button>
      </form>
    </Box>
  );
};

export default CreateCategoryForm;
