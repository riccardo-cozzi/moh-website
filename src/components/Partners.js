import React, { useContext, useState } from 'react';

import { Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText, TEXT_KEYS } from '../multilang/Texts';
import config from '../config.json';
import erasmus from '../img/logoE+.png';
import { Link } from '@mui/material';

const partners = config.partners.map((partner) => ({
    ...partner,
    src: `${process.env.PUBLIC_URL}/img/partner/${partner.image}`,
    alt: partner.name,
}));

// 1. Componente estratto per il rendering delle immagini scorrevoli
const MarqueeTrack = ({ items, reverse = false }) => {
    // Duplichiamo l'array internamente per l'effetto di loop infinito
    const doubleItems = [...items, ...items];
    const trackClassName = `partners-marquee-track${reverse ? ' partners-marquee-track-reverse' : ''}`;

    return (
        <Box className="partners-marquee">
            <Box className={trackClassName}>
                {doubleItems.map((image, index) => (
                    <PartnerBox 
                        key={`${image.alt}-${reverse ? 'rev' : 'fwd'}-${index}`}
                        src={image.src} 
                        href={image.url} 
                        alt={image.alt} 
                    />
                ))}
            </Box>
        </Box>
    );
};

const Partners = () => {
    const [language] = useContext(LanguageContext);
    const [partnersDialogOpen, setPartnersDialogOpen] = useState(false);

    return (
        <>
            <Box marginBottom={1} sx={{ overflow: 'hidden', width: '100%' }}>
                <Typography 
                    variant="h3" 
                    align='center' 
                    sx={{ 
                        fontSize: { xs: '1.8rem', sm: '3rem' }, 
                        fontFamily: 'Neogen', 
                        backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent', 
                        backgroundClip: 'text', 
                        display: 'block' 
                    }}
                >
                    {getText(TEXT_KEYS.OUR_PARTNERSHIPS_TITLE, language.id)}
                </Typography>

                

                {/* Uso del nuovo componente parametrizzato */}
                <MarqueeTrack items={partners} />
                <MarqueeTrack items={partners} reverse />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 9, mb: 3 }}>
                    <img src={erasmus} alt="Logo MOH" style={{ height: 80, objectFit: 'contain' }} />
                </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 1, mb: 8 }}>
                <Link 
                    component="button" 
                    type="button" 
                    onClick={() => setPartnersDialogOpen(true)} 
                    underline="hover" 
                    sx={{ color: '#147f89', fontWeight: 600, cursor: 'pointer' }}
                >
                    {getText(TEXT_KEYS.SHOW_ALL_PARTNERS, language.id)}
                </Link>
            </Box>

            <PartnerListDialog open={partnersDialogOpen} onClose={() => setPartnersDialogOpen(false)} />
        </>
    );
};

const PartnerBox = ({ src, href, alt }) => {
    const image = <img src={src} title={alt} alt={alt} className="partner-logo" />;
    return href ? (
        <a className="partner-logo-link" href={href} target="_blank" rel="noopener noreferrer">{image}</a>
    ) : (
        <Box component="span" className="partner-logo-link">{image}</Box>
    );
};

const capitalizeName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const PartnerListDialog = ({ open, onClose }) => {
    const [language] = React.useContext(LanguageContext);
    const dialogPartners = [...partners].sort((first, second) => (
        first.alt.localeCompare(second.alt, undefined, { sensitivity: 'base' })
    ));

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: { xs: 2, sm: 4 }, overflow: 'hidden' } }}>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 3, sm: 4 } }}>
                <Typography variant="h5" sx={{ fontFamily: 'Neogen', color: '#147f89' }}>
                    {getText(TEXT_KEYS.OUR_PARTNERSHIPS_TITLE, language.id)}
                </Typography>
                <IconButton onClick={onClose} aria-label="Chiudi"><CloseIcon /></IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent sx={{ px: { xs: 3, sm: 4 }, py: 3 }}>
                <Stack spacing={0.5}>
                    {dialogPartners.map(({ src, alt, url }) => (
                        <Box key={alt} component={url ? 'a' : 'div'} href={url || undefined} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined} sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 1.5, py: 0.5, borderRadius: 2, color: 'inherit', textDecoration: 'none', '&:hover': { backgroundColor: '#eef7f7' } }}>
                            <Box sx={{ width: 24, height: 24, p: 0.375, flexShrink: 0, borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e1e7e8' }}>
                                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                            </Box>
                            <Typography variant="body1" fontWeight={500}>{capitalizeName(alt)}</Typography>
                        </Box>
                    ))}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default Partners;