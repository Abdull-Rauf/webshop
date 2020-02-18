import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import NewsBar from './components/NewsBar'
import Footer from './components/Footer'
import Product from './containers/product/product'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetailsScreen from './screens/ProductDetailsScreen';




function App() {

  return (
    <Router>
      <header>
        <Nav title='ShopOnline' navLink1='CLOTHES' navLink2='SHOES' bgColor='white' />
        <NewsBar />
      </header>
      <div className="App">
        <Switch>
          <Route path='/productdetails'>
            <ProductDetailsScreen />
          </Route>
          <Route path='/products'>
            <Product />
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
