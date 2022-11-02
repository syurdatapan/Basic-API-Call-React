import axios from 'axios'
import React, { useState, useEffect } from 'react'

function UserList({ setActiveUserID }) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <h4>User List</h4>

            <ul>
                {loading ? <p>Loading...</p> : users.map(user => <li key={user.id}
                    onClick={() => setActiveUserID(user.id)}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UserList