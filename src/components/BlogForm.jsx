import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const BlogForm = ({formSubmit,editblog}) => {
  const [title,setTitle] = useState(editblog?editblog.title:'');
  const [text,setText] = useState(editblog?editblog.text:'');
  const [img,setImg] = useState(editblog?editblog.img:'');

  
  const blogSubmited =e=>{
      e.preventDefault();
      formSubmit({
        title:title,
        text:text,
        img:img
      })


  }
  
  return (
  <div className="d-flex justify-content-center">
     <Col md={6}>
     <Form onSubmit={blogSubmited}>
    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control value={title} type="text" placeholder="Enter title" onChange={e=>{setTitle(e.target.value)}}/>
  
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Text</Form.Label>
      <Form.Control value={text} as="textarea" placeholder="Enter text" onChange={e=>{setText(e.target.value)}}/>
    </Form.Group>

    <Form.Group className='mb-3'>
      <Form.Label>Image Adress</Form.Label><br/>
      <Col xl={6} md={4} className='mb-2' >
          <Image src={img} thumbnail alt='Please Enter a Proper Image adress...' />
        </Col>
      <Form.Control value={img} type='text' placeholder='Enter an image adress' onChange={e=>{setImg(e.target.value)}}></Form.Control>
    </Form.Group>

    <Button variant="primary" type="submit">
     {editblog?"Edit":"Add"} 
    </Button>
  </Form>
   </Col>
  </div>
  )
}

export default BlogForm



