import "./App.css";
import { Index } from "./views/product/Index";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import  Home from "../src/views/Home"
import View  from "./components/product/View";
import  Header  from "../src/components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";

export function App() {

  return (
    <Router>
    <div>
      <Header />
      <Main />
      <Index class="py-5"/>
      <Footer />
    </div>
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
    </Router>
  );
}


