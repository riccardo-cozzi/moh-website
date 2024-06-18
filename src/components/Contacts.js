import React, { useContext, useEffect, useState } from 'react';
import { 
    Box,
    Stack,
    Button,
    Typography,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, 
    TextField,
    Snackbar,Alert,
    Paper
} from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';

const contactBoxStyle = {
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex", 
    height: "50vh"
}

const contactsSectionStyle = {
    borderRadius:"100px",
    margin:"100px",
    cursor: "pointer"
}


const Contacts = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [charCount, setCharCount] = useState(0)
    const [sent, setSent] = useState(false)

    const defaultFormData = {
        name: "", 
        email: "",
        nationality: "",
        message: ""
    }
    const [formData, setFormData] = useState(defaultFormData)
    const maxChar = 5;   

   
    const handleClose = () => {
        setDialogOpen(false)
        setFormData(defaultFormData)
    }
    const handleOpen = () => {
        setDialogOpen(true)
    }
    
    const handleCloseSnack = () => {
        setSent(false)
    }

    const handleSend = () => {
        setSent(true)
        handleClose()
        console.log("Sending data: ", formData)
    }

    const handleChangeName = (event) => setFormData({...formData, name: event.target.value })
    const handleChangeEmail = (event) => setFormData({...formData, email: event.target.value})
    const handleChangeNationality = (event) => setFormData({...formData, nationality: event.target.value, })
    const handleChangeMessage = (event) => setFormData({...formData, message: event.target.value, })

    
    // limita il numero di caratteri immessi nei campi di input
    useEffect(() => {
        if (formData.name.length > maxChar) {
            setFormData({...formData, name: formData.name.slice(0, maxChar)})
        }
        if (formData.email.length > maxChar) {
            setFormData({ ...formData, email: formData.email.slice(0, maxChar)})
        }
        if (formData.nationality.length > maxChar) {
            setFormData({...formData, nationality: formData.nationality.slice(0, maxChar)})
        }
        if (formData.message.length > maxChar) {
            setFormData({ ...formData, message: formData.message.slice(0, maxChar)})
            setCharCount(maxChar)
        }
    }, [formData])


    return <>
        <Paper elevation={20} style={contactsSectionStyle} onClick={handleOpen}>
            <Stack style={contactBoxStyle}>
                <Typography variant='h2'>
                    Contact us
                </Typography>
                
                <Box>
                    <MailOutlineIcon style={{width:"100px", height:"100px", color:"#bbb"}}/>
                </Box>
            </Stack>
        </Paper>

        
        <Dialog
              open={dialogOpen}
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
                        <TextField label="Name" required value={formData.name} onChange={handleChangeName}/>
                        <TextField label="Email address" required value={formData.email} onChange={handleChangeEmail}/>
                        <TextField label="Nationality" required value={formData.nationality} onChange={handleChangeNationality}/>
                        
                        <Stack>
                            <TextField label="Your message" required multiline minRows={5} 
                                        onChange={handleChangeMessage} value={formData.message}
                            />
                            <Typography fontSize="small" color="gray" align='right' sx={{marginRight:1}}>
                                {charCount}/{maxChar}
                            </Typography>
                        </Stack>
    
                        <Button onClick={handleSend} fullWidth size="large" variant='contained'>Send</Button>
                    </Stack>
    
                </DialogContent>
                
            </Dialog>            
          
        
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
       
        
    </>
}


export default Contacts;
