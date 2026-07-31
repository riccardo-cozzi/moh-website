import React from 'react';
import { Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { partnerInfo } from './PartnersInfo';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';

const Partners = () => {
    const partners = Object.values(partnerInfo);
    const scrollingPartners = [...partners, ...partners];

    return <Box marginBottom={1} sx={{ overflow: 'hidden', width: '100%' }}>
        <Box className="partners-marquee" aria-label="Partner di MOH">
            <Box className="partners-marquee-track">
                {scrollingPartners.map((image, index) => (
                    <PartnerBox src={image.src} href={image.url} alt={image.alt} key={`${image.alt}-${index}`} />
                ))}
            </Box>
        </Box>
    </Box>;
};

const PartnerBox = ({ src, href, alt }) => {
    const image = <img src={src} title={alt} alt={alt} className="partner-logo" />;
    return href ? <a className="partner-logo-link" href={href} target="_blank" rel="noopener noreferrer">{image}</a> : <Box component="span" className="partner-logo-link">{image}</Box>;
};

export const PartnerListDialog = ({ open, onClose }) => {
    const [language] = React.useContext(LanguageContext);
    return <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: { xs: 2, sm: 4 }, overflow: 'hidden' } }}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 3, sm: 4 } }}>
            <Typography variant="h5" sx={{ fontFamily: 'Neogen', color: '#147f89' }}>{getText("our_partnerships_title", language.id)}</Typography>
            <IconButton onClick={onClose} aria-label="Chiudi"><CloseIcon /></IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ px: { xs: 3, sm: 4 }, py: 3 }}>
            <Stack spacing={0.5}>
                {Object.values(partnerInfo).map(({ src, alt, url }) => <Box key={alt} component={url ? 'a' : 'div'} href={url || undefined} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined} sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 1.5, py: 0.5, borderRadius: 2, color: 'inherit', textDecoration: 'none', '&:hover': { backgroundColor: '#eef7f7' } }}>
                    <Box sx={{ width: 24, height: 24, p: 0.375, flexShrink: 0, borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e1e7e8' }}><img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} /></Box>
                    <Typography variant="body1" fontWeight={500}>{alt}</Typography>
                </Box>)}
            </Stack>
        </DialogContent>
    </Dialog>;
};

export default Partners;
