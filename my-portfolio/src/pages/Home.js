import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    margin: 'auto',
    borderRadius: 8,
    display: 'flex',
      
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"white",

  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className = {classes.image}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Header/>
          <Container>
          <Avatar alt="Remy Sharp" src="../utils/images/picture2.jpg" className={classes.large} />
          </Container>
        <Footer/>
      </Grid>
    </div>
  );
}