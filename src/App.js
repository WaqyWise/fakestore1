import "./App.css";
import { Index } from "./views/product/Index";
import { Container, Navbar, Spinner, ButtonGroup, Button, Row, Col, Image, Card, ListGroup, InputGroup, Form} from "react-bootstrap";
import { useSelector } from "react-redux";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Home} from "../src/views/Home"
import { View } from "./components/product/View";
import  Header  from "../src/components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";

export function App() {

  return (
    <Router>
    <div>
      <Link to="/"><Header /></Link>
      <Main />
      <Link to="/:category"><Index class="py-5"/></Link>
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


