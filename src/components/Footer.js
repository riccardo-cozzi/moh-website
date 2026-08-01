
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/material';
import Contacts from './Contacts';
import config from '../config.json';
import { useState } from 'react';
import {DownloadDialog} from './DownloadDialog';

const Footer = () => {
    const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
    return (
        <footer style={{
            paddingTop: '0',
            paddingBottom: '50px',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Contacts />
            </Box>
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

            <DownloadDialog
                open={downloadDialogOpen}
                onClose={() => setDownloadDialogOpen(false)}
            />

        </footer>
    );
};
export default Footer;