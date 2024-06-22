import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { removeBlog } from '../../manager/actionBlog';

const Dashboard = () => {
    const blogdata = useSelector(state=>state.blog);
    const dispatch = useDispatch();
    console.log(blogdata)
  return (
   <>
   <Container>
   <h1 className='my-5 text-center test'>Admin Panel</h1>
   <LinkContainer to="/admin/add"><Button variant='dark mb-3'>Add new blog</Button></LinkContainer>
   <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Image</th>
        <th>Text</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {blogdata.map((item,c)=>{
        return (
            <tr key={item.id}>
            <td>{c+1}</td>
            <td>{item.title}</td>
            <td><img src={item.img} alt="" style={{height:100}} /></td>
            <td>{item.text}</td>
            <td><LinkContainer to={`/admin/edit/${item.id}`}><Button variant='warning'>Edit</Button></LinkContainer></td>
            <td><Button variant='danger' onClick={()=>{dispatch(removeBlog({id:item.id}))}}>Delete</Button></td>
          </tr>
        )
    })}
     
   

    </tbody>
  </Table>
   </Container>
   </>
  )
}

export default Dashboard