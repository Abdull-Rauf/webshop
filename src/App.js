import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import NewsBar from './components/NewsBar'
import Footer from './components/Footer'
import ProductCategory from './containers/product'
import ProductDetails from './containers/details'
import ShoppingBag from './containers/shoppingBagContainer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  return (
    <Router>
      <header>
        <Nav title='ShopOnline' navLink1='CLOTHES' navLink2='SHOES' bgColor='white' />
        <NewsBar />
      </header>
      <div className="App">
        <Switch>
          <Route path='/shoppingbag'>
            <ShoppingBag />
          </Route>
          <Route path='/item'>
            <ProductDetails />
          </Route>
          <Route path='/products'>
            <ProductCategory />
          </Route>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
      <Footer title='ShopOnline' />
    </Router>
  );
}
export default App;
