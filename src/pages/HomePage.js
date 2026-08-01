import React, { useContext, useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import Stories from '../components/Stories'
import Footer from '../components/Footer'
import Partners, { PartnerListDialog } from '../components/Partners'
import Contacts from '../components/Contacts'
import Banner from '../components/Banner';
import background from '../img/fullbody3.jpg';
import DeepHero from '../fonts/DeepHero.ttf'
import { getText, TEXT_KEYS } from '../multilang/Texts';
import { LanguageContext } from '../multilang/LanguageContext';
import AboutSection from '../components/AboutSection';



const HomePage = () => {

    const [language,] = useContext(LanguageContext)
    const [partnersDialogOpen, setPartnersDialogOpen] = useState(false)

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
                                    <Typography variant="h3" align='center' margin={10} sx={{ fontSize: { xs: '1.8rem', sm: '3rem' }, fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}> {getText(TEXT_KEYS.OUR_STORIES_TITLE, language.id)} </Typography>
                                    <Stories />
                                </Box>
                            </Grid>

                            {/* Partners */}
                            <Grid item sx={{ width: '100%' }} >
                                <Box>
                                    <Typography variant="h3" align='center' margin={10} sx={{ fontSize: { xs: '1.8rem', sm: '3rem' }, fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>{getText(TEXT_KEYS.OUR_PARTNERSHIPS_TITLE, language.id)}</Typography>
                                    <Partners />
                                    <Box sx={{ textAlign: 'center', mt: 1, mb: 8 }}>
                                        <Link component="button" type="button" onClick={() => setPartnersDialogOpen(true)} underline="hover" sx={{ color: '#147f89', fontWeight: 600, cursor: 'pointer' }}>{getText(TEXT_KEYS.SHOW_ALL_PARTNERS, language.id)}</Link>
                                    </Box>
                                    <PartnerListDialog open={partnersDialogOpen} onClose={() => setPartnersDialogOpen(false)} />
                                </Box>
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