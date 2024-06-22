import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Successfull from "../components/Successfull";
const Basket = () => {
  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart, isEmpty } = useCart();
  const notify = () =>
    toast.error("Deleted!", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    isEmpty?<div className="d-flex align-items-center justify-content-center">
      <img className="text-center" src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif" alt="err"/>
    </div> :
    <Container>
      <div>
      <h1 className="text-center my-5">Cart </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, count) => {
            return (
              <tr>
                <td>{count + 1}</td>
                <td>
                <Link to={`/products/${item.id}`}>
                <img src={item.img} width={50} alt="" />
                      </Link>
                </td>
                <td>{item.title}</td>
                <td>{item.price * item.quantity}$</td>
                <td>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      notify(removeItem(item.id));
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        onClick={() => {
          emptyCart();
        }}
        variant="danger"
      >
        Clear Cart
      </Button>
      <Link to='/buy'><Button variant="success ms-5"  onClick={() => {
          emptyCart();
        }} >Buy Now</Button></Link>
      <h4>
        Total Price:<span className="text-danger">{cartTotal}$</span>
      </h4>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
    </Container>
  );
};

export default Basket;
