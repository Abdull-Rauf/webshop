import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { CircularProgress, Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import useStyles from './Styles'


export default function ProductCard({ name, price, src }) {


  const classes = useStyles();

  return (
    <Link to='/productdetails'>
      <Card className={classes.productCard}>

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
    </Link>

  )
}