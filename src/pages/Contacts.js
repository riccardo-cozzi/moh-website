import React, { useContext, useState } from 'react';
import { 
    Box,
    Stack,
    Button,
    Typography,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, 
    TextField,
    Snackbar,Alert 
} from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';

const contactBoxStyle = {
    borderRadius: 5, 
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex", 
    height: "50vh",
}


const Contacts = () => {
    const [dialogOpen, setDialogOpen] = useState(null)
    
    const closeDialog = () => setDialogOpen(false)
    const openDialog = () => setDialogOpen(true)

    return <>
        <Stack style={contactBoxStyle}>
            <h1>Contact us</h1>
            
            <Box onClick={openDialog}>
                <MailOutlineIcon fontSize='large' />
            </Box>
        </Stack>
        <ContactDialog open={dialogOpen} onClose={closeDialog}/>
    </>
}

const ContactDialog = ({open, onClose, ...props}) => {
    
    const maxChar = 255;   
    const [charCount, setCharCount] = useState(0)
    const [sent, setSent] = useState(false)
   
    const handleClose = () => {
      onClose()
    };

    const updateCharCount = (event) => {
        setCharCount(event.target.value.length)
    }

    const handleCloseSnack = () => {
        setSent(false)
    }

    const handleSend = () => {
        setSent(true)
        onClose()
    }
   
    return (
      open ?
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          PaperProps={{sx: {height: 700, width: 600, overflow: 'hidden', borderRadius: 5}}}
        >
            <DialogTitle>
                <Stack direction={"row"} spacing={40}>
                    <Typography fontSize={40}>Contact us!</Typography>
                    
                    <Typography color="gray">
                        <CloseIcon sx={{cursor:"pointer"}} onClick={handleClose}/>
                    </Typography>
                </Stack>
                
            </DialogTitle>
          
            <DialogContent>
               
                <DialogContentText id="alert-dialog-slide-description">
                    lorem ipsum dolorem sit amet lorem ipsum dolorem 
                    sit amet lorem ipsum dolorem sit amet
                     lorem ipsum dolorem sit amet lorem ipsum dolorem sit amet  
                </DialogContentText>

                <Stack container spacing={2} sx={{marginTop:5}}>
                    <TextField label="Name" required />
                    <TextField label="Email address" required />
                    <TextField label="Nationality" />
                    
                    <Stack>
                        <TextField label="Your message" required multiline minRows={5} onChange={updateCharCount}/>
                        <Typography fontSize="small" color="gray" align='right' sx={{marginRight:1}}>
                            {charCount}/{maxChar}
                        </Typography>
                    </Stack>

                    <Button onClick={handleSend} fullWidth size="large" variant='contained'>Send</Button>
                </Stack>

            </DialogContent>
            
            </Dialog>            
      : 
      sent ? 
    
      <Snackbar
        open={sent}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message="This Snackbar will be dismissed in 5 seconds."
        severity="success"
        variant="outlined"
        >
            <Alert
                onClose={handleCloseSnack}
                severity="success"
                variant="outlined"
                sx={{ width: '100%', backgroundColor:"rgba(0, 255, 0, 0.2)" }}
            >
                Your message has been sent succesfully
            </Alert>
        </Snackbar>
      : <></>
    )
  }


export default Contacts;
