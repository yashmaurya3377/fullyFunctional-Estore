import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import Login from './Pages/LoginPage';
import { AuthContext } from './Context/Auth'
import Cart from './Pages/Cart'
import OrderPage from './Pages/OrderPage';
import View from './Pages/View'
import Profile from './Pages/Profile'

function App() {

  const{user}=useContext(AuthContext)
  // console.log(user);
  
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={ user?<Navigate to={'/home'}/>: <Login/>} />
          <Route path='/Register' element={user?<Navigate to={'/home'}/>:<Register/>} />
          <Route path='/home' element={user?<HomePage/>:<Navigate to={'/'}/>} />
          <Route path='/cart' element={user?<Cart/>:<Navigate to={'/'}/>} />
          <Route path='/profile' element={user?<Profile/>:<Navigate to={'/'}/>} />
          <Route path='/product/:id' element={user?<View/>:<Navigate to={'/'}/>} />
          <Route path='/orders' element={user?<OrderPage/>:<Navigate to={'/'}/>} />
        </Routes>
      </BrowserRouter>
      <Toaster/>

    </>
  )
}

export default App
