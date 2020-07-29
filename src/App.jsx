import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCatfact } from './store/actions/catfact'
import CardFact from './components/CardFact'

class App extends Component {

  render() {
    return (
      <Container >
        <Row className={'header mt-3'}>
          <Col lg={10}>
            <h1>DESAFIO MOLA</h1>
          </Col>
          <Col>
            <Button onClick={this.props.getCatfact}>Carregar dados</Button>
          </Col>
        </Row>

        <Row>
          <Col className={'content mt-5'}>
            {this.props.catfact ? this.props.catfact.catfact.map(element => {
              return <CardFact catfact={element} key={element._id}></CardFact>
            }) : <h6>Nenhum dado para ser exibido...</h6>}
          </Col>
        </Row>
      </Container>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCatfact }, dispatch)
}

function mapStateToProps(state) {
  return {
    catfact: state.catfact
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

