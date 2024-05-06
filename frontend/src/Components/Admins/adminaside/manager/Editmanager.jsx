import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; 
import STYLE from "./editmanager.module.css"
import { toast } from 'react-toastify';
import axiosInstance from '../../../../Helpers/axiosInstance';


const Editmanager = () => {
 let token = sessionStorage.getItem("token")
let {id} = useParams()
let [manager , setManager] = useState({}) ; 


let [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: ""
})
 
let {userName , email , password , dob , phone , gender} = userData ; 

let data = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
}

useEffect(()=>{
    let fetchData = async()=>{
        let {data} = await axiosInstance.get(`/academymanagers/get/${id}` , {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        let finalData = await data.data ; 
        setUserData(finalData) ; 
        
    }
    fetchData()
},[])

let handleUpdate = (e) => {
    e.preventDefault();
    try {
            axiosInstance.put("/academymanagers/update", userData,{
                    headers : {
                                    Authorization : `Bearer ${token}`
                    }
            })
            window.location.assign("/dashboard/viewmanager")
            toast.success(`Updated ${userData.userName}  successfully !`)
    }
    catch (err) {
            console.log(err);
            alert("Fill the details properly")
    }

}


  return (
    <div className={STYLE.formholder}  >
    <form className={STYLE.form} action="" onSubmit={handleUpdate}>
            <h3>EDIT ACCADEMY MANAGER</h3>
            <div className={STYLE.formitems}>
                    <label htmlFor="username">Username </label>
                    <input type="text" id='username' name='userName' onChange={data} value={userName} />
            </div>
            <div className={STYLE.formitems}>
                    <label htmlFor="email">Email </label>
                    <input type="email" id='email' name='email' onChange={data} value={email}/>
            </div>
            <div className={STYLE.formitems}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' onChange={data} value={password} />
            </div>
            <div className={STYLE.formitems}>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id='phone' name='phone' onChange={data} value={phone} />
            </div>
            <div className={STYLE.formitems}>
                    <label htmlFor="dob">DOB</label>
                    <input type="date" id='dob' name='dob' onChange={data}  value={dob}/>
            </div>
            <label htmlFor="gender">Gender</label>
            <div className={STYLE.formitems} id={STYLE.gender}>
                    <div>
                            Male:  <input type="radio" name='gender' value={"male"} onChange={data}  />
                    </div>
                    <div>
                            Female : <input type="radio" name='gender' value={"female"} onChange={data} />
                    </div>
            </div>
            <button className={STYLE.register}>EDIT</button>
    </form>
</div>
  )
}

export default Editmanager
