import React from 'react'
import Button from 'react-bootstrap/Button';
function Product({ data }) {
    return (
        <>
            <div className="Product">
                <div>
                    <img src={data.images}></img>
                    <h2 >{data.title}</h2>
                    <p>{data.description}</p>    
                </div>
                <div className="btn">     
                    <Button>Buy</Button>
                    <Button>Add to cart</Button>
                </div>
            </div>
        </>
    )
}
export default Product;