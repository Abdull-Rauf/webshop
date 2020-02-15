import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import useStyles from './Styles'


export default function ProductCard({ name, image, price, src }) {


  const classes = useStyles();

  return (

    <Card className={classes.productCard}>

      <CardMedia
        className={classes.cardMedia}
        image={src}
        title={name}
      />

      <CardContent className={classes.cardContent}>
        <Typography variant="h6" color="textSecondary" >
          {name}
        </Typography>
        <Typography variant="h6" color="textSecondary" >
          {price}
        </Typography>
      </CardContent>

    </Card>

  )
}