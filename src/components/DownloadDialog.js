import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadFileButton from '../components/DownloadFileButton';
import config from '../config.json';
import { gradientTitle } from '../styles';
import React from 'react';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText, TEXT_KEYS } from '../multilang/Texts';

const getFileIcon = (filename) => filename?.endsWith('.zip')
    ? <FolderZipIcon sx={{ color: '#ffd54f', fontSize: 32 }} />
    : <PictureAsPdfIcon sx={{ color: '#ef5350', fontSize: 32 }} />;

export const DownloadDialog = ({ open, onClose }) => {
    const [language] = React.useContext(LanguageContext);
    const handleClose = () => onClose?.();

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: { xs: 2, sm: 4 },
                    overflow: 'hidden',
                    background: '#f8fbfb',
                },
            }}
        >
            <DialogTitle sx={{ px: { xs: 3, sm: 4 }, pt: 3, pb: 1 }}>
                <Box display="flex" alignItems="flex-start" justifyContent="space-between" gap={2}>
                    <Box>
                        <Typography variant="h4" sx={{ ...gradientTitle, fontSize: { xs: '1.7rem', sm: '2.1rem' } }}>
                            Downloads
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                            Consulta o scarica i documenti di MOH.
                        </Typography>
                    </Box>
                    <IconButton onClick={handleClose} aria-label="Chiudi" size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <Stack spacing={1.5} sx={{ pt: 1 }}>
                    {config.downloads.map(({ file, label, externalLink }) => (
                        <Paper key={label} elevation={0} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            px: { xs: 1.5, sm: 2 },
                            py: 1.25,
                            borderRadius: 2.5,
                            backgroundColor: '#fff',
                            border: '1px solid rgba(0, 148, 174, 0.12)',
                        }}>
                            <Box sx={{ display: 'flex', p: 1, borderRadius: 1.5, background: file?.endsWith('.zip') ? '#fff8df' : '#fff0f0' }}>
                                {getFileIcon(file)}
                            </Box>
                            <Typography sx={{ color: '#1a1a1a', flex: 1, fontWeight: 500, fontSize: { xs: '0.85rem', sm: '1rem' } }}>
                                {label}
                            </Typography>
                            {file && !file.endsWith('.zip') && (
                                <Tooltip title="Visualizza">
                                    <IconButton
                                        component="a"
                                        href={`${process.env.PUBLIC_URL}/files/${file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: 'green' }}
                                    >
                                        <VisibilityIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <DownloadFileButton
                                url={file ? `${process.env.PUBLIC_URL}/files/${file}` : externalLink}
                                compact
                                external={!file}
                                title={getText(file ? TEXT_KEYS.DOWNLOAD_FILE : TEXT_KEYS.OPEN_LINK, language.id)}
                                text={getText(file ? TEXT_KEYS.DOWNLOAD_FILE : TEXT_KEYS.OPEN_LINK, language.id)}
                            />
                        </Paper>
                    ))}
                </Stack>
            </DialogContent>
            <DialogActions sx={{ px: { xs: 3, sm: 4 }, pb: 2.5 }}>
                <Button onClick={handleClose} color="inherit">Chiudi</Button>
            </DialogActions>
        </Dialog>
    );
};
