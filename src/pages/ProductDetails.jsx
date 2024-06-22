import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Data/Products';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import WishlistBtndes from '../components/WishlistBtndes';

const ProductDetails = () => {
  const notify = () =>
    toast.success('Product added to basket!', {
      position: 'bottom-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const productItem = productData.find((p) => p.id.toString() === id);
  const { addItem } = useCart();

  return (
    <>
      {productItem === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={productItem.img}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-white lh-1 mb-3">
                {productItem.title}
              </h1>
              <p className="lead">{productItem.brief}</p>
              <p
                className=" text-warning"
                style={{
                  fontWeight: 'bolder',
                  fontSize: '25px',
                }}
              >
                {productItem.price}$
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button
                  className="mx-1"
                  variant="warning"
                  onClick={() => {
                    addItem(productItem);
                    notify();
                  }}
                >Add To Cart <i className="fa-solid fa-cart-arrow-down"></i>
                </Button>
                <WishlistBtndes item={productItem} />
              </div>
            </div>
          </div>
          <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
