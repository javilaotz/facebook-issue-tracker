import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Result = () => {
  return (
    <Container>
      <h1>Title</h1>
      <Row xs="4">
        <Col xs="8">Comments</Col>
        <Col>Details</Col>
      </Row>
    </Container>
  )
}

export default Result;

