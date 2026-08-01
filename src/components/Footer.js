
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/material';
import Contacts from './Contacts';
import config from '../config.json';
import { useContext, useState } from 'react';
import {DownloadDialog} from './DownloadDialog';
import previousLogo from '../img/logo_transp.png';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText, TEXT_KEYS } from '../multilang/Texts';

const Footer = () => {
    const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
    const [language] = useContext(LanguageContext);
    const privacyPolicyUrl = `${process.env.PUBLIC_URL}/${config.privacyPolicy[language.id]}`;
    return (
        <footer style={{
            paddingTop: '0',
            paddingBottom: '100px',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Contacts />
            </Box>
            <Box
                component="img"
                src={previousLogo}
                alt="MOH"
                sx={{ width: 90, height: 90, objectFit: 'contain', my: 2 }}
            />
            <Stack direction="row" justifyContent="center" alignItems="left" spacing={2}>
                <a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon fontSize="large" sx={{ color: '#E1306C' }} />
                </a>
                <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FacebookIcon fontSize="large" sx={{ color: '#1877F2' }} />
                </a>
                <a href={config.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon fontSize="large" sx={{ color: '#FF0000' }} />
                </a>
                <a href={config.socialLinks.x} target="_blank" rel="noopener noreferrer">
                    <XIcon fontSize="large" sx={{ color: '#000' }} />
                </a>
                <IconButton
                    onClick={() => setDownloadDialogOpen(true)}
                    aria-label="Download"
                    sx={{
                    color: 'green',
                    background: 'white',
                    ':hover': { background: '#ddd' },
                    }}
                >
                    <CloudDownloadIcon/>
                </IconButton>
            </Stack>

            <Box component="a" href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer" sx={{ mt: 2, color: '#147f89', fontSize: '0.85rem' }}>
                {getText(TEXT_KEYS.PRIVACY_POLICY_LINK, language.id)}
            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100vw',
                    zIndex: 1100,
                    px: 2,
                    py: 1.5,
                    color: 'white',
                    background: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: { xs: 1, sm: 3 },
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    textAlign: 'center',
                }}
            >
                <span>Codice Fiscale: 93498900724</span>
                <span>PEC: moh.organisation@pec.it</span>
                <span>OID: 10033226</span>
            </Box>

            <DownloadDialog
                open={downloadDialogOpen}
                onClose={() => setDownloadDialogOpen(false)}
            />

        </footer>
    );
};
export default Footer;