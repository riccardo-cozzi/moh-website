import React, { useContext, useState } from 'react';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';
import { Box, Grid } from '@mui/material';
import Content from './Content';
import Banner from '../components/Banner';
import background from '../img/fullbody11.jpg';

const HomePage = () => {
    
    return <>
        <Box sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Grid container spacing={20}>
                <Grid item xs={12} >
                    <Banner />
                </Grid>
                <Grid item xs={12} >
                    <Content />
                </Grid>
            </Grid>
        </Box>
    </>
 
}

export default HomePage;