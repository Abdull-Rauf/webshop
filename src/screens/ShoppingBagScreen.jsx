import React, { Fragment } from 'react';
import useStyles from '../components/Styles'
import BagProductComponent from '../components/BagProductComponent ';
import BagSummary from '../components/BagSummary';

export default function ShoppingBagScreen(props) {

  console.log(props)



  const items = props.items

  console.log(items)
  const classes = useStyles();
  return (
    <div className={classes.bagScreen}>

      <BagProductComponent items={items} />
      <BagSummary />

    </div>
  )
}