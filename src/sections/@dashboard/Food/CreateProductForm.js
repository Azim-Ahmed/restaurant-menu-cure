import React from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  FormControlLabel,
  Checkbox,
  useAutocomplete,
} from '@mui/material';

import { DropzoneArea } from 'material-ui-dropzone';
import HookFormTextField from 'src/components/Reusable/HookFormTextField';
import { useForm } from 'react-hook-form';
import MUIAutoComplete from 'src/components/Reusable/MuiAutoComplete';
import DropzoneSection from 'src/components/Reusable/DropzoneSection';

import { useCreateFoodMutation, useUpdateFoodMutation } from '../../../features/foods/foodsApi';

const CreateProductForm = (props) => {
  const { submitType, category, defaultData, modalClose, id } = props;
  const [filesToSave, setFilesToSave] = React.useState([]);
  const [createFood] = useCreateFoodMutation();
  const [updateFood] = useUpdateFoodMutation();
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: 'all',
  });
  const onSubmit = async (data) => {
    console.log('Food data is : ', data);
    const submitData = {
      data: {
        name: data?.name,
        description: data?.description,
        price: data?.price,
        unit: data?.unit,
        preparationTIme: data?.preparationTIme,
        status: 1,
        category: category,
      },
    };

    if (submitType === 'update') {
      await updateFood({ id: id, submitData });
    } else {
      await createFood(submitData);
    }
    modalClose();
    console.log('Food is created');
  };
  const toEpics = [
    {
      label: 'azim',
      value: '1',
    },
    {
      label: 'bro this is awesome',
      value: '2',
    },
  ];
  return (
    <Box
      sx={{
        overflow: 'scoll',
        height: '100%',
        width: '100%',
        marginTop: '1rem',
        textAlign: 'center',
        padding: '.5rem 1rem',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', textAlign: 'center' }}>
        {/* <MUIAutoComplete
          control={control}
          name="category"
          options={[
            {
              label: "azim",
              value: "1"
            },
            {
              label: "bro this is awesome",
              value: "2"
            }
          ]}
          getOptionSelected={(option, value) => {
            return option.value === value.value;
          }}
          // renderOption={(option, { selected }) => (
          //   <div
          //     style={{
          //       width: "100%",
          //     }}
          //   >
          //     <p
          //       style={{
          //         color: "black",
          //         marginLeft: "10px",
          //       }}
          //     >
          //       {option.label}
          //     </p>
          //   </div>
          // )}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label="Select Category"
              variant="outlined"
            />
          )}
        /> */}

        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label={`Name`}
          name="name"
          defaultValue={defaultData?.name}
          control={control}
        />
        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label={`Description`}
          name="description"
          defaultValue={defaultData?.description}
          control={control}
        />
        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label="Price*"
          type="number"
          name="price"
          defaultValue={defaultData?.price}
          control={control}
        />
        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label="Unit"
          name="unit"
          defaultValue={defaultData?.unit}
          control={control}
        />
        <HookFormTextField
          style={{ width: '100%', marginTop: '5px' }}
          variant="outlined"
          label="Preparation Time"
          name="preparationTIme"
          defaultValue={defaultData?.preparationTIme}
          control={control}
        />
        {/* <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <DropzoneSection
            showFileNames={true}
            showPreviewsInDropzone={true}
            setUpdateFilesToSave={setFilesToSave}
            dropzoneText
          />
        </Box> */}

        <Button type="submit" sx={{ width: '100%', marginTop: '1rem' }} variant="contained">
          {submitType === 'update' ? 'Update' : 'Create'}
        </Button>
      </form>
    </Box>
  );
};

export default CreateProductForm;
