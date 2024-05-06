import React from 'react'
import STYLE from "./home.module.css"
import VED from "../../Resources/mainved.mp4"
const Home = () => {
  return (
    <div className={STYLE.videoblock}>
        <video src={VED} autoPlay muted loop></video>
    </div>
  )
}

export default Home
