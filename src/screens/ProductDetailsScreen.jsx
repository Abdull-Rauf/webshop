import React, { Fragment, useEffect, useState } from 'react';
import useStyles from '../components/Styles'
import ProductDetailsComponent from '../components/ProductDetails';


export default function ProductDetailsScreen(props) {


  console.log(props.location.details)

  const productDetails = props.location.details
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.productDetails}>
        <ProductDetailsComponent productDetails={productDetails} addToBag={props.addToBag} />
      </div>
    </Fragment>
  )
}