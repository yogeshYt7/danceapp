import React, { useState } from 'react'
// import STYLE from "./addacademymanager.module.csss";
import STYLE from "./addacademymanager.module.css";

import axiosInstance from '../../../../Helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Addaccmanager = () => {

        let token = sessionStorage.getItem("token")
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
                        axiosInstance.post("/academymanagers/save", userData,{
                                headers : {
                                                Authorization : `Bearer ${token}`
                                }
                        })
                        window.location.assign("/dashboard/viewmanager")
                        toast.success(`Added ${userData.userName}  successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }

        }

        return (
                <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleRegister}>
                                <h3>ADD ACCADEMY MANAGER</h3>
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
                                <button className={STYLE.register}>ADD</button>
                        </form>
                </div>
        )
}

export default Addaccmanager
