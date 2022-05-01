import React from 'react'
import { UseAlert } from './AlertContext'


const UserButton = () => {
    const { toggle } = UseAlert()
    
    return (
        <div>
            <button type="button" className="btn btn-success" onClick={toggle}>Display alert</button>
        </div>
    )
}

export default UserButton