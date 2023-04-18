import React from 'react'
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";
function App() {
  return (
    <>
      <Container>
      <Row xs={1} md={2} lg={4}>
        <Col><Product/></Col>
        <Col><Product/></Col>
        <Col><Product/></Col>
        <Col><Product/></Col>
        <Col><Product/></Col>
        <Col><Product/></Col>
        <Col><Product/></Col>
        <Col><Product/></Col>
      </Row>
      </Container>
    </>
  )
}
export default App;
