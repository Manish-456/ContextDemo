import React, {  useState } from 'react'
import  { useUserContext } from "./context/LogContext";
const Form = () => {
  const initialValue = {username: "",  password:""}
  const [formValue, setFormValue] = useState(initialValue)
  const [formError, setFormError] = useState({})
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const {logIn} = useUserContext();
  const onChangeHandler = (e) => {
  const {name, value} = e.target
 
  setFormValue({ ...formValue , [name] : value})

  }
  
  const submitHandler = (e) => {
   setFormError(validation(formValue))
    e.preventDefault()
    // setIsSubmitted(true)
    logIn(formValue.username)
    
   
  }
 const validation = (values) => {
  let error = {}

 if (!values.username){
 error.username = "Username is required"
  
 }
 
 if(!values.password){
  error.password = "Password is required"
 }else if(values.password.length < 5){
  error.password = "Password must be of atleast 5 characters "
 }
 return error;
 }

  return (
    <div>
   
      <div className="container mt-4 border border-dark">

        <h1>Log In</h1>
 
       <form onSubmit={submitHandler}>
  <div className="mb-3">
    <label >Username </label>
    <input type="text" className="form-control" value={formValue.username} name="username" placeholder='username' onChange={onChangeHandler} required/>
    <p className='text-danger'>{formError.username}</p>
  </div>

  <div className="mb-3">
    <label>Password</label>
    <input type="password" className="form-control" name="password"
         autoComplete='on'     placeholder="Password" value={formValue.password} onChange={onChangeHandler} required/>
   <p className='text-danger'>{formError.password}</p>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
      </div>
    </div>
  )
}

export default Form
