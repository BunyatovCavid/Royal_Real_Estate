import React from 'react'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <>
    <div className="position-relative cnt">
  <div class="position-absolute top-50 start-50 translate-middle cnts">
  <h1 className='text-white'>Contact</h1>
  </div>
  </div>
  
    <Container className="p-5 border-1 border my-5">
    <Row xs={1} md={2} className="g-4">
        <Col>
          <div className="form-floating">
  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
  <label htmlFor="floatingSelect">Works with selects</label>
</div>

<div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
  </div>
</div>

<div className="mb-3">
  <label htmlFor="formFile" className="form-label">Default file input example</label>
  <input className="form-control text-dark" type="file" id="formFile" />
</div>
        </Col>

        <Col className='my-5'>
        <h1 className='text-white'>Store Information</h1>
        <ul class="list-group">
  <li className="list-group-item bg-transparent">Decor
16, Main street 2nd floor
Paris, Hawaii 75002
United States</li>
  <li class="list-group-item bg-transparent">
Call us:
0102030405</li>
  <li class="list-group-item bg-transparent">
Email us:
demo@demo.com</li>
</ul>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Contact