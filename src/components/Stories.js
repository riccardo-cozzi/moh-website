import {forwardRef, useContext, useEffect, useState} from 'react';
import {Button, Stack} from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Slide } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import cleanup from '../img/storiesImages/cleanup.jpg';
import erasmus from '../img/storiesImages/erasmus.jpg';
import people from '../img/storiesImages/people.png';
import workers from '../img/storiesImages/workers.jpg';
import { LanguageContext } from '../multilang/LanguageContext';
import { getText } from '../multilang/Texts';
import { BorderLeftRounded } from '@mui/icons-material';


const Stories = () => {

  const [selectedStory, setSelectedStory] = useState(null)
  const [language, ] = useContext(LanguageContext)

  const stories = [
    {title: "Project 1", imgurl: cleanup, location: "Giovinazzo, Italy", subtitle: "This is the first project", text: getText("story_1", language.id)},
    {title: "Project 2", imgurl: erasmus, location: "Varna, Bulgaria", subtitle: "This is the second project", text: getText("story_2", language.id)},
    {title: "Project 3", imgurl: people, location: "Vælose, Denmark", subtitle: "This is the third project", text: getText("story_3", language.id)},
    {title: "Project 4", imgurl: workers, location: "Tirana, Albania", subtitle: "This is the fourth project", text: getText("story_4", language.id)},
  ]

  useEffect(() => {
    console.log(selectedStory)
  }, [selectedStory])

  const closeDialog = () => {
    setSelectedStory(null)
  }

  const handleChangeStory = (story) => {
    setSelectedStory(story)
  }

  return <>
      
      <Grid container spacing={5} direction={"row"} sx={{paddingLeft: 10, paddingRight: 10}}>
          {
              stories.map((story, index) => {
                  return <Grid item xs={12} md={6} key={index}>
                              <StoryCard 
                                title={story.title} 
                                text={story.text} 
                                location={story.location}
                                onOpen={() => handleChangeStory(story)}
                                imgurl={story.imgurl}
                                />
                          </Grid>
              })
          }
      </Grid>

      <StoryDialog story={selectedStory} onClose={closeDialog}/>
  </>
}



const StoryCard = ({title, text, location, onOpen, imgurl}) => {

  const [hover, setHover] = useState(false)

  const imageBox = {
    borderRadius: "200px 0px 50px 200px",
    backgroundImage: `url(${imgurl})`,
    paddingRight: 200,
    width: "50%"
  }

  const hoverImageBox = {
    ...imageBox, 
  }
  
  const storyCardStyle = {
    borderRadius:"50px",
     paddingTop:50,
     paddingBottom:0,
     paddingLeft:50,
     height:300,
     cursor:"pointer",
  }

  const hoveredStoryCardStyle = {
    ...storyCardStyle, 
    background: "rgba(232, 237, 247)"
  }


return <Paper style={hover ? hoveredStoryCardStyle : storyCardStyle} 
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => onOpen()}
              elevation={hover? 20 : 10}>

    <Stack direction="row" spacing={10} height={"100%"}>

      {/* Content */}
      <Stack justifyContent={"space-between"} paddingBottom={5}>
        
        <Box>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>

          <Typography variant="h7" color={"gray"}>
            {text}
          </Typography>
        </Box>

        
        <br/><br/>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            bottom:0
        }}>
            <PlaceIcon fontSize="small" style={{color: "gray"}}/>
            <Typography variant="caption" color={"gray"}>
              {location} 
            </Typography>
        </div>  
      </Stack>

      {/* Image */}
      <Box style={hover ? hoverImageBox : imageBox}/>
    </Stack>
    
  
</Paper>

}



const StoryDialog = ({story, onClose, ...props}) => {

  const open = (story !== null)

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
        PaperProps={{sx: {height: 750, width: 600, overflow: 'hidden', borderRadius: 5}}}
      >
        <DialogTitle>{story.title}</DialogTitle>
        
        <DialogContent>
          <Grid container spacing={0}>
            
            <Grid item xs={12}>
              <img src={story.imgurl} style={{maxHeight:350, width: "100%", borderRadius:5}}/> 
            </Grid>
            
            <Grid item>
              <br/><br/>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
              }}>
                  <PlaceIcon color="disabled" fontSize="small"/>
                  <Typography variant="caption">
                    {story.location} 
                  </Typography>
              </div>  
            </Grid>
          </Grid>


          <DialogContentText id="alert-dialog-slide-description">
            <br/><br/>
            {story.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    : 
    <></>
  )
}

export default Stories