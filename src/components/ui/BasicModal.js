import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   width: modalType === "small" ? "max-content" : "50%",
//   overflowY:"scroll",
//   maxHeight:"100vh"
// };

export default function BasicModal(props) {

  const {open, handleClose, modalType} = props;
  // const handleOpen = () => setOpen(true);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            width: modalType === "small" ? "max-content" : "50%",
            overflowY:"scroll",
            maxHeight:"100vh"
        }}>
          {props.children}
        </Box>
      </Modal>
    </div>
  );
}