import React, { useState, useEffect, Fragment } from 'react';
import useStyles from '../components/Styles'
import ProductCard from '../components/ProductCard'
import data from '../data/data.json'
import { Typography } from '@material-ui/core';

export default function ProductsScreen(props) {


  const { productCategory } = props;
  const [category, setCategory] = useState(productCategory)
  useEffect(() => setCategory(productCategory), [productCategory])
  const classes = useStyles();
  const products = category ? data[category] : data;
  return (
    <Fragment>
      <Typography variant='h4' style={{ marginTop: '5vh', marginBottom: '5vh' }}>{category.toUpperCase()}</Typography>
      <div className={classes.products}>
        {products.map(product => {
          return <ProductCard
            id={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            src={product.imgSrc}
            selectProduct={props.selectProduct} />
        })}
      </div>
    </Fragment>)
}