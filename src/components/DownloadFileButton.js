import { IconButton } from '@mui/material';
import React from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Typography } from '@mui/material';

const DownloadFileButton = ({ url, compact = false, external, title, text }) => {

    return <>
        <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            download
            title={title}
        >
            <IconButton 
                sx={{
                    color: 'green',
                    transition: 'all 0.3s',
                    '&:hover': { color: 'darkgreen', backgroundColor: 'rgba(0,128,0,0.08)' },
                }}>
                    {
                        external
                            ? <LinkOutlinedIcon fontSize={compact ? 'medium' : 'large'} />
                            : <CloudDownloadIcon fontSize={compact ? 'medium' : 'large'} />
                }
                {text && (
                    <Typography variant="body2" sx={{ ml: 1 }}>
                        {text}
                    </Typography>
                )}
            </IconButton>
        </a>
    </>;
}

export default DownloadFileButton;