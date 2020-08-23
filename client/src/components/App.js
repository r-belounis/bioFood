import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import Navigation from './navigation/Navigation'
import Home from './homepage/Homepage'
import Products from  './products/Products'

class App extends Component {

  render() {
    return(
      <Container fluid={true}>
        <Navigation />
        <Switch>
          <Row className="justify-content-center mt-3" noGutters={true}>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
              {/* <Route path="/accountUser" component={AccountUser}/> */}
          </Row>
        </Switch>
      </Container>
    )
  }
}

export default App;