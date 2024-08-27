import React from 'react'
import Header from '../components/Header'

const Layout = ({ children }) => {

    return (
        <>
            {/* {user !== null ? <Header /> : null} */}
            <Header />
            {children}
        </>
    )
}

export default Layout