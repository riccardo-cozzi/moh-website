import React, { useContext, useState } from 'react';
import { 
    Box,
    Grid
} from '@mui/material';
import { Stories } from '../components/StoriesPanel';
import InfoBoxes from '../components/InfoBox';
import ParthnersSection from '../components/ParthnersSection';
import Contacts from './Contacts';



const Content = () => {

    return <>
    <Grid container spacing={10}>

        {/* Info Boxes */}
        <Grid item xs={12} >
            <Box sx={{marginLeft:10, marginRight:10}}>
                <InfoBoxes />
            </Box>  
        </Grid>

        {/* Parthners */}
        <Grid item xs={12} >
            <Box sx={{marginLeft:0, marginRight:0}}>
                <ParthnersSection />
            </Box>
        </Grid>

        {/* Stories */}
        <Grid item xs={12} >
            <Box sx={{marginLeft:0, marginRight:0}}>
                <Stories />
            </Box>
        </Grid>

        <Grid item xs={12}>
            <Contacts />
        </Grid>
    </Grid>
    </>
}

export default Content;
