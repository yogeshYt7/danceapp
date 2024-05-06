import React, { useEffect, useState } from 'react' 
import STYLE from "./viewmanager.module.css"
import { Link } from 'react-router-dom'
import axiosInstance from '../../../../Helpers/axiosInstance'

const Viewmanager = () => {

  let token = sessionStorage.getItem("token")
  let [manager , setManager] = useState([])

    useEffect(()=>{
      let fetchData = async()=>{
          let {data} = await axiosInstance.get("/academymanagers/getall" , {
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
          setManager(data.data)
      }
      fetchData()
    },[])



  return (
    
    <div className={STYLE.mainblock}>
      
         {manager.map((x)=>{
            return (
              <div className={STYLE.container}>
                    <h2>{x.userName}</h2>
                    <button>
                      <Link to={`/dashboard/vieweachmanager/${x.id}`}>View</Link>
                    </button>
              </div>
            )
        })}

        
    </div>
    
  )
}

export default Viewmanager
