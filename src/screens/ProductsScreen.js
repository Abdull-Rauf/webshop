import React from 'react';
import useStyles from '../components/Styles'
import ProductCard from '../components/ProductCard'
import data from '../data/data.json'

export default function ProductsScreen() {

  const classes = useStyles();



  return (
    <div className={classes.products}>
      {data.shoes.map(shoe => {

        return <ProductCard name={shoe.name} price={shoe.price} src={shoe.imgSrc} />

      })}
    </div>
  )
}