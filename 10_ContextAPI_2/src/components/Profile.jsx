import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            {!user ? <div> Please Login</div> : <div>Welcome {user}</div>}
        </div>
    )
}

export default Profile
