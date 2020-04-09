import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { CircularProgress, Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import useStyles from './Styles'


export default function ProductCard({ brand, name, price, src, id }) {


  const classes = useStyles();

  return (
    <Link to={{ pathname: `/item/${id}`, details: { brand, name, price, src, id } }} className={classes.cardDetail}  >
      <Card className={classes.productCard} elevation={0}>

        {!src ? <CircularProgress /> :
          <Fragment>
            <CardMedia
              className={classes.cardMedia}
              image={src}
              title={name}
            />

            <CardContent className={classes.cardContent}>
              <Typography >
                {brand}
              </Typography>
              <Typography >
                {name}
              </Typography>
              <Typography >
                {price}
              </Typography>
            </CardContent>
          </Fragment>}
      </Card>
    </Link >

  )
}