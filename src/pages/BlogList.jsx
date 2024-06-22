import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

const BlogList = () => {
    const blogdata = useSelector(state=>state.blog);
    return (
        <>
        <div className="position-relative blg">
  <div class="position-absolute top-50 start-50 translate-middle blgs">
  <h1 className='text-white'>Blogs</h1>
  </div>
  </div>
        <Container>
            <Row>
              {blogdata.map(item=>(
                  <Col key={item.id} sm={12} md={3}>
                  {/* ======================================================== */}
                  <Card className='my-5'>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.text} <Card.Link href="#">Read More</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
                  {/* ======================================================== */}
              </Col>
              ))}
              <Col sm={12} md={3}>
                  <Card className='my-5'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1613256168695-b13ed5ba9500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></Card.Img>
                      <Card.Body>
                          <LinkContainer to="/dashboard"><Button variant="primary">Add New Blog</Button></LinkContainer>
                      </Card.Body>
                  </Card>
              </Col>
            </Row>
        </Container>
        </>
    )
}

export default BlogList