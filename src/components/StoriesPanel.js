import {forwardRef, useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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


export const Stories = () => {

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
                  return <Grid item xs={6} key={index}>
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

  const glassBox = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",
    borderRadius: "20px",
    boxShadow: "0px 0px 20px rgba(128, 128, 128, 0.3)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    cursor: "pointer", 
    marginRight:80, 
    marginLeft:80, 
    paddingTop:50,
    paddingBottom:100
}

  const backgroundImage = {
    borderRadius: "30px",
    backgroundImage: `url(${imgurl})`,
  }

  const blurredBox = {
    paddingTop:100,
    paddingBottom:100,
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
    background: "rgba(0, 0, 0, 0.2)",
  }


  
  return <>
    <Box style={backgroundImage}>
      <Box style={blurredBox}>

      <Box 
        style={glassBox}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => onOpen()}
      >
        
        <Grid container spacing={0} direction={"row"} alignContent={'space-around'}>
                
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
        </Box>
        </Box>

  </Box>
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