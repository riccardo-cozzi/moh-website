import React, { useState, useContext, useEffect } from 'react';
import { 
    Box,
    Grid, 
    Paper, 
    Typography
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublicIcon from '@mui/icons-material/Public';
import RecyclingIcon from '@mui/icons-material/Recycling';

import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';


const InfoBoxesPanel = () => {
    
    const [language, ] = useContext(LanguageContext)

    useEffect(() => {
        console.log("Infobox detected change language to : ", language)
    }, [language])



    const info = [
        {icon: <HandshakeIcon style={{fontSize: "10rem"}}/>, text: getText("infobox_1", language.id)},
        {icon: <PublicIcon style={{fontSize: "10rem"}}/>, text: getText("infobox_2", language.id)},
        {icon: <RecyclingIcon style={{fontSize: "10rem"}}/>,text: getText("infobox_3", language.id)},
    ]

    return <Grid container spacing={2} direction={"row"}>

            {
                info.map((item, index) => {
                    return <Grid item xs={12} md={12 / info.length} key={index}>
                                <InfoBox icon={item.icon} text={item.text}/>
                            </Grid>
                })
            }
        </Grid>
}



const InfoBox = ({icon, text}) => {

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
            <Grid item xs={12} sx={{justifyContent:"center", justifyItems:"center", display:"flex"}}>
                {icon}
            </Grid>
            <Grid item xs={12} sx={{justifyContent:"center", justifyItems:"center", display:"flex"}}>
                <p>{text}</p>
            </Grid>
        </Grid>
    </Paper>
</>
}
export default InfoBoxesPanel
