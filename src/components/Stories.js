import { forwardRef, useContext, useEffect, useState } from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Slide } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import CloseIcon from '@mui/icons-material/Close';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText, TEXT_KEYS } from '../multilang/Texts';
import DownloadFileButton from './DownloadFileButton';
import config from '../config.json';
import { gradientTitle } from '../styles';


const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null)
  const [language,] = useContext(LanguageContext)

  const closeDialog = () => {
    setSelectedStory(null)
  }

  const handleChangeStory = (story) => {
    setSelectedStory(story)
  }
  return <>
    <Typography variant="h3" align='center' marginBottom={7} marginTop={0} sx={{ fontSize: { xs: '1.8rem', sm: '3rem' }, fontFamily: 'Neogen', backgroundImage: 'linear-gradient(135deg, #2e7d32 0%, #0094ae 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}> {getText(TEXT_KEYS.OUR_STORIES_TITLE, language.id)} </Typography>

    <Grid container spacing={5} direction={"row"} sx={{ paddingLeft: 0, paddingRight: 0 }}>
      {
        Object.entries(config.stories).map(([storyId, story]) =>
          <Grid item xs={12} md={6} key={storyId}>
            <StoryCard
              title={story.title[language.id]}
              subtitle={story.subtitle[language.id]}
              location={story.location[language.id]}
              onOpen={() => handleChangeStory({ ...story, id: storyId.replace('story_', '') })}
              imgurl={`${process.env.PUBLIC_URL}/img/storiesImages/${story.image}`}
            />
          </Grid>
        )
      }
    </Grid>

    <StoryDialog story={selectedStory} onClose={closeDialog} />
  </>
}


const LocationBox = ({ text }) => {
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    bottom: 0
  }}>
    <PlaceIcon fontSize="small" style={{ color: "gray" }} />
    <Typography variant="caption" color={"gray"}>
      {text}
    </Typography>
  </div>
}


const StoryCard = ({ title, subtitle, location, onOpen, imgurl }) => {

  const isMobile = window.innerWidth < 950
  const [hover, setHover] = useState(false)

  const imageBox = {
    borderRadius: "200px 0px 50px 200px",
    backgroundImage: `url(${imgurl})`,
    // paddingRight: 100,
    // width: "50%"
  }

  const hoverImageBox = {
    ...imageBox,
  }

  const storyCardStyle = {
    borderRadius: "50px",
    paddingTop: 50,
    paddingBottom: 0,
    paddingLeft: 50,
    paddingRight: 24,
    minHeight: 200,
    height: "auto",
    boxSizing: "border-box",
    cursor: "pointer",
    position: "relative",
  }

  const hoveredStoryCardStyle = {
    ...storyCardStyle,
  }


  return <>
    <Paper
      className={`story-card${hover ? ' story-card-hover' : ''}`}
      style={hover ? hoveredStoryCardStyle : storyCardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen()}
      elevation={hover ? 20 : 10}>

      <Stack spacing={1} sx={{ minHeight: 200, width: '100%' }}>

        {/* Content */}
        <Stack justifyContent={"flex-start"} spacing={{ xs: 2, sm: 5 }}>

          <Box>
            <Typography
              gutterBottom
              variant={isMobile ? "h6" : "h4"}
              sx={{ ...gradientTitle, overflowWrap: 'anywhere' }}
            >
              {title}
            </Typography>
            <LocationBox text={location} />
          </Box>

          <Typography variant="h6" color={"gray"} sx={{ overflowWrap: 'anywhere' }}>
            {subtitle}
          </Typography>

        </Stack>

        {/* Image */}
        <Box style={hover ? hoverImageBox : imageBox} />
      </Stack>

    </Paper>
    </>

}



const StoryDialog = ({ story, onClose, ...props }) => {
  const open = (story !== null)
  const [language,] = useContext(LanguageContext)
  const [storyHtml, setStoryHtml] = useState('')
  const imageUrl = story ? `${process.env.PUBLIC_URL}/img/storiesImages/${story.image}`: null
  
  useEffect(() => {
    if (!story) return
    fetch(`${process.env.PUBLIC_URL}/stories/story_${story.id}/${language.id}.html`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.text()
      })
      .then(html => setStoryHtml(html))
      .catch(() => setStoryHtml(''))
  }, [story, language])

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    onClose()
  };

  return (
    open ?
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        PaperProps={{
          sx: {
            height: { xs: 'calc(100% - 32px)', sm: 750 },
            width: { xs: 'calc(100% - 32px)', sm: 700, md: 900 },
            maxWidth: 'calc(100% - 32px)',
            overflow: 'hidden',
            borderRadius: 5,
          }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Typography component="span" sx={gradientTitle}>
            {story.title[language.id]}
          </Typography>
          <IconButton onClick={handleClose} aria-label="Chiudi" size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={0}>

            <Grid item xs={12}>
              <a href={imageUrl} target="_blank" rel="noopener noreferrer" aria-label={`Apri immagine: ${story.title[language.id]}`}>
                <Box
                  component="img"
                  src={imageUrl}
                  alt={story.title[language.id]}
                  sx={{
                    display: 'block',
                    width: { xs: "100%", sm: "80%" },
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    margin: "0 auto",
                    borderRadius: 5,
                    cursor: 'pointer',
                    // WebkitMaskImage: 'linear-gradient(to bottom, black 48%, transparent 100%)',
                    // maskImage: 'linear-gradient(to bottom, black 48%, transparent 100%)',
                  }}
                />
              </a>
            </Grid>

            <Grid item>
              <br />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
                <PlaceIcon color="disabled" fontSize="small" />
                <Typography variant="caption">
                  {story.location[language.id]}
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <br />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              fontStyle="italic"
              sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}
            >
              {story.subtitle[language.id]}
            </Typography>
          </Grid>

          <DialogContentText
            id="alert-dialog-slide-description"
            component="div"
            sx={{ fontSize: { xs: '0.85rem', sm: '1rem' }, lineHeight: 1.6 }}
          >
            <div dangerouslySetInnerHTML={{ __html: storyHtml }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {story.attachment && (
            <DownloadFileButton
              url={story.attachment}
              compact
              external
              title={getText(TEXT_KEYS.OPEN_ATTACHMENT, language.id)}
              text={getText(TEXT_KEYS.OPEN_ATTACHMENT, language.id)}
            />
          )}
          <Button onClick={handleClose}>{getText(TEXT_KEYS.STORY_CLOSE_BUTTON, language.id)}</Button>
        </DialogActions>
      </Dialog>
      :
      <></>
  )
}

export default Stories