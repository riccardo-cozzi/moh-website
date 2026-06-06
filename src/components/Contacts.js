import React, { useContext, useEffect, useState } from 'react';
import config from '../config.json';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';
import { GRADIENT, gradientButtonSx, gradientTitle } from '../styles';
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
    flexDirection: "row",
    gap: "16px",
    padding: "24px 40px",
}

const contactsSectionStyle = {
    borderRadius: "20px",
    margin: "40px auto",
    cursor: "pointer",
    background: "linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "table",
}


const Contacts = () => {
    const [language, ] = useContext(LanguageContext)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [charCount, setCharCount] = useState(0)
    const [sent, setSent] = useState(false)

    const defaultFormData = {
        name: "", 
        email: "",
        nationality: "",
        organisation: "",
        message: ""
    }
    const [formData, setFormData] = useState(defaultFormData)
    const maxChar = 255;   

   
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
        const nationalityPart = formData.organisation
            ? `${formData.nationality}, ${formData.organisation}`
            : formData.nationality
        const subject = encodeURIComponent(`Contact from ${formData.name} (${nationalityPart})`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\nNationality: ${formData.nationality}${formData.organisation ? `\nOrganisation: ${formData.organisation}` : ''}\nSender: ${formData.email}\n\n${formData.message}`
        )
        window.open(`mailto:${config.contactEmail}?subject=${subject}&body=${body}`)
        handleClose()
    }

    const handleChangeName = (event) => setFormData({...formData, name: event.target.value })
    const handleChangeEmail = (event) => setFormData({...formData, email: event.target.value})
    const handleChangeNationality = (event) => setFormData({...formData, nationality: event.target.value, })
    const handleChangeOrganisation = (event) => setFormData({...formData, organisation: event.target.value })
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
        if (formData.organisation.length > maxChar) {
            setFormData({...formData, organisation: formData.organisation.slice(0, maxChar)})
        }
        if (formData.message.length > maxChar) {
            setFormData({ ...formData, message: formData.message.slice(0, maxChar)})
            setCharCount(maxChar)
        } else {
            setCharCount(formData.message.length)
        }
    }, [formData])


    return <>
        <Paper
            elevation={20}
            style={contactsSectionStyle}
            onClick={handleOpen}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '' }}
        >
            <Stack style={contactBoxStyle}>
                <MailOutlineIcon style={{ width: "32px", height: "32px", color: "rgba(255,255,255,0.85)" }} />
                <Typography variant='h5' sx={{ fontFamily: 'Neogen', color: 'white' }}>
                    {getText("contact_card_title", language.id)}
                </Typography>
               
            </Stack>
        </Paper>

        
        <Dialog
              open={dialogOpen}
              keepMounted
              onClose={handleClose}
              PaperProps={{sx: {height: 700, width: 600, overflow: 'hidden', borderRadius: 5}}}
            >
                <DialogTitle>
                    <Stack direction={"row"} justifyContent="space-between" alignItems="center">
                        <Typography fontSize={30} sx={gradientTitle}>{getText("contact_card_title", language.id)}</Typography>
                        <Typography color="gray">
                            <CloseIcon sx={{cursor:"pointer"}} onClick={handleClose}/>
                        </Typography>
                    </Stack>
                    
                </DialogTitle>
              
                <DialogContent>
                   
                    <DialogContentText id="alert-dialog-slide-description">
                        {getText("contact_dialog_description", language.id)}
                    </DialogContentText>
    
                    <Stack container spacing={2} sx={{marginTop:5}}>
                        <TextField label={getText("contact_field_name", language.id)} required value={formData.name} onChange={handleChangeName}/>
                        <TextField label={getText("contact_field_email", language.id)} required value={formData.email} onChange={handleChangeEmail}/>
                        <TextField label={getText("contact_field_nationality", language.id)} required value={formData.nationality} onChange={handleChangeNationality}/>
                        <TextField label={getText("contact_field_organisation", language.id)} value={formData.organisation} onChange={handleChangeOrganisation}/>
                        
                        <Stack>
                            <TextField label={getText("contact_field_message", language.id)} required multiline minRows={5} 
                                        onChange={handleChangeMessage} value={formData.message}
                            />
                            <Typography fontSize="small" color="gray" align='right' sx={{marginRight:1}}>
                                {charCount}/{maxChar}
                            </Typography>
                        </Stack>
    
                        <Button
                            onClick={handleSend}
                            fullWidth
                            size="large"
                            variant='contained'
                            sx={gradientButtonSx}
                        >
                            {getText("contact_send_button", language.id)}
                        </Button>
                    </Stack>
    
                </DialogContent>
                
            </Dialog>            
        
        
    </>
}


export default Contacts;
