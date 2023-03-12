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

const CreateProductForm = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      <form style={{ width: '100%', textAlign: 'center' }}>
        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label"> Store</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Artichoke
            </MenuItem>
          </Select>
        </FormControl>

        <TextField style={{ width: '100%', marginTop: '.5rem' }} type="text" label="Name*" variant="outlined" />
        <TextField style={{ width: '100%', marginTop: '.5rem' }} type="text" label="Description" variant="outlined" />

        <TextField style={{ width: '100%', marginTop: '.5rem' }} type="text" label="Price*" variant="outlined" />
        <TextField style={{ width: '100%', marginTop: '.5rem' }} type="text" label="Size" variant="outlined" />
        <TextField style={{ width: '100%', marginTop: '.5rem' }} type="text" label="Unit" variant="outlined" />

        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label"> Tax Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label"> Modifier groups</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label">Ingredient warnings</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label"> Modifier groups</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ width: '100%', marginTop: '1rem', textAlign: 'left' }}>
          <FormControlLabel
            label="Featured"
            control={
              <Checkbox
              // checked={isChecked}
              // onChange={handleChange1}
              />
            }
          />
          <FormControlLabel
            label="Availability"
            control={
              <Checkbox
              // checked={isChecked}
              // onChange={handleChange1}
              />
            }
          />
          <FormControlLabel
            label="Availability"
            control={
              <Checkbox
              // checked={isChecked}
              // onChange={handleChange1}
              />
            }
          />
        </Box>

        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label"> Labels</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '.5rem' }}>
          <InputLabel id="demo-simple-select-label"> Display On</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem selected value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          style={{ width: '100%', marginTop: '.5rem' }}
          type="text"
          label="Preparation Time"
          variant="outlined"
        />
        <Box sx={{ marginTop: '1rem',marginBottom:"1rem" }}>
          <DropzoneArea
            style={{ }}
            // initialFiles={['https://images.pexels.com/photos/1909603/pexels-photo-1909603.jpeg']}
            onChange={() => {}}
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
