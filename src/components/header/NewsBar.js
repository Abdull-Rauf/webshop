import React from 'react';
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './Styles'



const NewsBar = () => {

  const classes = useStyles();

  return (
    <div style={{ paddingBottom: 25 }}>
      <AppBar className={classes.topNewsBar} position='relative' elevation={0}>
        <Typography>20% off till 31 May </Typography>
      </AppBar>
    </div>

  )
}
export default NewsBar;