import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  //Navbar
  navbar: {
    display: 'flex',
    width: '100%',
    height: '70px',
    flexDirection: 'row',
    borderBottom: '1px solid #CFCFCF',
    justifyContent: 'space-evenly'

  },

  menuItem: {
    "&:hover": {
      backgroundColor: 'white'
    },
  },

  logo: {
    height: '100%',
  },
  search: {
    height: '100%',
    width: '60%'
  },
  icons: {
    height: '100%',
    display: 'flex',
    width: '10%',
    justifyContent: 'space-between'
  },


  link: {
    textDecoration: 'none',
    color: '#000000',

  },
  image: {
    width: '60%'
  },

  badge: {
    right: -2,
    padding: '0 4px',
  },


  menu: {
    display: 'flex',
    width: '20%',
    marginTop: '70px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },


  topNewsBar: {
    display: 'flex',
    height: '35px',
    backgroundColor: '#ffca28',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#333',
    zIndex: '99',
  },

}));

export default useStyles;