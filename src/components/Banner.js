import React, { useContext, useState } from 'react';
import logo_transp from '../img/logo_transp.png';

import { 
    Grid, 
    Box, 
    Typography
} from '@mui/material';

const Banner = () => {
    return <>
        <Box sx={{
            borderRadius: 0, 
            // justifyContent: "right", 
            // alignItems: "right", 
            display: "flex", 
            height: "80vh",
            paddingTop:10, 
        }}
            >
            
            <Grid container spacing={2} direction={"column"}
                sx={{
                    padding:10,
                }}
            >
                
                <Grid item xs={6} md={12}
                    sx={{
                        justifyContent:"center", 
                        justifyItems:"center", 
                        alignItems: 'center',
                        display:"flex"
                    }}>
                    <Typography variant="h1" fontSize={80} align='center'>
                        Mobility <br/> Opportunities <br/> Happening
                    </Typography>
                </Grid>

                <Grid item xs={6} md={12}
                    sx={{
                        justifyContent:"center", 
                        justifyItems:"center", 
                        display:"flex"
                    }}>
                        <img src={logo_transp} style={{
                            width: "auto",
                        }}/>
                </Grid>
                
            </Grid>
            
        </Box>
    </>
}

export default Banner;