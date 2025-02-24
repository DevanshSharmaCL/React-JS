import React, { useState } from 'react'

function useForm(initialValues) {
    const [values, setValues]=useState(initialValues)

    const handleChange=(event)=>{
        const [name, value]=event.target
        setValues({...vales,[name]:value})//this will update the right field
    }

    const resetForm=()=>{
        setValues(initialValues);//this will reset the values of the form 
    }

    return {values,handleChange,resetForm};
}

//Using This custom hook in the component
function SignUpForm() {
    const { values, handleChange, resetForm } = useForm({
      name: '',
      email: '',
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', values);
      resetForm(); // Clear the form after submit
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    );
  }
 

export default FormHandlingHook