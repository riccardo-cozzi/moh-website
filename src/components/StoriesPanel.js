import {forwardRef, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Slide } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import storyCardTemplateImg from '../img/storyCardTemplateImg.jpg';


export const Stories = () => {

  const [selectedStory, setSelectedStory] = useState(null)


  const stories = [
    // {title: Texts.get(Texts.FIRST_STORY_TITLE), location: Texts.get(Texts.FIRST_STORY_LOCATION), subtitle: Texts.get(Texts.FIRST_STORY_SUBTITLE), text: Texts.get(Texts.FIRST_STORY_TEXT)},
    {title: "Project 1", location: "Giovinazzo, Italy", subtitle: "This is the first project", text: "This is the story story of the first project in which we are going to talk about the first project and how it is going to be the first project"},
    {title: "Project 2", location: "Varna, Bulgaria", subtitle: "This is the second project", text: "This is the story story of the second project in which we are going to talk about the second project and how it is going to be the second project"},
    {title: "Project 3", location: "Vælose, Denmark", subtitle: "This is the third project", text: "This is the story story of the third project in which we are going to talk about the third project and how it is going to be the third project"},
    {title: "Project 4", location: "Tirana, Albania", subtitle: "This is the fourth project", text: "This is the story story of the fourth project in which we are going to talk about the fourth project and how it is going to be the fourth project"},
    
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
                  return <Grid item xs={6} key={index}>
                              <StoryCard 
                                title={story.title} 
                                text={story.text} 
                                location={story.location}
                                onOpen={() => handleChangeStory(story)}
                                />
                          </Grid>
              })
          }
      </Grid>

      <StoryDialog story={selectedStory} onClose={closeDialog}/>
  </>
}

const StoryCard = ({title, text, location, onOpen}) => {

  const [hover, setHover] = useState(false)

  return <>
  <Paper sx={{
      borderRadius: 5, 
      justifyContent: "center", 
      alignItems: "center", 
      display: "flex", 
      height: "50vh",
      marginLeft:3, marginRight:3,
      padding:3,
      boxShadow: hover ? 20 : 5,
      cursor: "pointer",

      backgroundImage: `url(${storyCardTemplateImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "multiply",
      backgroundPosition: "center",
      color: "#000",

  }}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  onClick={() => onOpen()}
  >
      
      <Grid container spacing={0} direction={"row"} alignContent={'space-around'}
            sx={{backgroundColor:"#fff", borderRadius:5, padding:3, opacity:0.7}} >
              
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            
            <Typography variant="body">
              {text}
            </Typography>
          </Grid>
          
          <Grid item>
            <br/><br/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <PlaceIcon fontSize="small"/>
                <Typography variant="caption">
                  {location} 
                </Typography>
            </div>  
          </Grid>
          
      </Grid>
  </Paper>
</>
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
              <img src={storyCardTemplateImg} style={{maxHeight:350, width: "100%", borderRadius:5}}/> 
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