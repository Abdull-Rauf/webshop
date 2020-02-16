import React, { useState, useEffect, Fragment } from 'react';
import useStyles from '../components/Styles'
import ProductCard from '../components/ProductCard'
import data from '../data/data.json'
import { Typography } from '@material-ui/core';

export default function ProductsScreen(props) {

  const { products } = props;

  const [category, setCategory] = useState(products)
  useEffect(() => setCategory(products), [products])



  const classes = useStyles();



  return (

    <Fragment>
      <Typography variant='h4' style={{ marginTop: '5vw' }}>{category.toUpperCase()}</Typography>
      <div className={classes.products}>

        {category < 1 ? <h1>No Category selected </h1> : data[category].map(product => {

          return <ProductCard name={product.name} price={product.price} src={product.imgSrc} />

        })}

      </div>
    </Fragment>
  )
}