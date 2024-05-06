import React from 'react'
import STYLE from "./dashboard.module.css"
import Adminaside from './Adminaside'
import Adminmain from './Adminmain'

const Dashboard = () => {
  return (
    <div className={STYLE.dashboard}>
            <Adminaside/>
            <Adminmain/>
    </div>
  )
}

export default Dashboard
