import React from 'react';
import { Paper, Divider, Grid, AppBar, Typography, Toolbar, MenuItem, Badge } from '@material-ui/core'
import useStyles from './Styles'




const Footer = ({ title, bg_color, topNavLink1, TopNavLink2, }) => {

  const classes = useStyles();

  return (
    <Paper className={classes.footer}>
      <Grid container spacing={5} justify="space-around" alignItems="center">
        <Grid item xs>

        </Grid>

        <Grid item xs>
          <Typography variant="subheading" color="inherit">
            Footer Content
           </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="subheading" color="inherit">
            Footer Content
           </Typography>
        </Grid>
      </Grid>

      <Divider />

      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="caption"
            color="inherit"
            className={classes.flex}
          >
            © Copyright ShopOnline
            </Typography>

        </Toolbar>
      </AppBar>

    </Paper>

  )
}

export default Footer;