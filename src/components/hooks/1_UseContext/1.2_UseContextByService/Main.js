import React from 'react'
import Alert from './Alert'
import AlertProvider from './AlertContext'
import UserButton from './UserBtn'


export const Main = () => {
    return (
        <div>
            <AlertProvider>
                <h1>UseContext</h1>
                <Alert />
                <UserButton />
            </AlertProvider>
        </div>
    )
}