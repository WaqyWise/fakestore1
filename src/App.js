import "./App.css";
import { Index } from "./views/product/Index";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Home from "../src/views/Home"
import View  from "../src/views/product/View"
import  Header  from "../src/components/Header"
import Footer from "./components/Footer";
import Cart from "./views/Cart";

export function App() {

  return (
  <Router>
    <div>
      <Header />
      <Switch>
      <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/:categoryName">
          <Index />
        </Route>
        <Route exact path="/product/:id">
          <View />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
        <Footer />
  </div>
</Router> 
  );
}


