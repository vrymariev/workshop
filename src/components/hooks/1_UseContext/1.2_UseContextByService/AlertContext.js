import React, { useState } from 'react'

const AlertContext = React.createContext({
    visible: false,
    toggle: () => {}
})

export const UseAlert = () => {
    return React.useContext(AlertContext)
}

const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)

    const toggleShow = () => {
        setAlert(!alert)
    }

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle: toggleShow
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider