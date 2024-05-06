import React, { useState } from 'react'
import STYLE from "./admin.module.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axiosInstance from '../../Helpers/axiosInstance';
const Adminregister = () => {

        let navigate = useNavigate()
        let [userData, setUserData] = useState({
                userName: "",
                email: "",
                password: "",
                dob: "",
                phone: "",
                gender: ""
        })

        let data = (e) => {
                setUserData({ ...userData, [e.target.name]: e.target.value })
        }


        let handleRegister = (e) => {
                e.preventDefault();
                try {
                        axiosInstance.post("/admins/save", userData)
                        navigate("/login")
                        toast.success(`Admin ${userData.userName} registered successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }

        }

        return (
                <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleRegister}>
                                <h2>Register Admin</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={data} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="email">Email </label>
                                        <input type="email" id='email' name='email' onChange={data} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id='password' name='password' onChange={data} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" id='phone' name='phone' onChange={data} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="dob">DOB</label>
                                        <input type="date" id='dob' name='dob' onChange={data} />
                                </div>
                                <label htmlFor="gender">Gender</label>
                                <div className={STYLE.formitems} id={STYLE.gender}>
                                        <div>
                                                Male:  <input type="radio" name='gender' value={"male"} onChange={data} />
                                        </div>
                                        <div>
                                                Female : <input type="radio" name='gender' value={"female"} onChange={data} />
                                        </div>
                                </div>
                                <button className={STYLE.register}>Register</button>
                        </form>
                </div>
        )
}

export default Adminregister
