import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import useStyles from './Styles'



const NewsBar = ({ title, }) => {

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.topNewsBar} position='relative' elevation={0}>
        <Typography>20% off till 28 February </Typography>
      </AppBar>
    </div>

  )
}
export default NewsBar;