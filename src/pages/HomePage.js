import React, { useContext } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Stories from '../components/Stories'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import Contacts from '../components/Contacts'
import Banner from '../components/Banner';
import background from '../img/fullbody3.jpg';
import DeepHero from '../fonts/DeepHero.ttf'
import { getText } from '../multilang/Texts';
import { LanguageContext } from '../multilang/LanguageContext';
import AboutSection from '../components/AboutSection';



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
                            </Grid>

                            {/* Stories */}
                            <Grid item sx={{ width: '100%' }} >
                                <Box>
                                    <Typography variant="h3" align='center' margin={10} sx={{ fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}> {getText("our_stories_title", language.id)} </Typography>
                                    <Stories />
                                </Box>
                            </Grid>

                            {/* Partners */}
                            <Grid item sx={{ width: '100%', px: 10 }} >
                                <Box>
                                    <Typography variant="h3" align='center' margin={10} sx={{ fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}> {getText("our_partnerships_title", language.id)} </Typography>
                                    <Partners />
                                </Box>
                            </Grid>

                            <Footer />
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </Box >

    </>

}

export default HomePage;