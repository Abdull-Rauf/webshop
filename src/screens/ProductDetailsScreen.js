import React, { Fragment, useEffect, useState } from 'react';
import useStyles from '../components/Styles'
import ProductDetailsComponent from '../components/ProductDetails';


export default function ProductDetailsScreen(props) {

  const [details, setDetails] = useState([])

  useEffect(() => {



  }, [])

  console.log(props.location)
  const productDetails = props.productDetails
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.productDetails}>
        <ProductDetailsComponent productDetails={productDetails} addToBag={props.addToBag} />
      </div>
    </Fragment>
  )
}