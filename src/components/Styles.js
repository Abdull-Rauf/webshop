import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

  //Navbar
  navbar: {
    display: 'flex',
    paddingLeft: '10%',
    paddingRight: '10%',
    height: '8vh',
    flexDirection: 'row',
    borderBottom: '1px solid #CFCFCF',
    justifyContent: 'space-between'

  },
  toolbarNavLinks: {
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'row',
    marginLeft: '10%',
    width: '30%'

  },
  munuitem: {
    "&:hover": {
      backgroundColor: 'white'
    },
  },

  title: {
    flexGrow: 2,
  },
  titleText: {
    fontSize: '1.4em',
    fontStyle: 'bold',
    fontWeight: 800
  },

  link: {
    textDecoration: 'none',
    color: '#000000',

  },

  toolbarRight: {
    width: '40%',
    height: '100%',
    marginLeft: '30%'
  },
  icon: {
    height: '100%',
    margin: 'auto'
  },

  badge: {
    right: -2,
    padding: '0 4px',
  },
  topNewsBar: {
    display: 'flex',
    height: '5vh',
    backgroundColor: '#ffca28',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#333',
    marginTop: '8vh',
    zIndex: '99'
  },
  //Home Page
  offersCard: {
    marginLeft: '5vw',
    width: '80vw',
    minHeight: 500
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
    width: '80vw',
    margin: 'auto',
  },
  //Products Page
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-arond',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
  },
  productCard: {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '3px',
    marginRight: '3px',
    width: '21vw',
    minHeight: '15%',
    "&:hover": {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
  },
  cardContent: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardMedia: {
    minHeight: 420,
    width: '100%',
    objectFit: 'contain',
    padding: 5
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
    width: '60%',
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
    color: 'red'
  },

  //shoppingbagScreen
  bagScreen: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10vh',
    display: 'flex',
    minHeight: '47vh',
    width: '80%',
  },

  bagProductCard: {
    display: 'flex',
    borderBottom: '1px solid #CCC',
    height: 100,
    width: '100%',
    marginBottom: 5

  },
  bagProductImage: {
    height: 90,
    width: '10%'
  },
  bagSummary: {
    width: '38%',
    border: '1px solid #CCC',
    height: '40vh',
    marginLeft: '2%'
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