import { Box, Typography, Paper, Stack, IconButton, Tooltip } from '@mui/material';
import logo from '../img/logo_transp.png';
import React from 'react';
import background from '../img/fullbody3.jpg';
import DownloadFileButton from '../components/DownloadFileButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import config from '../config.json';
import { gradientTitle } from '../styles';

const getFileIcon = (filename) => {
    if (filename.endsWith('.zip'))
        return <FolderZipIcon sx={{ color: '#ffd54f', fontSize: 32, flexShrink: 0 }} />;
    return <PictureAsPdfIcon sx={{ color: '#ef5350', fontSize: 32, flexShrink: 0 }} />;
};

export const DownloadPage = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
        }}>
            <Box sx={{
                minHeight: '100vh',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, sm: 6, md: 10 },
                py: 6,
            }}>
                {/* Header */}
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: 90, height: 90, marginBottom: 16 }}
                />
                <Typography variant="h3" align="center" sx={{ ...gradientTitle, mb: 1 }}>
                    Downloads
                </Typography>

                {/* File cards */}
                <Stack spacing={2} sx={{ width: '100%', maxWidth: 640 }}>
                    {config.downloads.map(({ file, label }) => (
                        <Paper key={label} elevation={0} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            px: { xs: 2, sm: 3 },
                            py: 2,
                            borderRadius: 3,
                            backgroundColor: 'rgba(255,255,255,0.88)',
                            border: 'none',
                            transition: 'background-color 0.2s',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
                        }}>
                            {getFileIcon(file)}
                            <Typography sx={{
                                color: '#1a1a1a',
                                flex: 1,
                                fontWeight: 500,
                                fontSize: { xs: '0.85rem', sm: '1rem' },
                            }}>
                                {label}
                            </Typography>
                            {!file.endsWith('.zip') && (
                                <Tooltip title="Visualizza">
                                    <IconButton
                                        component="a"
                                        href={`${process.env.PUBLIC_URL}/files/${file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: 'green', '&:hover': { color: 'darkgreen', backgroundColor: 'rgba(0,128,0,0.08)' } }}
                                    >
                                        <VisibilityIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <DownloadFileButton
                                file={`${process.env.PUBLIC_URL}/files/${file}`}
                                label="Download"
                                compact
                            />
                        </Paper>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}