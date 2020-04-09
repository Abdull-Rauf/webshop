import React from 'react';
import { Paper, Divider, Grid, AppBar, Typography, Toolbar, MenuItem, Badge } from '@material-ui/core'
import useStyles from '../Styles'




const Footer = ({ title, bg_color, topNavLink1, TopNavLink2, }) => {

  const classes = useStyles();

  return (
    <Paper className={classes.footer}>
      <Grid container spacing={6} style={{ width: '80vw', margin: 'auto' }}>
        <Grid item xs>
          <Typography variant="h5" color="inherit">
            FashionPoint
           </Typography>

        </Grid>

        <Grid item xs>
          <Typography variant="h6" color="inherit">
            About
           </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h6" color="inherit">
            Customer Service
           </Typography>
        </Grid>
      </Grid>

    </Paper>

  )
}

export default Footer;