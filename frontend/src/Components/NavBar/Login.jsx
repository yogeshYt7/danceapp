import React, { useState } from 'react'
import STYLE from "./login.module.css"
import axiosInstance from '../../Helpers/axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate =useNavigate()
  let [toggle , setToggle] = useState(false)
  let passIcon = ()=>{
      if(toggle)
      {
        setToggle(false)
      }
      else
      {
        setToggle(true)
      }
  }
  
  let [userAuth , setUserAuth]  = useState({
    userEmail : "" , 
    password : ""
  })

  let handleLogin = async  (e)=>{
           e.preventDefault()
          try{
            let payload = userAuth ;
            let {data} = await axiosInstance.post("/authenticate" , payload)
            sessionStorage.setItem("token" , data.token)
            sessionStorage.setItem("role" , data.role)
            sessionStorage.setItem("useremail" , userAuth.userEmail)
            toast.success(`${userAuth.userEmail} logged in ` )
            window.location.assign("/")
          }
          catch(err)
          {
            toast.error("invalid credentials")
          }
  }


  return (
    <div className={STYLE.formholder} onSubmit={handleLogin}>
          <form action="" className={STYLE.form}>
            <h2>Login</h2>
            <div className={STYLE.formitem}>
              <label htmlFor="useremail">Email</label>
              <input type="email" id='useremail' name='userEmail' onChange={(e)=>{
                  setUserAuth({...userAuth , [e.target.name] : e.target.value})
              }}   />
            </div>
            <div className={STYLE.formitem}>
              <label htmlFor="password">Password</label>
                <div className={STYLE.pass}>
                <input type={toggle? "text" : "password"} id='password' name='password' onChange={(e)=>{
                  setUserAuth({...userAuth  , [e.target.name] : e.target.value})
                }} />
                {toggle ? 
                  <img onClick={passIcon} src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png" alt="" />
                  :
                  <img onClick={passIcon} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699007-icon-21-eye-hidden-512.png" alt="" />
                }
                </div>
            </div>
            <button className={STYLE.login}>LOGIN</button>
          </form>
    </div>
  )
}

export default Login
