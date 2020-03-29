import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core'
import useStyles from './Styles'


export default function BagProductComponent(props) {

  console.log(props)

  const classes = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      {props.items.map(item => {
        return (
          <Card className={classes.bagProductCard} elevation={0}>
            <CardMedia className={classes.bagProductImage} image={item.src} />
            <Typography variant='h6'>{item.name}</Typography>
            <Typography variant='h6' className={classes.detailsPrice}>{item.price}</Typography>
          </Card>
        )
      })}


    </div>

  )
}