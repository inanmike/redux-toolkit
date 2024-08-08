import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice';

function UserList() {

    const dispatch  = useDispatch();

    const {users} = useSelector(store => store.user)
    
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

  return (
    <div>
        <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList