import React, { useState } from 'react'
import { addUSer } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
    const dispatch = useDispatch();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUSer({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Ad New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className='form-control' placeholder='entrer a name'
                            onChange={event => setname(event.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className='form-control' placeholder='entrer a email'
                            onChange={event => setemail(event.target.value)}
                        />
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Create