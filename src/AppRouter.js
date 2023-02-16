import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataPage from './Component/DataPage'
import Login from './Component/Login'
import Sign from './Component/Sign'

function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Sign/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/data' element={<DataPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter
