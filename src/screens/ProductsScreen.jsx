import React, { useState, useEffect, Fragment } from 'react';
import useStyles from '../components/Styles'
import ProductCard from '../components/ProductCard'
import data from '../data/data.json'
import { Typography } from '@material-ui/core';

export default function ProductsScreen({ name, sub }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data[sub])
  }, [])

  const classes = useStyles();
  return (
    <Fragment>
      {/* <div style={{ border: '1px solid #CCC', padding: 5 }}>
        <Typography variant='p' style={{ textAlign: 'center' }}>You are here: {name}/{sub}</Typography>
      </div> */}
      <div className={classes.products}>
        {products.map(product => {
          return <ProductCard
            id={product.id}
            total={product.total}
            brand={product.brand}
            name={product.name}
            price={product.price}
            src={product.imgSrc}
            color={product.color}
            size={product.size}
          />
        })}
      </div>
    </Fragment>)
}