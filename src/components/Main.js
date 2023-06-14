import React from 'react'
import { Container, Button, Row, Col, Image, Card } from "react-bootstrap";
import { BrowserRouter as Link} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <h1 class="font-weight-light">The Best Place To </h1>
              <h1 class="font-weight-light">Find And Buy</h1>
              <h1 class="font-weight-light">Amazing Products</h1>
              <Link path="/product/:product_id"><Button variant="dark" class="">Shop now!</Button></Link>
            </Col>
            <Col sm={5}>
              <Image src="https://dummyimage.com/1000x600/a19ca1/fafafa.jpg&text=Example" 
              fluid
              rounded
              className="" 
              />
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-grey text-black my-5 py-4">
              <Card.Body>
                  Icons
              </Card.Body>
            </Card>
          </Row>
      </Container>
    </div>
  )
}

export default Main
