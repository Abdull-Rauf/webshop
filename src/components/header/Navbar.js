import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Typography, Toolbar, Badge, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './Styles'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import logo from './logo.png'


const Nav = ({ title, bgColor, numberOfItems }) => {

  const [countItems, setCountItems] = useState(0)

  useEffect(() => setCountItems(numberOfItems), [numberOfItems])

  const classes = useStyles();



  return (
    <AppBar elevation={0} color={bgColor} position='fixed' className={classes.navbar}>

      <Toolbar className={classes.logo}>
        <Typography className={classes.logoImg}>
          <Link to='/' className={classes.link}>
            <img src={logo} alt='logo' className={classes.image} />
          </Link>
        </Typography>
      </Toolbar>

      <Toolbar className={classes.search}>
        <TextField
          id="outlined-size-small"
          placeholder="Search..."
          variant="outlined"
          size="small"
          type="search"
          style={{ display: 'flex', width: '100%', margin: 'auto' }}>
          <SearchIcon />

        </TextField>

      </Toolbar>

      <Toolbar className={classes.icons}>
        <Link to='/favorites' className={classes.link}>
          <Badge color="error" className={classes.badge}>
            <PersonOutlineOutlinedIcon style={{ fontSize: 30 }} color='black' />
          </Badge>
        </Link>
        <Link to='/favorites' className={classes.link}>
          <Badge color="error" className={classes.badge}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: 25 }} color='black' />
          </Badge>
        </Link>
        <Link to='/shoppingbag' className={classes.link}>
          <Badge badgeContent={countItems} color="error" className={classes.badge}>
            <LocalMallOutlinedIcon style={{ fontSize: 25 }} />
          </Badge>
        </Link>

      </Toolbar>


    </AppBar >
  )
}

const mapStateToProps = state => {
  const { shoppingBagReducer } = state;

  return {

    numberOfItems: shoppingBagReducer.items.length

  }
}


export default connect(mapStateToProps, null)(Nav);