import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

  //Navbar
  navbar: {
    display: 'flex',
    height: '8vh',
    flexDirection: 'row',
    borderBottom: '1px solid #CFCFCF',

  },
  toolbarNavLinks: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    marginLeft: '10%'
  },
  toolbarRight: {
    display: 'flex',
    textAlign: 'center',
    marginLeft: '1%'
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
    fontStyle: 'bold',
    fontSize: '1em',

  },
  search: {
    display: 'flex',
    marginLeft: '38%',
    width: 600

  },
  icon: {
    height: '100%',
  },

  badge: {
    right: -3,
    padding: '0 4px',
  },
  topNewsBar: {
    display: 'flex',
    height: '5vh',
    backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#f5f5f5',
    marginTop: '8vh',
    zIndex: '99'
  },
  //Home Page
  offersCard: {
    marginLeft: '5vw',
    width: '90vw',
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
    width: '90vw',
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
    margin: '10px',
    width: '20vw',
    minHeight: '50vh'
  },
  cardContent: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardMedia: {
    minHeight: 350,
    minWidth: '100%',
  },
  //Product Details
  productDetails: {
    marginLeft: '10vw',
    width: '80vw',
    marginTop: '15vh',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 450,
  },
  detailsImageCard: {
    width: '60%',
    display: 'flex',
    minHeight: 450,
  },
  detailImage: {
    minHeight: 450,
    minWidth: '100%',
    backgroundColor: '#CCC'
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

  //Footer


  footer: {
    margin: '10vh auto 0',
    width: '95vw',
    backgroundColor: '#303030',
    color: 'white'
  },
  footerBottom: {
    backgroundColor: '#000000'
  },
}));
export default useStyles;