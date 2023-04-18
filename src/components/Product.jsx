import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Product() {
    return (
        <>
            <p></p>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKRRH--pDMGkWw1J5CJ9iNTBH7gksztdmqQ&usqp=CAU" />
                <Card.Body>
                    <h6>ID</h6>
                    <Card.Title>Hacker</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <p>price</p>
                    <div className="butto">
                        <div className="butto-1">
                            <Button variant="primary">By Coke</Button>
                        </div>
                        <div className="butto-2">
                            <Button>add to cart</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
