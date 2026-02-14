import axios from 'axios';
import { useFormik } from 'formik'
import * as yup from 'yup'


export default function Rigester() {
  const Schema = yup.object({
  userName:yup.string().required(),
  email:yup.string().required().email(),
  password:yup.string().required().min(4).max(6)
});
  const formik = useFormik({
    initialValues:{
      userName:"",
      email:"",
      password:""
    },onSubmit:rigesterUser
    ,validationSchema:Schema
  })

async function rigesterUser(){
    const {data} = await axios.post('https://smartphone-store-1.onrender.com/auth/register',formik.values);
  console.log(data)

}
  return (
  <form className='d-flex flex-column justify-content-center  border border-2 p-4 mx-auto shadow p-3 mb-5 bg-body rounded' style={{ maxWidth: "500px" }} onSubmit={formik.handleSubmit}>
 <div className="form-floating mb-3">
    <input type="text" name="userName" value={formik.userName} onChange={formik.handleChange} className="form-control" id="floatingtext" placeholder="userName" />
    <label htmlFor="floatingInput">userName</label>
        {formik.errors.userName && formik.touched.userName?<div className='alert alert-danger'>{formik.errors.userName}</div>:null}

  </div>
  <div className="form-floating mb-3">
    <input type="email" name="email" value={formik.email} onChange={formik.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
    {formik.errors.email && formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" name="password" value={formik.password} onChange={formik.handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">Password</label>
    {formik.errors.password && formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:null}
  </div>
    <button type="submit" className="btn btn-dark mt-3">submit</button>
    



</form>

  )
}
