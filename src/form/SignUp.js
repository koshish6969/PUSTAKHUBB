import { useState } from "react";
import "./signup.css";
import FormInput from "../form/FormInput.js";
<<<<<<< HEAD
 

import {useNavigate} from 'react-router-dom'
=======
import HeaderTwo from "../HeaderTwo";
import Footer from "../Footer";

>>>>>>> d70f6057b2302529c9b40e622475ebcadb04e68a
const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
<<<<<<< HEAD
    ContactNo:"",
    password: "",
    confirmPassword: "",
  });
  const navigate=useNavigate();
=======
    contactno:"",
    password: "",
    confirmPassword: "",
  });
>>>>>>> d70f6057b2302529c9b40e622475ebcadb04e68a

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "ContactNo",
<<<<<<< HEAD
      type:"text",
=======
>>>>>>> d70f6057b2302529c9b40e622475ebcadb04e68a
      errorMessage:"Please enter valid phone number!",
      placeholder: "Contact No.",
      label: "ContactNo",
      pattern: "^[0-9]+$",
      required:true,
  

    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    const result = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type':'application/json',
          }
    });
    console.log(await result.json());
 
    if(result)
    {localStorage.setItem("username", JSON.stringify(result));
      navigate('/login');
    }
    
=======
  const handleSubmit = (e) => {
    e.preventDefault();
>>>>>>> d70f6057b2302529c9b40e622475ebcadb04e68a
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  // console.log(values);
=======
  console.log(values);
>>>>>>> d70f6057b2302529c9b40e622475ebcadb04e68a
  return (
    <>
  
    <div className="app">
    <h1 className="btn_reg">Register</h1>
      <form className="signup_f" onSubmit={handleSubmit}>
        
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button  className="btn_signup">Submit</button>
      </form>
    </div>
   
    </>
  );
};

export default SignUp;
