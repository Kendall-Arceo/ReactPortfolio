import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../components/ProjectCard';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '300vh',
  },

  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    
      
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  grid: {
    height: '150vh',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (

    <div className = {classes.image}>
       <CssBaseline />
      
        
        
        
        <Container maxWidth="lg" >
          <Header/>
          
          <Grid container direction="row" justify="center" alignItems="center" component="main" className={classes.grid}>
            <Container maxWidth ="lg">
              <main>
                <Grid container direction="row" justify="center" alignItems="center" spacing ={2}>
                  <Grid item xs = {6}>
                    <Typography variant="h2" component="h1" color ="primary" className = {classes.paper}>
                      Projects
                    </Typography>
                  </Grid>
                </Grid>
                
                <Grid container direction="row" justify="center" alignItems="center" spacing ={2}>
                  <Grid item xs = {12}>
                    <Typography variant="h4" className = {classes.paper} gutterBottom>
                    Some assignments and homework content throughout the course 
                    </Typography>  
                  </Grid>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center" spacing ={2}>
                  <Grid item xs = {12} lg={4}>
                    
                    <ProjectCard/>
                    
                    
                  </Grid>
                  <Grid item xs = {12} lg={4}>
                    
                    <ProjectCard/>
                    
                    
                  </Grid>
                  <Grid item xs = {12} lg={4}>
                    
                    <ProjectCard/>
                    
                    
                  </Grid>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center" spacing ={2}>
                  <Grid item xs = {12} lg={4}>
                    
                    <ProjectCard/>
                    
                    
                  </Grid>
                  <Grid item xs = {12} lg={4}>
                    
                    <ProjectCard/>
                    
                    
                  </Grid>
                  <Grid item xs = {12} lg={4}>
                    
                    <ProjectCard/>
                    
                    
                  </Grid>
                </Grid>
                </main>
            </Container>
          </Grid>  
          

          
        </Container>
        
       
      
    </div>
  );
}