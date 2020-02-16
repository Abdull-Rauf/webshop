import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Typography, Toolbar, MenuItem, Badge } from '@material-ui/core'
import useStyles from './Styles'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';


const Nav = ({ title, bgColor, navLink1, navLink2, selectedCategory }) => {

  const classes = useStyles();

  return (
    <AppBar elevation={0} color={bgColor} position='relative' className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <MenuItem onClick={() => selectedCategory("clothes")}>
          <Typography><Link to='/products' className={classes.link}>{navLink1}</Link></Typography>
        </MenuItem>
        <MenuItem onClick={() => selectedCategory("shoes")}>
          <Typography><Link to='/products' className={classes.link}>{navLink2}</Link></Typography>
        </MenuItem>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <MenuItem className={classes.title}>
          <Typography className={classes.titleText}><Link to='/' className={classes.link}>{title}</Link></Typography>
        </MenuItem>
      </Toolbar>

      <Toolbar className={classes.toolbar} style={{ alignItems: 'right' }}>
        <MenuItem className={classes.icon}>
          <PermIdentityOutlinedIcon className={classes.profileIcon} />
        </MenuItem>
        <MenuItem className={classes.icon}>
          <Badge badgeContent={1} color="error" className={classes.badge}>
            <LocalMallOutlinedIcon className={classes.bagIcon} style={{}} />
          </Badge>
        </MenuItem>
      </Toolbar>
    </AppBar >
  )
}

// Action
const selectCategory = (payload) => {
  return {
    type: "CHANGE_CATEGORY",
    payload
  }
}

// Connect to redux
const mapDispatchToProps = dispatch => {
  return {
    selectedCategory: data => dispatch(selectCategory(data))
  }
}

export default connect(null, mapDispatchToProps)(Nav);