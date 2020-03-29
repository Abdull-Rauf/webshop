import React, { Fragment } from 'react';
import { Card, CardMedia, Typography, Button } from '@material-ui/core'
import useStyles from './Styles'
import { sizing } from '@material-ui/system';

export default function ProductDetailsComponent(props) {

  console.log(props)


  const product = props.productDetails

  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.detailsImageCard} elevation={0}>

        <CardMedia
          height="50%"
          className={classes.detailImage}
          image={product.src}
        />

      </Card>
      <Card className={classes.detailsText} elevation={0}>
        <Typography >{product.brand}</Typography>
        <br />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant='h6'>{product.name}</Typography>
          <br />
          <Typography variant='h2' className={classes.detailsPrice}>{product.price}</Typography>
        </div>

        <Button onClick={() => props.addToBag(props.productDetails)}
          style={{ marginTop: '40px', width: '300px', height: '50px', textSelf: 'center' }}
          variant="contained" color="secondary">
          <Typography variant='h6' elevation={0}>ADD TO BAG</Typography>
        </Button>
      </Card>

    </Fragment>

  )
}