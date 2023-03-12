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

const CreateProductForm = () => {
  const [filesToSave, setFilesToSave] = React.useState([]);
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
  const toEpics = [
    {
      label: "azim",
      value: "1"
    },
    {
      label: "bro this is awesome",
      value: "2"
    }
  ]
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '100%', textAlign: 'center' }}>
        <MUIAutoComplete
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
        />

        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label={`Name`} name="name" control={control} />
        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label={`Description`} name="description" control={control} />
        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label="Price*" name="price" control={control} />
        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label="Unit" name="price" control={control} />
        <HookFormTextField style={{ width: '100%', marginTop: '5px' }} variant="outlined" label="Preparation Time" name="price" control={control} />
        <Box sx={{ marginTop: '1rem', marginBottom: "1rem" }}>
          <DropzoneSection
            showFileNames={true}
            showPreviewsInDropzone={true}
            setUpdateFilesToSave={setFilesToSave}
            dropzoneText
          />
        </Box>

        <Button sx={{ width: '100%', marginTop: '1rem' }} variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateProductForm;
