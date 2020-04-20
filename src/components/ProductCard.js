import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { CircularProgress, Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import useStyles from './Styles'


export default function ProductCard(props) {

  //console.log(props)

  const title = props.name.replace(/ /g, '_');
  const classes = useStyles();
  return (
    <Link to={{ pathname: `/item/${props.id}/${title}`, state: props }} className={classes.cardDetail}  >
      <Card className={classes.productCard} elevation={0}>

        {!props.src ? <CircularProgress /> :
          <Fragment>
            <CardMedia
              className={classes.cardMedia}
              image={props.src}
              title={props.name}
            />

            <CardContent className={classes.cardContent}>
              <Typography >
                {props.brand}
              </Typography>
              <Typography >
                {props.name}
              </Typography>
              <Typography >
                {props.price}
              </Typography>
            </CardContent>
          </Fragment>}
      </Card>
    </Link >

  )
}