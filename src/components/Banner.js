import React, { useContext, useState, useEffect } from 'react';
import mohCircle from '../img/moh-circle.png';
import mohText from '../img/moh-text.png';
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
            isMobile ? <SmartphoneIcon style={{opacity:0.1}} /> : <LaptopIcon style={{opacity:0.1}} /> 
        }
        <Box sx={{
            borderRadius: 0, 
            // justifyContent: "right", 
            // alignItems: "right", 
            display: "flex", 
            height: "80vh",
            paddingTop:7, 
        }}
            >
            {
                isMobile ? 
                    // ------------------------ Mobile version ------------------------
                    <Grid container spacing={0} direction={"row"} sx={{ padding: { xs: 2, sm: 5 }, width: '100%', margin: 0 }}>
                        <Grid item xs={12}
                            sx={{
                                justifyContent:"center", 
                                justifyItems:"center", 
                                display:"flex",
                            }}> 
                                <LogoMark size="min(350px, 100%)" />
                        </Grid>
                        <Grid item xs={12}
                            sx={{
                                // justifyContent:"center", 
                                // justifyItems:"center", 
                                // alignItems: 'center',
                                // display:"flex"
                            }}>
                                <Typography variant="h2" align='center' sx={{ ...gradientTitle, width: '100%' }}>
                                    Mobility Opportunities <br/> Happening
                                    {/* Website in construction */}
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
                                    {/* Website in construction */}
                                </Typography>                    
                        </Grid>

                        <Grid item xs={12} sm={6}
                            sx={{
                                justifyContent:"center", 
                                justifyItems:"center", 
                                display:"flex"
                            }}>
                                <LogoMark size={550} />
                        </Grid>
                    </Grid>
                    
                    
            }
    
            
        </Box>
    </>
}

const LogoMark = ({ size }) => (
    <Box
        sx={{
            position: 'relative',
            width: size,
            height: size,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
        }}
    >
        <Box
            component="img"
            src={mohCircle}
            alt=""
            aria-hidden="true"
            className="banner-logo-circle"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
        <Box
            component="img"
            src={mohText}
            alt="Mobility Opportunities Happening"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
    </Box>
);

export default Banner;