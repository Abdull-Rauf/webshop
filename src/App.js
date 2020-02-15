import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import ProductsScreen from './screens/ProductsScreen'
function App() {



  return (

    <>
      <Nav title='ShopOnline' topNavLink1='CLOTHES' TopNavLink2='SHOES' bg_color='transparent' />

      <div className="App">



        <ProductsScreen />

      </div>
    </>
  );
}

export default App;
