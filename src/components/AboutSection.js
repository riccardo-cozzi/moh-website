import React, { useState, useContext, useEffect } from 'react';
import {
    Box,
    Grid,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublicIcon from '@mui/icons-material/Public';
import RecyclingIcon from '@mui/icons-material/Recycling';

import { LanguageContext } from '../multilang/LanguageContext';
import { getText, TEXT_KEYS } from '../multilang/Texts';
import { gradientIconSx } from '../styles';


const AboutSection = () => {

    const [language,] = useContext(LanguageContext)

    useEffect(() => {
        console.log("Infobox detected change language to : ", language)
    }, [language])



    const info = [
        { icon: <PublicIcon sx={{ fontSize: "10rem", ...gradientIconSx }} />, title: getText(TEXT_KEYS.MOBILITY_INFO_TITLE, language.id), text: getText(TEXT_KEYS.MOBILITY_INFO_TEXT, language.id) },
        { icon: <RecyclingIcon sx={{ fontSize: "10rem", ...gradientIconSx }} />, title: getText(TEXT_KEYS.SUSTAINABILITY_INFO_TITLE, language.id), text: getText(TEXT_KEYS.SUSTAINABILITY_INFO_TEXT, language.id) },
        { icon: <HandshakeIcon sx={{ fontSize: "10rem", ...gradientIconSx }} />, title: getText(TEXT_KEYS.INCLUSION_INFO_TITLE, language.id), text: getText(TEXT_KEYS.INCLUSION_INFO_TEXT, language.id) },
    ]
    return <Stack direction="column" justifyContent="center" alignItems="center" spacing={5} sx={{ px: { xs: 2, sm: 6, md: 10 }, py: 10 }}>

        {/* About Us Title */}
        <Typography variant="h3" align='center' sx={{ fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>
            {getText(TEXT_KEYS.ABOUT_US_TITLE, language.id)}
        </Typography>

        {/* About Us Content */}
        <Typography variant="h4" align='center' color="gray" margin={10}>
            {getText(TEXT_KEYS.ABOUT_US_CONTENT, language.id)}
        </Typography>

        {/* Info Boxes */}
        <Grid container spacing={2} direction={"row"}>
            {
                info.map((item, index) => {
                    return <Grid item xs={12} md={12 / info.length} key={index}>
                        <InfoBox icon={item.icon} title={item.title} text={item.text} />
                    </Grid>
                })
            }
        </Grid>
    </Stack>
}



export const InfoBox = ({ icon, title, text }) => {

    const [hover, setHover] = useState(false)

    const glassBox = {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "30px",
        boxShadow: "0px 0px 20px rgba(128, 128, 128, 0.3)",
        backdropFilter: "blur(20px)",
        border: "4px solid rgba(255, 255, 255, 0.2)",
        // cursor: "pointer",  // per rendere le card cliccabili
    }

    // const hoveredGlassBox = { // per rendere le card cliccabili
    //     ...glassBox, 
    //     boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
    // }

    return <>
        <Paper
            style={glassBox}
        // style={hover ? hoveredGlassBox : glassBox} // per rendere le card cliccabili
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        >
            <Grid container spacing={2} direction={"row"}>
                <Grid item xs={12} sx={{ justifyContent: "center", justifyItems: "center", display: "flex" }}>
                    {icon}
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: "center", justifyItems: "center", display: "flex", fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>
                    <Typography variant="h5" align='center' margin={2} sx={{ fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>
                        {title}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: "center", justifyItems: "center", display: "flex" }}>
                    <Typography variant="h6" color={"gray"}>{text}</Typography>
                </Grid>
            </Grid>
        </Paper>
    </>
}
export default AboutSection
