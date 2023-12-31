import React, { useContext, useState } from 'react';
import logo_transp from '../img/logo_transp.png';
import banner from '../img/banner_white.png';

import { 
    Grid, 
    Box, 
    Typography
} from '@mui/material';

const Banner = () => {
    return <>
        <Box sx={{
            borderRadius: 0, 
            justifyContent: "center", 
            alignItems: "center", 
            display: "flex", 
            height: "80vh",
        }}
            >
            
            <Grid container spacing={2} direction={"row"}>

                <Grid item xs={12} sx={{justifyContent:"center", justifyItems:"center", display:"flex"}}>
                    <img src={logo_transp} style={{
                        width: "30%",
                    }}/>
                </Grid>
                <Grid item xs={12} sx={{justifyContent:"center", justifyItems:"center", display:"flex"}}>
                    <Typography variant="h2" fontSize={50}>Mobility Opportunities Happening</Typography>
                </Grid>
                
            </Grid>
            
        </Box>
    </>
}

export default Banner;