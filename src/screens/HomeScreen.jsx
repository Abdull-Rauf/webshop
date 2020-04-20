import React from 'react';
import useStyles from '../components/Styles'
import OffersCard from '../components/OffersCard'
import ProductCard from '../components/ProductCard'
import data from '../data/data.json'
import { Typography, } from '@material-ui/core'
import NewsBar from '../components/header/NewsBar'


export default function HomeScreen(props) {

  const classes = useStyles();
  return (

    <div className={classes.home}>
      <NewsBar />
      {data.offers.map(product => {
        return <OffersCard src={product.imgSrc} key={product.id} />
      })}
      <Typography variant='h4' style={{ marginTop: '5vh', marginBottom: '5vh' }}> Trending Now</Typography>
      <div className={classes.popular}>
        {data.popular.map(product => {
          return <ProductCard
            key={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            src={product.imgSrc}
            id={product.id}
          />
        })}
      </div>
    </div>
  )
}