import "./App.css";
import { Index } from "./views/product/Index";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Home from "../src/views/Home"
import View  from "./components/product/View";
import  Header  from "../src/components/Header"
import Footer from "./components/Footer";
import ProductIndex from "./views/product/ProductIndex";

export function App() {

  return (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/:category">
          <Index />
        </Route>
        <Route path="/product/:product_id">
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


