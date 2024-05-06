import React from 'react'
// import "./global.css"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Admins/Dashboard'
import Adminprotectedroute from "./ServiceRoute/Adminprotectedroute"
import Footer from './Components/Footer/Footer'
import Editmanager from './Components/Admins/adminaside/manager/Editmanager'
import Nav from './Components/NavBar/Nav';
import Home from './Components/NavBar/Home';
import Login from './Components/NavBar/Login';
import About from './Components/NavBar/About';
import Register from './Components/NavBar/Register';
import Adminregister from './Components/NavBar/Adminregister';
import Pagenotfound from './Components/NavBar/PageNotfound';
import Viewmanager from './Components/Admins/adminaside/manager/Viewmanager';
import Vieweachmanager from './Components/Admins/adminaside/manager/Vieweachmanager';
import AddAcademymanager from './Components/Admins/adminaside/manager/AddAcademymanager';
const App = () => {
  return (
        <>
        <Router>
           <ToastContainer />
           <Nav/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/adminregister' element={<Adminregister/>}/>
              <Route path='*'  element={<Pagenotfound/>}/>

               {/* Admin routes */}
               <Route path='/dashboard' 
               element={<Adminprotectedroute>
                           <Dashboard/>
                        </Adminprotectedroute>}>
               <Route path='/dashboard/addaccmanager' element={<AddAcademymanager/>}/>
               <Route path='/dashboard/viewmanager' element={<Viewmanager/>}/>
               <Route path='/dashboard/vieweachmanager/:id' element={<Vieweachmanager/>}/>
               <Route path='/dashboard/editmanager/:id' element={<Editmanager/>}/>
               </Route>
                  


           </Routes>
        </Router>
        <Footer/></>
  )
}

export default App
