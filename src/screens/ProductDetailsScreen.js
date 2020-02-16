import React, { Fragment } from 'react';
import useStyles from '../components/Styles'
import ProductDetailsComponent from '../components/ProductDetails';

export default function ProductDetailsScreen({ name, src, price }) {


  const classes = useStyles();



  return (

    <Fragment>

      <div className={classes.productDetails}>
        <ProductDetailsComponent name={name} price={price} src={src} />
      </div>

    </Fragment>
  )
}