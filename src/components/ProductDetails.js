import React, { Fragment } from 'react';
import { Card, CardMedia, Typography, Button } from '@material-ui/core'
import useStyles from './Styles'


export default function ProductDetailsComponent({ name, price, src }) {


  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.detailsImageCard} elevation={0}>

        <CardMedia
          className={classes.detailImage}
          image={src}
        />

      </Card>
      <Card className={classes.detailsText} elevation={0}>
        <Typography >Brand Name</Typography>
        <Typography variant='h5'>Product Name</Typography>
        <Typography variant='h4' className={classes.detailsPrice}>999:-</Typography>
        <Button style={{ marginTop: '310px', width: '300px', height: '50px' }} variant="contained" color="secondary">
          <Typography variant='h6'>ADD TO BAG</Typography>
        </Button>
      </Card>

    </Fragment>

  )
}