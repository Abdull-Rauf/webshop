import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({

  //Home Page
  offersCard: {
    width: '100%',
    minHeight: 500,
  },
  offersImage: {
    minHeight: 500,
    minWidth: '100%',
    objectFit: 'cover'
  },
  //Popular Card
  popular: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-arond',
    alignItems: 'center',
    width: '97%',
    margin: 'auto',
  },
  //Products Page
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-arond',
    alignItems: 'center',
    width: '97%',
    margin: 'auto',
  },
  productCard: {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '2px',
    marginRight: '2px',
    width: '22vw',
    minHeight: '15%',

  },
  cardContent: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardMedia: {
    minHeight: 320,
    width: '100%',
    objectFit: 'contain',
    padding: 5,
    transition: 'transform .50s, filter .50s ease-in-out',
    "&:hover": {
      filter: 'brightness(70%)',
      transform: 'scale(1)',
    }

  },
  cardDetail: {
    textDecoration: 'none',
  },
  //Product Details
  productDetails: {
    marginLeft: '10vw',
    width: '80vw',
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
  },
  detailsImageCard: {
    width: '70%',
    display: 'flex',
    padding: '10px',
    minHeight: '40%'
  },
  detailImage: {
    minWidth: '100%',
    backgroundColor: '#CCC',
    padding: '10px',
    minHeight: 550
  },
  detailsText: {
    textAlign: 'left',
    width: '38%',
    minHeight: 450,
    marginLeft: 50,
  },

  detailsPrice: {
    color: 'red',

  },

  //shoppingbagScreen

  bagScreen: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    boxShadow: '0px 5px 5px #CCC',

  },

  bagProductCard: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #CCC',
    height: 100,
    width: '95%',
    marginBottom: 5,
    padding: 10


  },
  bagProductImage: {
    height: 80,
    width: '20%'
  },
  bagSummary: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '10px'
  },
  bagProductName: {
    color: 'black',
    marginLeft: '10%'
  },
  bagProductPrice: {
    color: 'red',
    marginLeft: '10%'
  },


  //Footer


  footer: {
    height: '20vh',
    margin: '10vh auto 0',
    width: '100vw',
    backgroundColor: '#303030',
    color: 'white'
  },
  footerBottom: {
    backgroundColor: '#000000'
  },
}));

export default useStyles;