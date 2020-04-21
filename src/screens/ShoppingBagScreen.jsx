import React, { Fragment } from 'react';
import useStyles from '../components/Styles'
import BagProductComponent from '../components/BagProductComponent ';
import BagSummary from '../components/BagSummary';
import { Typography } from '@material-ui/core';

export default function ShoppingBagScreen(props) {

  console.log('props:', props)



  const items = props.items

  console.log(items)
  const classes = useStyles();
  return (
    <>
      {items.length < 1 ? <Typography>You bag is empty </Typography> :

        <>
          <div className={classes.bagScreen}>
            <Typography variant='h6'>Your Shopping Bag</Typography>
            <BagProductComponent items={items} />
            <BagSummary />
          </div>
          <div className={classes.bagScreen}>
            <Typography variant='h6'>Order Summary</Typography>
            <BagSummary />
          </div>
        </>
      }
    </>
  )
}