import React from 'react';
import { Card, CardMedia } from '@material-ui/core'
import useStyles from './Styles'


export default function OffersCard({ name, src }) {


  const classes = useStyles();

  return (

    <Card className={classes.offersCard}>

      <CardMedia
        className={classes.offersImage}
        image={src}

      />

    </Card>

  )
}