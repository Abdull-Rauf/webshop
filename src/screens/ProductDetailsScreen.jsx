import React, { Fragment, useEffect, useState } from 'react';
import useStyles from '../components/Styles'
import ProductDetailsComponent from '../components/ProductDetails';
import data from '../data/data.json'


export default function ProductDetailsScreen(props) {



  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(props.location.state)
    //console.log(props.location.state)
  }, [props])


  const classes = useStyles();
  return (

    <Fragment>
      <div className={classes.productDetails}>
        <ProductDetailsComponent product={props.location.state} addToBag={props.addToBag} />
      </div>
    </Fragment >
  )
}