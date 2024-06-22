import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../../../components/BlogForm';
import { editBlog } from '../../../manager/actionBlog';

const EditBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const blogdata = useSelector(state => state.blog); // Access the entire blog state
    const comingdata = blogdata.find(a => a.id.toString() === id);

    if (!comingdata) {
        return <div>No blog found with the specified ID</div>;
    }

    const handleFormSubmit = (params) => {
        dispatch(editBlog(comingdata.id, params));
        navigate('/admin');
    };

    return (
        <div>
            <h1 className='text-center'>Edit Blog</h1>
            <BlogForm
                editblog={comingdata}
                formSubmit={handleFormSubmit}
            />
        </div>
    );
}

export default EditBlog;
