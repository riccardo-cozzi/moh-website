import React from 'react';
import { Box, Grid,Typography } from '@mui/material';
import InfoBoxes from '../components/InfoBox'
import Stories from '../components/Stories'
import Partners from '../components/Partners'
import Contacts from '../components/Contacts'
import Banner from '../components/Banner';
import background from '../img/fullbody3.jpg';
import DeepHero from '../fonts/DeepHero.ttf'



const HomePage = () => {
    
    return <>
        <Box sx={{
            // background: 'linear-gradient(#fff, #fff)',
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundSize: "100% 100%",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
        }}>
            <Box sx={{backdropFilter: 'blur(50px)',}}>

                <Grid container spacing={20}>
                    <Grid item xs={12} >
                        <Banner />
                    </Grid>
                    
                    <Grid item xs={12} >
                        <Grid container spacing={10}>


                            {/* Info Boxes */}
                            
                            <Grid item sx={{marginLeft:10, marginRight:10}} > 
                                <InfoBoxes /> 
                            </Grid>

                            {/* Stories */}
                            
                            <Grid item > 
                                <Box sx={{marginLeft:0, marginRight:0}}> 
                                    <Typography variant="h3" align='center' margin={10}> Our stories </Typography>
                                    <Stories /> 
                                </Box> 
                            </Grid>

                            {/* Partners */}
                            <Grid item > 
                                <Box sx={{marginLeft:10, marginRight:10}}> 
                                    <Typography variant="h3" align='center' margin={10}> Our partnerships </Typography>
                                    <Partners /> 
                                </Box> 
                            </Grid>

                            {/* Contacts */}
                            <Grid item xs={12}> <Contacts /> </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
 
}

export default HomePage;