import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/user.jsx'

export default function Navbar() {
  const {isLogin,setIsLogin} = useContext(UserContext);
   const{isUserName , setIsUserName} = useContext(UserContext);
  const navigate = useNavigate();
  const handelLogOute = ()=>{
    localStorage.removeItem("userToken");
    setIsUserName({});
    setIsLogin(false);
    navigate("/Login")

  }
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm  mb-3 py-3">
  <div className="container-fluid">
    <a className="navbar-brand  fw-bold fs-4" href="#">MyApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {
        isLogin?
        <>
        <li className="nav-item ">
          <Link className="nav-link active fw-bold fs-5" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item w-50">
          <button className=" btn btn-outline-light rounded-pill px-4 fw-bold fs-5 " aria-current="page" onClick={handelLogOute}>logOut</button>
        </li>
        </>
        :
        <>
        
         <li className="nav-item">
          <Link className="nav-link active fw-bold fs-5" aria-current="page" to={"/Login"}>Login</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active fw-bold fs-5" aria-current="page" to={"/Rigester"}>Rigester</Link>
        </li>
        </>
      }
        
        
        
      </ul>
      
    </div>
  </div>
</nav>

  )
}
