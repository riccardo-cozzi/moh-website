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
import logo_transp from '../img/logo_transp.png';

import { styled } from '@mui/material/styles';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';


const InfoBoxesPanel = () => {
    
    const [language, ] = useContext(LanguageContext)

    useEffect(() => {
        console.log("Infobox detected change language to : ", language)
    }, [language])



    const info = [
        {icon: <AcUnitIcon style={{fontSize: "10rem"}}/>, text: getText("infobox_1", language.id)},
        {icon: <AccessibleForwardIcon style={{fontSize: "10rem"}}/>, text: getText("infobox_2", language.id)},
        {icon: <AddLocationAltIcon style={{fontSize: "10rem"}}/>,text: getText("infobox_3", language.id)},
    ]

    return <Grid container spacing={2} direction={"row"}>

            {
                info.map((item, index) => {
                    return <Grid item xs={12 / info.length} key={index}>
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
        background: "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))",
        borderRadius: "30px",
        boxShadow: "0px 0px 20px rgba(128, 128, 128, 0.3)",
        backdropFilter: "blur(20px)",
        border: "4px solid rgba(255, 255, 255, 0.2)",
        cursor: "pointer", 
    }

    const hoveredGlassBox = {
        ...glassBox, 
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
    }
    
    return <>
    <Paper style={hover ? hoveredGlassBox : glassBox}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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
