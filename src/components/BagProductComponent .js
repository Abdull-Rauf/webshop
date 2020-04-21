import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core'
import useStyles from './Styles'


export default function BagProductComponent(props) {

  console.log(props)

  const classes = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 20, }}>
      {props.items.map(item => {
        return (
          <Card className={classes.bagProductCard} elevation={0}>
            <CardMedia className={classes.bagProductImage} image={item.src} />
            <Typography className={classes.bagProductName}>{item.name}</Typography>
            <Typography className={classes.bagProductPrice}>{item.price}</Typography>
            <Typography className={classes.bagProductPrice}>{item.total}</Typography>
          </Card>
        )
      })}
    </div>
  )
}