import { Box } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';
// import { RIconButton } from '..';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { Box } from '@material-ui/core';
import RIconButton from '../RIconButton';
/**
 *@function DropzoneSection.jsx
 *@author Azim
 *
 **/

const DropzoneSection = ({
  setUpdateFilesToSave,
  updateFilesToSave,
  dropzoneText,
  showPreviewsInDropzone,
  showFileNames,
  showPreviews,
}) => {
  return (
    <DropzoneArea
      showPreviewsInDropzone={showPreviewsInDropzone ? showPreviewsInDropzone : false}
      showFileNames={showFileNames ? showFileNames : false}
      showPreviews={false}
      maxFileSize={105000000}
      onChange={(files) => {
        setUpdateFilesToSave(files);
      }}
      // acceptedFiles={[
      //   "image/*,application/pdf,.doc,.docx,.ppt,.xls,.xlsx,.zip,.csv,.tsv,.txt,.ppt,.pptx,.pages,.odt,.rtf",
      //   "video/*,.mp4,.mkv,.avi,.webm",
      // ]}
      showAlerts={true}
      files={updateFilesToSave}
      onDelete={(file) => console.log(file)}
      alertSnackbarProps={{
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        message: 'Updated',
        autoHideDuration: 2000,
      }}
      filesLimit={20}
      dropzoneText={
        dropzoneText ? (
          <Box fontSize={16}>
            <p
              style={{
                fontWeight: '500',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span>{<CloudUploadIcon />}</span>
              <span>
                &nbsp; Attach screenshots of Evidence <br /> Drop files to attach, or{' '}
                <span style={{ color: 'blue' }}>browse</span>
              </span>
            </p>
          </Box>
        ) : (
          <RIconButton edge="end" title="click to add file" style={{ zIndex: '2' }} color="#777777">
            <AddIcon />
          </RIconButton>
        )
      }
    />
  );
};

export default DropzoneSection;
