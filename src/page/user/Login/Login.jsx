import axios from 'axios';
import { useFormik } from 'formik'
import { useContext, useState } from 'react';
import * as yup from 'yup'
import { UserContext } from '../../../context/user.jsx';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


export default function Login() {
  const{isUserName , setIsUserName} = useContext(UserContext);
  const navigate = useNavigate();
  const [IsError,setIsError] = useState("");
  const schema = yup.object({
    email:yup.string().required(),
    password:yup.string().required()

  })
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },onSubmit:userLogin
    ,validationSchema:schema
  });
const {isLogin , setIsLogin} = useContext(UserContext);

 async function userLogin(){
  try{
const {data}  = await axios.post('https://smartphone-store-1.onrender.com/auth/login',formik.values);
if(data.message == "success"){
  localStorage.setItem("userToken",data.token);
  setIsLogin(true);
  const decoded = jwtDecode(data.token);
  console.log(decoded);
  setIsUserName(decoded);
  navigate("/");
}}catch(errors){
  setIsError(errors.response.data.message);
}
console.log(data)
  }

  return (
   <form on onSubmit={formik.handleSubmit}>
   {IsError?<div className='alert alert-warning'>{IsError}</div>:null} 
  <div className="form-floating mb-3">  
    <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
    {formik.touched.email && formik.errors.email? <div className='alert alert-warning'>{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange}  className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">Password</label>
    {formik.touched.password && formik.errors.password? <div className='alert alert-warning'>{formik.errors.password}</div>:null}
  </div>
  <button type='submit' className='btn btn-dark mt-3'>submit</button>

</form>


  )
}
