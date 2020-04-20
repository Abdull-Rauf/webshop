import React, { Fragment, useState, useEffect } from 'react';
import { Card, CardMedia, Typography, Button } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import useStyles from './Styles'

export default function ProductDetailsComponent(props) {



  const [values, setValues] = useState({ selectedColor: '', selectedSize: '', });
  const product = props.product
  //console.log(props)
  // useEffect(() => {
  //   //setProduct(props.product)

  // }, [props.product]);


  const handleOnChange = event => {

    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);


  };


  const classes = useStyles();

  return (

    < Fragment >
      {console.log(product.color)}
      <Card className={classes.detailsImageCard} elevation={0}>

        <CardMedia
          height="50%"
          className={classes.detailImage}
          image={product.src}
        />

      </Card>
      <Card className={classes.detailsText} elevation={0}>

        <br />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant='h6' className={classes.detailsName}>{product.name}</Typography>
          <br />
          <Typography variant='h2' className={classes.detailsPrice}>{product.price}:-</Typography>
        </div>
        <select
          className={classes.colorAndSize}
          variant='outlined'
          id="selectedColor"
          select
          required
          value={values.selectedColor}
          onChange={handleOnChange}
        >
          <option value='' >Color</option>
          {product.color.map((color, i) => {
            return <option value={color} key={i}>{color}</option>
          })}

        </select>
        <br />
        <select
          className={classes.colorAndSize}
          variant='outlined'
          id="selectedSize"
          select
          required
          value={values.selectedSize}
          onChange={handleOnChange}
        >
          <option value='' >Size</option>
          {product.size.map((size, i) => {
            return <option value={size} key={i}>{size}</option>
          })}

        </select>

        <Button onClick={() => props.addToBag(product)}
          className={classes.addButton}
          variant="contained" color="secondary">
          <Typography variant='h6' elevation={0}>ADD TO BAG</Typography>
        </Button>
        <Typography className={classes.favoriteButton}><FavoriteBorderOutlinedIcon style={{ fontSize: 14 }} />{' '}Add to favorite</Typography>
      </Card>

    </Fragment >

  )
}