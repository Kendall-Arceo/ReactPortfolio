import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  profile: {
    width: 220,
    height: 240,
    borderRadius: 225 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className = {classes.image}>
      <CssBaseline />
      <Grid container direction="row" justify="center" alignItems="center" component="main" className={classes.root}>
      
        <Container maxWidth="lg">
          <main>
                    
            <Badge className = {classes.paper} >
              <img alt="" src={ require("../utils/images/Picture2.jpg")} color ="primary" className = {classes.profile}/>
            </Badge>

            <Typography variant="h2" component="h1" color ="primary">
              Hi, My Name is Kendall Arceo!
            </Typography>

            <Paper>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>  
            </Paper> 
          </main>
        </Container>
      </Grid>
    </div>
  );
}