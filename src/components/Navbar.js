import React from 'react';
import { AppBar, Typography, Toolbar, MenuItem, Badge } from '@material-ui/core'
import useStyles from './Styles'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';


const Nav = ({ title, bg_color, topNavLink1, TopNavLink2, }) => {

  const classes = useStyles();

  return (
    <AppBar elevation={0} color={bg_color} position='relative' className={classes.navbar}>

      <Toolbar className={classes.toolbar}>
        <MenuItem>
          <Typography>{topNavLink1} </Typography>
        </MenuItem>
        <MenuItem>
          <Typography>{TopNavLink2}</Typography>
        </MenuItem>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <MenuItem className={classes.title}>
          <Typography className={classes.titleText}> {title} </Typography>
        </MenuItem>
      </Toolbar>

      <Toolbar className={classes.toolbar} style={{ alignItems: 'right' }}>
        <MenuItem className={classes.icon}>
          <PermIdentityOutlinedIcon className={classes.profileIcon} />
        </MenuItem>
        <MenuItem className={classes.icon}>
          <Badge badgeContent={4} color="error" className={classes.badge}>
            <LocalMallOutlinedIcon className={classes.bagIcon} style={{}} />
          </Badge>
        </MenuItem>
      </Toolbar>
    </AppBar >


  )
}

export default Nav;