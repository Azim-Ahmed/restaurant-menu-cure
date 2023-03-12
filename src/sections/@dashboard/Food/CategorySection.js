import React, {useState} from 'react'

import { Box, Typography, Button, Card} from '@mui/material';
import BasicModal from '../../../components/ui/BasicModal';
import CreateCategoryForm from './CreateCategoryForm';

const CategorySection = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const modalClose =()=>{
        setModalOpen(false)
    }

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{display:"flex", justifyContent:"space-between",padding:"1rem"}}>
            <Typography variant='h4'>Category</Typography>
            <Button variant='contained' onClick={()=>setModalOpen(true)}>Add</Button>
        </Box>

        <Box sx={{ marginTop: '1rem' }}>
        <Card variant='outlined' sx={{borderRadius:"0", padding:".8rem", justifyContent:"space-between", bgcolor:"#F9FAFB", display:"flex", alignItems:"center"}}>
          <Box sx={{ display:'flex', gap:".5rem", alignItems:"center"}}>
               <img style={{width:"3rem"}} alt='product' src={"/assets/images/products/product_7.jpg"}/>
                <Typography sx={{fontSize:18, fontWeight:"600"}}>Chinese Food</Typography>
          </Box>
          <Box sx={{ textAlign:"end"}}>
           <Button>
            ...
           </Button>
          </Box>
        </Card>
      </Box>
    </Box>


    <BasicModal open={modalOpen} handleClose={modalClose}>

        <Typography variant='h4'>Create Category</Typography>
          <CreateCategoryForm/>
    </BasicModal>
    </>
  );
}

export default CategorySection