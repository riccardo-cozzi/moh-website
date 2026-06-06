import { IconButton } from '@mui/material';
import React from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const DownloadFileButton = ({ file, compact = false }) => {

    return <>
        <a
            className="App-link"
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            download
        >
            <IconButton sx={{
                color: 'green',
                transition: 'all 0.3s',
                '&:hover': { color: 'darkgreen', backgroundColor: 'rgba(0,128,0,0.08)' },
            }}>
                <CloudDownloadIcon fontSize={compact ? 'medium' : 'large'} />
            </IconButton>
        </a></>
}

export default DownloadFileButton;