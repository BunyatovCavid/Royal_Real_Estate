import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { items, removeWishlistItem, wishlistTotal, emptyWishlist, isWishlistEmpty } = useWishlist();
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
    const notify2 = () =>
    toast.success("Added To Cart", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    
    const { addItem } = useCart();
  const filteredItems = items.filter((wishlistItem, index, self) =>
    index === self.findIndex((item) => item.id === wishlistItem.id)
    
  );

  return (
    isWishlistEmpty ? (
      <div className="d-flex align-items-center justify-content-center">
        <img className="text-center" src="https://cdn.discordapp.com/attachments/1046180794676301857/1145082217178079362/output-onlinegiftools.gif" alt="err"/>
      </div>
    ) : 
    <Container>
      <div>
        <h1 className="text-center my-5">Wishlist </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Title</th>
              <th>Price</th>
              <th>Add</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                  <Link to={`/products/${item.id}`}>
                <img src={item.img} width={50} alt="" />
                      </Link>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}$</td>
                  <td> <Button className='mx-1' variant='warning' onClick={() => {
      addItem(item);
      notify2("Added to cart");
      removeWishlistItem(item.id);
    }} >
                        <i className='fa-solid fa-cart-arrow-down'></i>
                      </Button></td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        notify(removeWishlistItem(item.id));
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
            emptyWishlist();
          }}
          variant="danger"
        >
          Clear Wishlist
        </Button>
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

export default Wishlist;
