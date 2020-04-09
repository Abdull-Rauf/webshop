import React, { Fragment } from 'react';
import useStyles from '../components/Styles'
import BagProductComponent from '../components/BagProductComponent ';
import BagSummary from '../components/BagSummary';
import { Typography } from '@material-ui/core';

export default function ShoppingBagScreen(props) {

  console.log(props)



  const items = props.items

  console.log(items)
  const classes = useStyles();
  return (
    <div className={classes.bagScreen}>
      <Typography variant='h6'>Products in your shopping bag</Typography>
      <BagProductComponent items={items} />
      <BagSummary />

    </div>
  )
}