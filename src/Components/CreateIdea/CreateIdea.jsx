import React, { useState } from 'react'
import "./CreateIdea.css"
import { useFormik } from "formik";
import {signUpSchema} from '../validation/Validation';
import CuzInput from '../CuzInput/CuzInput';

const CreateIdea = ({setToggle}) => {

    const initialValues = {
      summary: "",
      title: "",
      password: "",
      confirm_password: "",
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

    const[title, setTitle] = useState("");
    const[summary, setSummary] = useState("");
    const[description, setDescription] = useState("");
      
    
  return (
    <div >
        <div className='create-idea-main overlay'>
             
            <form className='create-idea-form' onSubmit={handleSubmit}>
                <div><div className='cancel' onClick={()=>setToggle(false)}>X</div></div>
                
                <div>
                    <label htmlFor="title" className="input-label">Title</label>
                    <input
                        type="text"
                        autoFocus
                        autoComplete="off"
                        name="title"
                        id="title"
                        placeholder="Enter Title"
                        value={values.email}
                        onChange={(e)=>{handleChange(e);setTitle(e.target.value)}}
                        onBlur={handleBlur}
                        style={errors.title && touched.title ?{borderColor:"red"}:{}}
                    />
                    {errors.title && touched.title ? (
                        <p className="form-error">{errors.title}</p>
                    ) : null}

                </div>
                <div>
                    <label htmlFor="summary" className="input-label">Summary</label>
                    <input type="text"
                        autoComplete="off"
                        name="summary"
                        id="summary"
                        placeholder="Enter Title"
                        value={values.summary}
                        onChange={(e)=>{handleChange(e);setSummary(e.target.value)}}
                        onBlur={handleBlur}
                        style={errors.summary && touched.summary ?{borderColor:"red"}:{}}
                    />
                    {errors.summary && touched.summary ? (
                        <p className="form-error">{errors.summary}</p>
                    ) : null}
                </div>
                <div>
                  <div className='asign'>
                    <div className='profile'></div>
                    <h4> Owener</h4>
                  </div>
                </div>
                <div>
                    <label htmlFor="email" className="input-label">Description</label>
                    <input />
                </div>
                <CuzInput/>
                <div><button className='submit' onClick={handleSubmit}></button></div>
            </form>
           
        </div>
    </div>
  )
}

export default CreateIdea;
