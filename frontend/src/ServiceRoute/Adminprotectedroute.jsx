import React from 'react'

const Adminprotectedroute = ({children}) => {
    
    let role = sessionStorage.getItem("role")
    if(role==="ROLE_ADMIN")
    {
        return <>{children}</>
    }
    else
    {
        alert("please login as ADMIN !")
    }


}

export default Adminprotectedroute
