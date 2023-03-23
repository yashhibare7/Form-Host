import { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email",
      required: true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password", 
      label:"Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  };

  return (
    <div className="app">
     <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/> 
      ))}
      <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
