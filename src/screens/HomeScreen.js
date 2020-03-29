import React from 'react';
import useStyles from '../components/Styles'
import OffersCard from '../components/OffersCard'
import ProductCard from '../components/ProductCard'
import data from '../data/data.json'
import { Typography, } from '@material-ui/core'

export default function HomeScreen(props) {

  const classes = useStyles();

  return (


    <div className={classes.home}>
      <Typography variant='h4' style={{ marginTop: '1vh', marginBottom: '5vh' }}> </Typography>


      {data.offers.map(product => {

        return <OffersCard src={product.imgSrc} />

      })}
      <Typography variant='h4' style={{ marginTop: '5vh', marginBottom: '5vh' }}> Trending Now</Typography>
      <div className={classes.popular}>
        {data.popular.map(product => {

          return <ProductCard
            brand={product.brand}
            name={product.name}
            price={product.price}
            src={product.imgSrc}
            selectProduct={props.selectProduct} />

        })}
      </div>

    </div>
  )

}