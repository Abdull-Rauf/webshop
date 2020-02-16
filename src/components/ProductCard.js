import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import useStyles from './Styles'


export default function ProductCard({ name, image, price, src }) {


  const classes = useStyles();

  return (
    <Link to='/productdetails'>
      <Card className={classes.productCard}>

        <CardMedia
          className={classes.cardMedia}
          image={src}
          title={name}
        />

        <CardContent className={classes.cardContent}>
          <Typography >
            {name}
          </Typography>
          <Typography >
            {price}
          </Typography>
        </CardContent>

      </Card>
    </Link>

  )
}