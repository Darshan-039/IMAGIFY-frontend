import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GeneratedImages from './pages/GeneratedImages'


const App = () => {

  const { showLogin } = useContext(AppContext);

  return (
    <div className='flex flex-col px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right' />
      <Navbar />
      {showLogin && <Login />}

      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
          <Route path='/my-images' element={<GeneratedImages />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App


