import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { updateUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Update() {
    const {id}=useParams();
    const users = useSelector((state) => state.users)
    const existingUser=users.filter(filter=>filter.id==id);
    const{name,email}=existingUser[0];
    const [names, setname] = useState(name);
    const [emails, setemail] = useState(email);
    const dispatch=useDispatch();
    const navigate = useNavigate()

    const handleUpdate=(event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:names,
            email:emails
            
        }))
        navigate('/')
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>               
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className='form-control' placeholder='entrer a name'
                        value={names} onChange={event => setname(event.target.value)}

                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className='form-control' placeholder='entrer a email'
                            value={emails} onChange={event => setemail(event.target.value)}
                        />
                    </div><br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )
}
export default Update