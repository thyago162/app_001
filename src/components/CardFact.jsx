import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

function CardFact(props) {
    return (
        <Card className={'card mb-5'} >
            <Card.Header>
                <Card.Title>{props.catfact.text}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Text>
                                Nome: {props.catfact.user ? props.catfact.user.name.first : ''}
                                <span className={'ml-1'}> {props.catfact.user ? props.catfact.user.name.last : ''}</span>
                            </Card.Text>

                        </Col>
                    </Row>
                    <Row>
                        <Col><Card.Text>Categoria: {props.catfact.type}</Card.Text></Col>
                        <Col><Card.Text>Votos: {props.catfact.upvotes} </Card.Text></Col>
                    </Row>

                </Container>
            </Card.Body>
        </Card>
    )
}

export default CardFact
