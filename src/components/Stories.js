import { forwardRef, useContext, useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Slide } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';
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
    <Grid container spacing={5} direction={"row"} sx={{ paddingLeft: 10, paddingRight: 10 }}>
      {
        Object.entries(config.stories).map(([storyId, story]) =>
          <Grid item xs={12} md={6} key={storyId}>
            <StoryCard
              title={story.title[language.id]}
              subtitle={story.subtitle[language.id]}
              location={story.location[language.id]}
              onOpen={() => handleChangeStory({ ...story, id: storyId.replace('story_', '') })}
              imgurl={story.imgurl}
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
    height: 200,
    cursor: "pointer",
  }

  const hoveredStoryCardStyle = {
    ...storyCardStyle,
    background: "rgba(232, 237, 247)"
  }


  return <Paper style={hover ? hoveredStoryCardStyle : storyCardStyle}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={() => onOpen()}
    elevation={hover ? 20 : 10}>

    <Stack pacing={1} height={"100%"}>

      {/* Content */}
      <Stack justifyContent={"flex-start"} spacing={5}>

        <Box>
          <Typography gutterBottom variant={isMobile ? "h6" : "h4"} sx={gradientTitle}> {title} </Typography>
          <LocationBox text={location} />
        </Box>

        <Typography variant="h6" color={"gray"}>
          {subtitle}
        </Typography>

      </Stack>

      {/* Image */}
      <Box style={hover ? hoverImageBox : imageBox} />
    </Stack>


  </Paper>

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
        PaperProps={{ sx: { height: 750, width: 600, overflow: 'hidden', borderRadius: 5 } }}
      >
        <DialogTitle sx={gradientTitle}>{story.title[language.id]}</DialogTitle>

        <DialogContent>
          <Grid container spacing={0}>

            <Grid item xs={12}>
              <a href={imageUrl} target="_blank" rel="noopener noreferrer" aria-label={`Apri immagine: ${story.title[language.id]}`}>
                <img
                  src={imageUrl}
                  alt={story.title[language.id]}
                  style={{ maxHeight: 350, width: "100%", borderRadius: 5, cursor: 'pointer' }}
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
            <Typography variant="subtitle1" color="text.secondary" fontStyle="italic">
              {story.subtitle[language.id]}
            </Typography>
          </Grid>

          <DialogContentText id="alert-dialog-slide-description" component="div">
            <div dangerouslySetInnerHTML={{ __html: storyHtml }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{getText("story_close_button", language.id)}</Button>
        </DialogActions>
      </Dialog>
      :
      <></>
  )
}

export default Stories