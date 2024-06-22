import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../Data/Products';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/sass/cardswiper.css';
import { EffectFlip, Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import WishlistBtn from './WishlistBtn';
import WishlistBtndes from './WishlistBtndes';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SingleCard = ({ img, title, id, alldata }) => {
  const [state, setState] = useState(product);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [minPrice, setMinPrice] = useState(3.00);
const [maxPrice, setMaxPrice] = useState(40.00);
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
  const filterProductsByCategory = (category) => {
    if (category === 'All') {
      setState(product);
    } else {
      const filteredProducts = product.filter(
        (item) =>
          item.category === category &&
          parseFloat(item.price) >= minPrice &&
          parseFloat(item.price) <= maxPrice
      );
      console.log('Filtered Products:', filteredProducts);
      setState(filteredProducts);
    }
    setSelectedCategory(category);
  };
  const dispatch = useDispatch();
  const { addItem } = useCart();

  return (
    <Container className='my-5'>
      {/* <div className='price-range'>
      <label>Price Range:</label>
      <input
        type='range'
        min='3.00'
        max='40.00'
        step='0.01'
        value={minPrice}
        onChange={(e) => setMinPrice(parseFloat(e.target.value))}
      />
      <input
        type='range'
        min='3.00'
        max='40.00'
        step='0.01'
        value={maxPrice}
        onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
      />
      <span>{minPrice} - {maxPrice}</span>
    </div> */}

      <div className='category-buttons mb-5 mx-5'>
        <div className="pls">
        <div className="nav">
  <input type="checkbox" />
  <span />
  <span />
  <div className="menu">
    <li><a href="#"><Button
  variant='outline-primary'
  className={selectedCategory === 'All' ? 'active' : ''}
  onClick={() => filterProductsByCategory('All')}
>
  All
</Button></a></li>
    <li><a href="#"><Button
  variant='outline-primary'
  className={selectedCategory === 'chair' ? 'active' : ''}
  onClick={() => filterProductsByCategory('chair')}
>
  Chair
</Button></a></li>
    <li><a href="#"><Button
          variant="outline-primary"
          className={selectedCategory === 'table' ? 'active' : ''}
          onClick={() => filterProductsByCategory('table')}
        >
          Table
        </Button></a></li>
    <li><a href="#"><Button
          variant="outline-primary"
          className={selectedCategory === 'sofa' ? 'active' : ''}
          onClick={() => filterProductsByCategory('sofa')}
        >
          Sofa
        </Button></a></li>
        <li><a href="#"><Button
          variant="outline-primary"
          className={selectedCategory === 'shelf' ? 'active' : ''}
          onClick={() => filterProductsByCategory('shelf')}
        >
          Shelf
        </Button></a></li>
    <li><a href="#"><Button variant='outline-primary' onClick={handleShow}>
        <i className="fa-solid fa-magnifying-glass"></i>
        </Button></a></li>
  </div>
</div>
        </div>
      </div>
      <Row className='g-5'>
        {state.map((item) => (
          <Col sm={6} md={3} key={item.id}>
            <Swiper
              data-aos='flip-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='1000'
              data-aos-once='true'
              effect={'flip'}
              grabCursor={true}
              navigation={true}
              modules={[EffectFlip, Navigation]}
              className='mySwiper'
            >
              <SwiperSlide style={{ height: 400 }} className='bg-none'>
                <Card className='procard' style={{ height: 425, width: 250 }}>
                  <Card.Img style={{ height: 300 }} variant='top' src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <WishlistBtn item={item} />

                    <Link to={`/products/${item.id}`}>
                      <Button className='mx-1' variant='outline-warning'>
                        İnfo
                      </Button>
                    </Link>
                    <Button
                      className='mx-1'
                      variant='outline-warning'
                      onClick={() => {
                        notify(addItem(item));
                      }}
                    >
                      <i className='fa-solid fa-cart-arrow-down'></i>
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide style={{ height: 400 }} className='bg-transparent'>
                <Container>
                  <Card style={{ height: 425, width: 250 }}>
                    <Card.Img src={item.img} />
                    <Card.ImgOverlay className='cardblur'>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.brief}</Card.Text>
                      <WishlistBtndes item={item} />
                      <Link to={`/products/${item.id}`}>
                        <Button className='mx-1' variant='warning'>
                          İnfo
                        </Button>
                      </Link>
                      <Button className='mx-1' variant='warning' onClick={() => addItem(item)}>
                        <i className='fa-solid fa-cart-arrow-down'></i>
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Container>
              </SwiperSlide>
            </Swiper>
          </Col>
        ))}
      </Row>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='input-group mb-3'>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Enter product'
              aria-label='Enter product'
              aria-describedby='button-addon2'
            />
            
          </div>
          
          <ListGroup>
            {query === ''
              ? null
              : product
                  .filter((q) => q.title.toLowerCase().includes(query))
                  .map((item) => (
                    <LinkContainer to={`/products/${item.id}`} key={item.id}>
                      <ListGroup.Item className='search-item'>{item.title}</ListGroup.Item>
                    </LinkContainer>
                  ))}
          </ListGroup>
        </Modal.Body>
      </Modal>


    </Container>
  );
};

export default SingleCard;
