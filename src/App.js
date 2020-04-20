import React from 'react';
import './App.css';
import Nav from './components/header/Navbar'
import Footer from './components/footer/Footer'
import ProductsScreen from './screens/ProductsScreen'
import ProductCategory from './containers/product'
import ProductDetails from './containers/details'
import ShoppingBag from './containers/shoppingBagContainer'
import HomeScreen from './screens/HomeScreen.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './components/header/TopMenu';
import items from './components/header/menuitems.json'

function App() {
  return (
    <Router>
      <>
        <Nav title='FashionPoint' navLink1='CLOTHES' navLink2='SHOES' bgColor='white' />
        <TopMenu />

      </>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/shoppingbag' component={ShoppingBag} />
          <Route exact path='/item/:id/:title' component={ProductDetails} />
          {items.map(({ label, name, subItems, ...rest }) => (

            subItems.map((subItem) => (
              <Route path={`/sv-En/${name}/${subItem.name}`} key={subItem.name}
                render={(props) => <ProductsScreen {...props} name={name} sub={subItem.name} />} />
            ))
          ))}
        </Switch>
      </div>
      <Footer title='ShopOnline' />
    </Router>
  );
}
export default App;
