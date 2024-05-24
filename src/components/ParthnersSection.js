import React from 'react';
import { 
    Box,
    Grid, 
    Typography
} from '@mui/material';
import logo_transp from '../img/logo_transp.png';

import { styled } from '@mui/material/styles';



const ParthnersSection = () => {

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

export default ParthnersSection;