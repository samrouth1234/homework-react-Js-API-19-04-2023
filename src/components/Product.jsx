import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ id, title, description, images }) {
  return (
    <Card style={{ width: "18rem" }} className="my-2">
      <Card.Img variant="top" src={images ? images :"Unkown Image "} />
      <Card.Body>
        <Card.Title>{title ? title : " Unkown title "}</Card.Title>
        <Card.Text> { description ? description :" Unkown description "}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
