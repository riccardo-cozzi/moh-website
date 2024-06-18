import React, { useState } from 'react';
import { 
    Box,
        Grid, 
    Typography,
    Stack
} from '@mui/material';

import { styled } from '@mui/material/styles';
import {partnerImages} from './PartnersImages';


const Partners = () => {


    return <Box marginBottom={30}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: "50vh",
                    flexGrow: 1,
                }}
                >
                {
                    Object.values(partnerImages).map((image, index) => {
                        return  <Grid item lg={1} xs={3} key={index} >
                                    <PartnerBox src={image.src} href={image.url} alt={image.alt}/>
                                </Grid>
                    })
                }
            </Grid>
            </Box>
}

const PartnerBox = ({src, href, alt}) => {

    const [hover, setHover] = useState(false)

    const handleOpenPage = () => {
        window.open(href)
    }

    const imageBox = {
        cursor:"pointer",
        width:"100px",
        border:"1px solid #bbb",
        backgroundColor: "white",
        borderRadius:"400px",
        zIndex: Math.random(100),
        padding: 20
    }

    const hoveredImageBox = {
        ...imageBox, 
        boxShadow:"4px 3px 5px 3px #ddd",
        border:"1px solid #eee",


    }

    return  <Box onClick={handleOpenPage} align={"center"} alignContent={"center"}>
                <img src={src} alt={alt} style={hover ? hoveredImageBox : imageBox} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
            </Box>
}

export default Partners;
