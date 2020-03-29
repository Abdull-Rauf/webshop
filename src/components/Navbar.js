import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Typography, Toolbar, MenuItem, Badge, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './Styles'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const Nav = ({ title, bgColor, navLink1, navLink2, selectedCategory, numberOfItems }) => {

  const [countItems, setCountItems] = useState(0)

  useEffect(() => setCountItems(numberOfItems), [numberOfItems])

  const classes = useStyles();



  return (
    <AppBar elevation={0} color={bgColor} position='fixed' className={classes.navbar}>
      <div style={{ display: 'flex' }}>
        <Toolbar >
          {/* <MenuItem className={classes.title}> */}
          <Typography className={classes.titleText}><Link to='/' className={classes.link}>{title}</Link></Typography>
          {/* </MenuItem> */}
        </Toolbar>

        <Toolbar className={classes.toolbarNavlinks}>
          <MenuItem onClick={() => selectedCategory("clothes")} className={classes.menuitem}>
            <Typography><Link to='/products' className={classes.link}>{navLink1}</Link></Typography>
          </MenuItem>
          <MenuItem onClick={() => selectedCategory("shoes")} className={classes.menuitem}>
            <Typography ><Link to='/products' className={classes.link}>{navLink2}</Link></Typography>
          </MenuItem>
        </Toolbar>
      </div>
      <Toolbar className={classes.toolbarRight}>
        <TextField
          id="outlined-size-small"
          placeholder="Search your product"
          variant="outlined"
          size="small"
          type="search"
          style={{ display: 'flex', width: '100%', margin: 'auto' }}>
          <SearchIcon />

        </TextField>



        <Link to='/shoppingbag'>
          <Badge badgeContent={countItems} color="error" className={classes.badge}>
            <LocalMallOutlinedIcon style={{ fontSize: 25 }} />
          </Badge>
        </Link>

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
const mapStateToProps = state => {
  const { shoppingBagReducer } = state;

  return {

    numberOfItems: shoppingBagReducer.items.length

  }
}

// Connect to redux
const mapDispatchToProps = dispatch => {
  return {
    selectedCategory: data => dispatch(selectCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);