import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HubIcon from '@mui/icons-material/Hub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText, TEXT_KEYS } from '../multilang/Texts';
import config from '../config.json';
import didiImage from '../img/didi.png';

const countryFlags = {
    Belgio: '🇧🇪',
    Bulgaria: '🇧🇬',
    Croazia: '🇭🇷',
    Danimarca: '🇩🇰',
    Estonia: '🇪🇪',
    Finlandia: '🇫🇮',
    Francia: '🇫🇷',
    Germania: '🇩🇪',
    Grecia: '🇬🇷',
    Lettonia: '🇱🇻',
    Lussemburgo: '🇱🇺',
    Polonia: '🇵🇱',
    Portogallo: '🇵🇹',
    'Repubblica Ceca': '🇨🇿',
    Romania: '🇷🇴',
    Slovacchia: '🇸🇰',
    Slovenia: '🇸🇮',
    Spagna: '🇪🇸',
    Svezia: '🇸🇪',
    Ungheria: '🇭🇺',
    Islanda: '🇮🇸',
    Turchia: '🇹🇷',
    Albania: '🇦🇱',
    Azerbaigian: '🇦🇿',
    Georgia: '🇬🇪',
    Giordania: '🇯🇴',
    Italia: '🇮🇹',
};

const ImpactBento = () => {
    const [language] = React.useContext(LanguageContext);

    return (
        <Box component="section" className="impact-bento" aria-labelledby="impact-bento-title">
            <Box className="impact-bento-grid">
                <Box className="impact-bento-card impact-bento-map-card">
                    <Box className="impact-bento-card-content">
                        {/* <Chip icon={<PublicIcon />} label={getText(TEXT_KEYS.IMPACT_COUNTRIES_LABEL, language.id)} className="impact-bento-chip" /> */}
                        <Typography className="impact-bento-number" >{config.impactData.countriesList.length}</Typography>
                        <Typography className="impact-bento-label">
                            {getText(TEXT_KEYS.IMPACT_COUNTRIES_DESCRIPTION, language.id)}
                        </Typography>
                        <Box className="impact-countries-box">
                            <Box className="impact-countries-list">
                                {config.impactData.countriesList.map((country) => (
                                    <Box component="span" className="impact-country" key={country} title={country} aria-label={country}>
                                        {countryFlags[country]}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box className="impact-map" aria-hidden="true">
                        <LocationOnIcon className="impact-map-pin" />
                    </Box>
                </Box>

                {/* 2nd */}
                <Box className="impact-bento-card impact-bento-projects-card">
                    <RocketLaunchIcon className="impact-bento-icon" sx={{ fontSize: '5rem !important' }} />
                    <Typography className="impact-bento-number" >
                        {config.impactData.youngPeopleSentAbroad}
                    </Typography>
                    <Typography className="impact-bento-label">{getText(TEXT_KEYS.IMPACT_PARTNER_PROJECTS_LABEL, language.id)}</Typography>
                    <Typography className="impact-bento-description">
                        {getText(TEXT_KEYS.IMPACT_PARTNER_PROJECTS_DESCRIPTION, language.id)}
                    </Typography>
                    {/* <Box className="impact-bento-orbit" aria-hidden="true"><span /><span /><span /></Box> */}
                </Box>

                <Box className="impact-bento-card impact-bento-network-card">
                    <Box className="impact-bento-network-heading">
                        <HubIcon className="impact-bento-icon" sx={{ fontSize: '5rem !important' }} />
                        <Box>
                            <Typography className="impact-bento-number">{config.impactData.ownProjects}</Typography>
                        </Box>
                    </Box>
                    <Typography className="impact-bento-description">
                        <Typography className="impact-bento-label">{getText(TEXT_KEYS.IMPACT_OWN_PROJECTS_LABEL, language.id)}</Typography>
                    </Typography>
                    <Box className="impact-lead-projects-visual" aria-hidden="true">
                        <Box className="impact-network-ticker">
                            <span>MOH!</span>
                        </Box>
                        <Box
                            component="img"
                            src={didiImage}
                            alt=""
                            className="impact-lead-projects-image"
                            sx={{
                                width: { xs: 100, sm: 200 },
                                height: { xs: 100, sm: 200 },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ImpactBento;
