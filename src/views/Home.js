import "../App.css";
import { Index } from "../views/product/Index";
import { Container, Navbar, Spinner, ButtonGroup, Button, Row, Col, Image, Card, ListGroup, InputGroup, Form} from "react-bootstrap";
import { useSelector } from "react-redux";
import { View } from "../components/product/View";
import  Header  from "../components/Header"
import Main from "../components/Main";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export function Home() {

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}


