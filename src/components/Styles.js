import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

  navbar: {
    display: 'flex',
    height: '10vh',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #CFCFCF'

  },

  toolbar: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
  },

  title: {
    alignSelf: 'center',
    flexGrow: 2,
  },
  titleText: {
    fontSize: '1.4em',
    fontStyle: 'bold'
  },
  profileIcon: {
    fontSize: 32,
  },
  icon: {
    height: '100%',
  },

  bagIcon: {
    fontSize: '25',
  },
  badge: {
    right: -3,
    padding: '0 4px',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-arond',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
    marginTop: '10%',
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
    backgroundColor: '#CCC'
  },
  footer: {
    marginTop: '10%',
    minWidth: '100%',
    backgroundColor: '#CCC'
  },



}));

export default useStyles;