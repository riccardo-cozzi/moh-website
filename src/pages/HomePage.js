import React, { useContext, useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import Stories from '../components/Stories'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import Contacts from '../components/Contacts'
import Banner from '../components/Banner';
import background from '../img/fullbody3.jpg';
import DeepHero from '../fonts/DeepHero.ttf'
import { getText, TEXT_KEYS } from '../multilang/Texts';
import { LanguageContext } from '../multilang/LanguageContext';
import AboutSection from '../components/AboutSection';
import ImpactBento from '../components/ImpactBento';



const HomePage = () => {

    const [language,] = useContext(LanguageContext)

    return <>
        <Box sx={{
            // background: 'linear-gradient(#fff, #fff)',
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            // backgroundSize: "100%",
            backgroundSize: "100% 100%",
            // backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
        }}>
            <Box sx={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
            }}>

                <Grid container spacing={20}>
                    <Grid item xs={12} >
                        <Banner />
                    </Grid>


                    <Grid item xs={12} >
                        <Grid container spacing={10} direction="column" alignItems="center" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
                            {/* Info Boxes */}
                            <Grid item sx={{ width: '100%' }} >
                                <AboutSection />
                                <ImpactBento />
                            </Grid>

                            {/* Impact bento */}
                            <Grid item sx={{ width: '100%' }}>
                                
                            </Grid>

                            {/* Stories */}
                            <Grid item sx={{ width: '100%' }} >
                                <Box>
                                    
                                    <Stories />
                                </Box>
                            </Grid>

                            {/* Partners */}
                            <Grid item sx={{ width: '100%' }} >
                             <Partners />
                            </Grid>

                            <Grid item sx={{ width: '100%' }}>
                                <Footer />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </Box >

    </>

}

export default HomePage;