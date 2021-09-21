import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/main-components/Footer';
import Header from './components/main-components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <BrowserRouter>
        <CartProvider>
        <Header/>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <Footer/>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;