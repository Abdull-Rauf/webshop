import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { CircularProgress, Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import useStyles from './Styles'


export default function ProductCard({ brand, name, price, src, id, selectProduct }) {


  const classes = useStyles();

  return (
    <Link to={{ pathname: `/item/${id}${name}` }} className={classes.cardDetail} onClick={() => selectProduct({ brand, name, price, src, id })} >
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