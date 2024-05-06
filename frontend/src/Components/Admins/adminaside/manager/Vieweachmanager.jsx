import React, { useEffect, useState } from 'react' 
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../../../../Helpers/axiosInstance'

const Vieweachmanager = () => {

    let token = sessionStorage.getItem("token")
    let {id} = useParams()
    let [manager , setManager] = useState({}) ; 

    useEffect(()=>{
        let fetchData = async()=>{
            let {data} = await axiosInstance.get(`/academymanagers/get/${id}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            let finalData = await data.data ; 
            console.log(finalData);
            setManager(finalData) ; 
        }
        fetchData()
    },[])


    let handleDelete = ()=>{
                  let data =   axiosInstance.delete(`/academymanagers/delete/${id}` , {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                  })
                  console.log(data);
                    window.location.assign("/dashboard/viewmanager")
    }



  return (
    <div>
            <h1>{manager.userName}</h1>
            <button>
                <Link to={`/dashboard/editmanager/${manager.id}`}>EDIT</Link>
            </button>
            <button>ADD ACADEMY </button>
            <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default Vieweachmanager
