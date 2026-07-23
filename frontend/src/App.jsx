import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Addtour from './components/Addtour'
import Viewtour from './components/Viewtour'
import Tourdetails from './components/Tourdetails'
import Register from './components/Register'
import Login from './components/Login'
import Privateroute from './utils/Privateroute'



const App = () => {

  return( 
  <>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Register/>}></Route>
        <Route path = '/login' element = {<Login/>}></Route>

        <Route element={<Privateroute/>}>
          <Route path = '/home' element = {<Home />}></Route>
          <Route path = '/about' element = {<About />}></Route>
         <Route path = '/contact' element = {<Contact />}></Route>
          <Route path = "/add" element ={<Addtour />}></Route>
          <Route path = "/view" element ={<Viewtour />}></Route>
          <Route path = "/tour/:id" element ={<Tourdetails />}></Route>
        
        </Route>

        

      </Routes>
    </BrowserRouter>  


  </>
  );
}

export default App