import React from 'react'
import { Link } from 'react-router-dom'
import STYLE from "./dashboard.module.css"
const Adminaside = () => {
  return (
    <div className={STYLE.adminaside}>
      <h3>ADMIN DASHBOARD</h3>
      <ul>
        <li>
            <Link to={"/dashboard/addaccmanager"}>ADD ACCADEMY MANAGER</Link>
        </li>
        <li> 
            <Link to={"/dashboard/viewmanager"}>VIEW MANAGER</Link>
        </li>
        <li>
            <Link>VIEW ACCADEMY</Link>
        </li>
        <li>
            <Link>VIEW BRANCH</Link>
        </li>
        <li>
            <Link>VIEW COURSE</Link>
        </li>
      </ul>
    </div>
  )
}

export default Adminaside
