import React from 'react'
import { UseAlert } from './AlertContext'

const Alert = () => {
    const { visible } = UseAlert()


    if (!visible)
        return null

    return (
        <div className='alert alert-danger'>
            Попередження!
        </div>
    )
}

export default Alert