import React from 'react'
import STYLE from "./dashboard.module.css"
import { Outlet } from 'react-router-dom'

const Adminmain = () => {
  return (
    <div className={STYLE.adminmain}>
          <Outlet/>
    </div>
  )
}

export default Adminmain
