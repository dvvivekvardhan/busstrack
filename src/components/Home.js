import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='main'>
          <div className='welcome'>
            <center><h1>WELLCOME TO</h1></center>
            <center><h2>BUSS TRACK</h2></center>
          </div>
          <div className='para'>
            
          </div>
          <div className='enter'>
          <Link to="/enter"><h2>ENTER HERE</h2></Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home