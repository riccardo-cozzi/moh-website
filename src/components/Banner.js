import React, { useContext, useState, useEffect } from 'react';
import logo_transp from '../img/logo_transp.png';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { 
    Grid, 
    Box, 
    Typography
} from '@mui/material';
import { gradientTitle } from '../styles';

const Banner = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = (width <= 950);
    console.log(width, "is mobile", isMobile)

    return <>
        {
            isMobile ? <SmartphoneIcon /> : <LaptopIcon /> 
        }
        <Box sx={{
            borderRadius: 0, 
            // justifyContent: "right", 
            // alignItems: "right", 
            display: "flex", 
            height: "80vh",
            paddingTop:10, 
        }}
            >
            {
                isMobile ? 
                    // ------------------------ Mobile version ------------------------
                    <Grid container spacing={0} direction={"row"} sx={{padding:5}}>
                        <Grid item xs={12}
                            sx={{
                                justifyContent:"center", 
                                justifyItems:"center", 
                                display:"flex",
                            }}> 
                                <img src={logo_transp} style={{width: 350, height: 350}} />
                        </Grid>
                        <Grid item xs={12}
                            sx={{
                                // justifyContent:"center", 
                                // justifyItems:"center", 
                                // alignItems: 'center',
                                // display:"flex"
                            }}>
                                <Typography variant="h1" fontSize={40} align='center' sx={{ ...gradientTitle, width: '100%' }}>
                                    Mobility Opportunities <br/> Happening
                                </Typography>                    
                        </Grid>
                    </Grid>
                    :
                    // ------------------------ Desktop version ------------------------
                    <Grid container spacing={2} direction={"row"} sx={{padding:10}}>
                        <Grid item xs={12} sm={6}
                            sx={{
                                justifyContent:"center", 
                                justifyItems:"center", 
                                alignItems: 'center',
                                display:"flex"
                            }}>
                                <Typography variant="h1" fontSize={100} sx={gradientTitle}>
                                    Mobility <br/> Opportunities <br/> Happening
                                </Typography>                    
                        </Grid>

                        <Grid item xs={12} sm={6}
                            sx={{
                                justifyContent:"center", 
                                justifyItems:"center", 
                                display:"flex"
                            }}>
                                <img src={logo_transp} style={{ width: 550, height: 550 }} />
                        </Grid>
                    </Grid>
                    
                    
            }
    
            
        </Box>
    </>
}

export default Banner;