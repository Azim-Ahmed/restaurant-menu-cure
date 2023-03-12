import React from 'react';
import { Box, TextField, Select, MenuItem, InputLabel, FormControl, Button} from '@mui/material';

const CreateCategoryForm = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
  return (
    <Box sx={{ width: '100%',marginTop:"1rem", textAlign: 'center', padding:".5rem 1rem" }}>
      <form style={{ width: '100%', textAlign: 'center' }}>
        <FormControl fullWidth style={{marginTop:"1rem"}}>
        <InputLabel id="demo-simple-select-label"> Store</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem selected value={10}>Artichoke</MenuItem>
        </Select>
        </FormControl>

        <TextField style={{ width: '100%', marginTop: '5px' }} type="text" label="Name*" variant="outlined" />
        <TextField style={{ width: '100%', marginTop: '5px' }} type="text" label="Description" variant="outlined" />
        <FormControl fullWidth style={{marginTop:".5rem"}}>
        <InputLabel id="demo-simple-select-label"> Modifier groups</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem selected value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>

        <Button sx={{width:"100%", marginTop:"1rem"}} variant='contained'>Submit</Button>
      </form>
    </Box>
  );
};

export default CreateCategoryForm;
