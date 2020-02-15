import React, { Fragment } from 'react';
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/Footer'
import ProductsScreen from './screens/ProductsScreen'




function App() {

  return (

    <Fragment>
      <Nav title='ShopOnline' topNavLink1='CLOTHES' TopNavLink2='SHOES' bg_color='transparent' />
      <div className="App">
        <ProductsScreen />
      </div>
      <Footer title='ShopOnline' topNavLink1='CLOTHES' TopNavLink2='SHOES' bg_color='#000000' />
    </Fragment>
  );
}

export default App;
