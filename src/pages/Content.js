import React, { useContext, useState } from 'react';
import { 
    Box,
    Grid, 
    Paper, 
    Typography
} from '@mui/material';
import Banner from '../components/Banner';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import green from '../img/green.jpg';
import logo_transp from '../img/logo_transp.png';
import Contacts from './Contacts';

import { styled } from '@mui/material/styles';
import { Stories } from '../components/StoriesPanel';


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
                <Parthners />
            </Box>
        </Grid>

        {/* Stories */}
        <Grid item xs={12} >
            <Box sx={{marginLeft:0, marginRight:0}}>
                <Stories />
            </Box>
        </Grid>

        <br/><br/><br/><br/><br/><br/>
        ...
        {/* <Grid item xs={12}>
            <Contacts />
        </Grid> */}
    </Grid>
    </>
}

const InfoBoxes = () => {

    const info = [
        {icon: <AcUnitIcon style={{fontSize: "10rem"}}/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"},
        {icon: <AccessibleForwardIcon style={{fontSize: "10rem"}}/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"},
        {icon: <AddLocationAltIcon style={{fontSize: "10rem"}}/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna"},
    ]

    return <Grid container spacing={2} direction={"row"}>

            {
                info.map((item, index) => {
                    return <Grid item xs={12 / info.length} key={index}>
                                <SalientInfo icon={item.icon} text={item.text}/>
                            </Grid>
                })
            }
        </Grid>
}

const SalientInfo = ({icon, text}) => {

    const [hover, setHover] = useState(false)

    return <>
    <Paper sx={{
        background: hover ? "#eff" : "#fff", 
        borderRadius: 6, 
        justifyContent: "center", 
        alignItems: "center", 
        display: "flex", 
        height: "50vh",
        marginLeft:3, marginRight:3,
        padding:3,
        boxShadow: hover ? 20 : 5,
        cursor: "pointer",
    }}
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

const Parthners = () => {

    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: "transparent",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: "0px solid black"
      }));

    const images = [
        {src: logo_transp, alt: "logo_transp", url: "https://www.google.com"},
        {src: logo_transp, alt: "logo_transp", url: "https://www.google.com"},
        {src: logo_transp, alt: "logo_transp", url: "https://www.google.com"},
        {src: logo_transp, alt: "logo_transp", url: "https://www.google.com"},
        {src: logo_transp, alt: "logo_transp", url: "https://www.google.com"},

    ]
    return <>
            
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    height: "50vh",
                    // backgroundImage: `url(${green})`,
                    flexGrow: 1,
                }}
                >
                    <Grid item xs={12} >
                        <Typography variant="h2" sx={{marginLeft:10, marginRight:10}}>
                            <center>Parthnerships<br/></center>
                        </Typography>
                    </Grid>
                {
                    images.map((image, index) => {
                        return  <Grid item xs={12 / images.length} key={index}>
                                    <Item>
                                        {/* the link opens a new page and has a description to open that link */}
                                        <a href={image.url} target="_blank">
                                            <img src={image.src} style={{
                                                height: "20vh"
                                            }}/>
                                        </a>
                                    </Item>
                                </Grid>
                    })
                }
            </Grid>
    </>
}


export default Content;
