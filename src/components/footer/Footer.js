import React from 'react';
import { Paper, Grid, Typography, MenuItem, } from '@material-ui/core'
import useStyles from '../Styles'


const Footer = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.footer}>
      <Grid container spacing={6} style={{ width: '80vw', margin: 'auto' }}>
        <Grid item xs>
          <Typography variant="h5">
            FashionPoint
           </Typography>

        </Grid>

        <Grid item xs>
          <Typography variant="h6" >
            About
           </Typography>
          <MenuItem>About us</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Press</MenuItem>
          <MenuItem>Cookies</MenuItem>

        </Grid>
        <Grid item xs>
          <Typography variant="h6">
            Customer Service
           </Typography>
          <MenuItem>Contacts us</MenuItem>
          <MenuItem>Payment</MenuItem>
          <MenuItem>Shipment</MenuItem>
          <MenuItem>FAQs</MenuItem>
        </Grid>
      </Grid>

    </Paper>

  )
}

export default Footer;