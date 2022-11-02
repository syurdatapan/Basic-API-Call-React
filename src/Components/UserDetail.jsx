import axios from 'axios';
import React, { useState, useEffect } from 'react'

function UserDetail({ activeUserID }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users/${activeUserID}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [activeUserID])


    return (
        <div>
            <h4>Details</h4>
            {loading && <p>Loading...</p>}
            {
                !loading &&
                <div>
                    {user && <p>{user.name}</p>}
                    {user && <p>{user.email}</p>}
                    {user && <p>{user.phone}</p>}
                    {user && <p>{user.website}</p>}
                </div>
            }
        </div>
    )
}

export default UserDetail