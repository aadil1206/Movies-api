import React, {useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik, Form, ErrorMessage,Field } from "formik";
import * as Yup from "yup";


import { useLocalStorage } from "./LocalSrorage";

const Screen2 = () => {
  const location=useLocation();
  const navigate=useNavigate()
  const[open,setopen]=useState(false)
    // console.log("location.state",location.state)
    const summary=location.state.summary.replace(/<[^>]*>/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
    const name=location.state.name;
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      mobileNumber: Yup.string()
      .matches(/^[1-9]{1}[0-9]{6,}/, "Mobile Number must be a valid  number")
        .required('Mobile number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
     
    });
const {setItem} =useLocalStorage('values');
  return (
    <div className='p-2 d-flex flex-column justify-content-center align-items-center'>

      <p>{summary}</p>
      <button className='c1 d-flex justify-content-center col-3'
           onClick={()=>setopen(!open)} >
             Book Ticket
            </button>
            <p style={{color:"blue"}}>{name}</p>
            {
open?   <div className="col-6">
    <Formik 
      initialValues={{
        name: "",
        mobileNumber:  "",
        email: ""
       
      }}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        setItem(values)
         
        
      }}    >
           {({
                      values,
                      
                      handleBlur,
                      handleChange,
                     
                    })=>(
      <Form>
        <div className="col-12 rounded-2 bg-white p-4">
          <div className="row justify-content-between">
            <div className="col-12 mt-3 flex-column d-flex c100">
              <label htmlFor="name">Your Name</label>
              
              <Field id="outlined-basic" label="Enter here" variant="outlined"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name" />
              <ErrorMessage
                name="name"
                component="div"
              
               
                className="error-message"
              />
            </div>
            <div className="col-12 mt-3 flex-column d-flex c100">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <Field id="outlined-basic" label="Enter Mobile No. here" variant="outlined" name="mobileNumber" type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobileNumber}/>
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="error-message"
                
               
              />
            </div>
            <div className="col-12 mt-3 flex-column d-flex c100">
              <label htmlFor="email">Email Address</label>
              <Field id="outlined-basic" label="Enter email here" variant="outlined"  name="email" type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}/>
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
                
               
              />
            </div>
          </div>
        
         
         
          <button variant="contained" type="submit">
      Submit
    </button>
        </div>
      </Form>
                    )}</Formik>
  </div>:""
            }
    </div>
  )
}

export default Screen2
