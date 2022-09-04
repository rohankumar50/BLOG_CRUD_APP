import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/features/PostSlice';
import Spinner from './Spinner';

const CreatePost = () => {
    const [values, setValues] = useState({ title: "", body: "" })
    const { title, body } = values
    const [showPost, setShowPost] = useState(false)
    const { loading, post } = useSelector(state => ({ ...state.app }))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost({ values }))
        setValues({ title: "", body: "" })
        setShowPost(true);
    }


    //show created post

    const showCreatedPost = () => {
        return (
            <>
                {
                    loading ? <Spinner /> : (
                        <>
                            <div class="card mt-4">
                                <div class="card-body">
                                    <h5 class="card-title">{post[0].title}</h5>
                                    <p class="card-text">{post[0].body}</p>
                                </div>
                            </div>
                        </>
                    )
                }
            </>
        )
    }

    return (
        <div className="row mt-4 d-flex align-items-center justify-content-center">
            <div className="col-md-6">
                <h1 className='text-center'>CREATE POST</h1>
                <form action=''>
                    <div className="mb-3 mt-4">
                        <input type="email" value={title} onChange={(e) => setValues({ ...values, title: e.target.value })} placeholder='Enter Post Title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <textarea value={body} onChange={(e) => setValues({ ...values, body: e.target.value })} placeholder='Enter Post Description' className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <button className="btn btn-primary"
                        onClick={() => navigate('/BLOG_CRUD_APP')}>Go Home</button>
                    <button type='submit'
                        className="btn btn-danger ms-4"
                        onClick={handleSubmit}>Submit</button>
                </form>
                <div className="mt-4">
                    {
                        showPost &&
                        <div>
                            <h5 className='text-center'>Woo new post created</h5>
                            {
                                showCreatedPost()
                            }
                            <p className='small mt-3 text-center fw-bold'>It's a free API it is not stored in any of the database, so after refresh data will be lost</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePost