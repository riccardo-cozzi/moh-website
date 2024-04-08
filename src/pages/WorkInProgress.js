import { Box, Button, IconButton, Typography, Stack } from '@mui/material';
import logo from '../img/logo_transp.png';
import React from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import background from '../img/banner_white.png';
import fileToDownload from '../files/MOH child policy.pdf'


export const WorkinProgress = () => {


    // buttonStyle is a round button with a black shadow and very small linear gradient from green to forest green
    const buttonStyle = {
        borderRadius: 50,
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        fontSize: '1.2em',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(90deg, green, darkgreen)',
        transition: 'all 0.3s',
    } 
    

    console.log("WorkinProgress");
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: 'white',
            width: '100%',
            backgrounImage: `url(${background})`,
            backgroundSize: "cover",

            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant='h4'>Download the file</Typography>
            <a
                className="App-link"
                href={fileToDownload}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button style={buttonStyle}>
                    <CloudDownloadIcon  size='large' sx={{padding:1}}/> Download
                </Button>
            </a>
            
        </Box>
      );
}