import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ elt }) {
  return (
    <Card style={{ width: "18rem" ,border: "1px solid black" }}>
      <Card.Body>
        <Card.Title>{elt.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
