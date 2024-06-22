import React from 'react'
import SingleCard from '../components/SingleCard'
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import product from '../Data/Products'
import { ListGroup } from "react-bootstrap";
import { useContext, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Products = () => {
  const { totalItems } = useCart();
  const [query,setQuery] = useState("");
  const [state, setState] = useState(product);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data,setData] = useState(product);

  const filterResult = (catItem) =>{
    const result = product.filter((fdata)=>{
      return fdata.category === catItem;
    });
    setData(result);
  }
  return (
    <>

      
      {/* <button onClick={()=>{filterResult('chair')}}>Chairs</button>
          <button onClick={()=>{filterResult('lamp')}}>Lamps</button>
          <div className="row">
           {data.map((values)=>{
            const{title,price,img,id}= values;
            return (
              <div key={id} className="card" style={{width: '18rem'}}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
              </div>
            </div>
           )})}

          </div> */}

    <SingleCard/>
    </>
  )
}

export default Products