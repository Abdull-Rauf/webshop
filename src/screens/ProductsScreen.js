import React from 'react';
import useStyles from '../components/Styles'
import ProductCard from '../components/ProductCard'

export default function ProductsScreen() {

  const classes = useStyles();

  return (
    <div className={classes.products}>
      <ProductCard name='Nike Air' price='999,00' src='https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cb0201f0-91e0-459e-b096-21590ed2a7f8/sko-air-vapormax-360-HrPSv9.jpg' />
      <ProductCard name='Nike Black' price='1799,00' src='https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/eb0359e8-1b3e-497b-8c9c-1a223c053483/sko-air-max-plus-iii-gmzPHx.jpg' />
      <ProductCard name='Nike Black' price='1799,00' src='https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/eb0359e8-1b3e-497b-8c9c-1a223c053483/sko-air-max-plus-iii-gmzPHx.jpg' />

    </div>


  )
}