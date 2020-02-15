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
    flexGrow: 2
  },

  profileIcon: {
    fontSize: '30',
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
    width: '100%',
    margin: 'auto'
  },
  productCard: {
    marginTop: '10vh',
    marginLeft: '2vw',
    width: '25vw',
    minHeight: '60vh'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardMedia: {
    minHeight: 350,
    minWidth: '100%',
    backgroundColor: '#CCC'
  },


}));

export default useStyles;