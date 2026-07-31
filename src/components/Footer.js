
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IconButton, Stack } from '@mui/material';
import Contacts from './Contacts';
import config from '../config.json';
import { Link as RouterLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer style={{
            paddingTop: '200px',
            paddingBottom: '50px',
            textAlign: 'center',
        }}>
            <Contacts />
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
                    component={RouterLink}
                    to="/download"
                    aria-label="Download"
                    sx={{
                    color: 'black',
                    background: 'white',
                    ':hover': { background: '#ddd' },
                    }}
                >
                    <CloudDownloadIcon />
                </IconButton>
            </Stack>

        </footer>
    );
};
export default Footer;