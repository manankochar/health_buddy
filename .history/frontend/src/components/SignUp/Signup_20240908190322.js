
import React, { useContext, useEffect } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import './signup.css';
import { signdata } from "../../uitils/api";

function SignUpPage() {
  

  const[isLoding,setIsLoding] = useState(false)
  const [formFields, setFormFields] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    age: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let errorMsg = "";

    if (!formFields.name) {
      errorMsg = "Please Enter User Name";
      isValid = false;
    } else if (!formFields.phone) {
      errorMsg = "Please Enter Contact Number ";
      isValid = false;
    } else if (!formFields.email) {
      errorMsg = "Please Enter Email";
      isValid = false;
    } else if (!formFields.password) {
      errorMsg = "Please Enter Password";
      isValid = false;
    }else if (!formFields.age) {
        errorMsg = "Please Enter your age";
        isValid = false;
      }

    if (!isValid) {
      console.log(errorMsg)
    }

    return isValid;
  };

 

  const onChangeInput = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

   const signUp = async (e) => {
    e.preventDefault();

    console.log(formFields)
    if (validateForm()) {
        try {
            const data = await signdata('/signup', formFields); // Using the modified signupUser function
     

            if (data) {
              setIsLoding(true)
              const User = ({
                name:data.user?.name,
                email:data.user?.email,
                userId:data.user.id
              })
    
              localStorage.setItem("user",JSON.stringify(User));
             
    
              setTimeout(() => {
               window.location.href = "/"
              }, 1000);

              setFormFields({
                name: "",
                phone: "",
                email: "",
                password: "",
                age:''
              });
            } else {
                console.error("No token received in the response");
            }
        } catch (errormsg) {
            console.log("Signup failed:", errormsg);
            
            let errorMsg = errormsg || "Signup failed. Please try again.";
            console.log(errorMsg)
         
        }
    }
};
 
  return (
    <>
      <section className="loginSection ">
        <div className="container">
          <div className="box card p-3 shadow border-0">
            <div className="text-center">
             
            </div>

            <form onSubmit={signUp}>
              <h2>Sign Up</h2>

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <TextField
                      label="Name"
                      variant="standard"
                      type="text"
                      required
                      className="w-100"
                      autoFocus
                      name="name"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <TextField
                      label="Contact No."
                      variant="standard"
                      type="text"
                      required
                      className="w-100"
                      name="phone"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <TextField
                  id="age-input"
                  label="Age"
                  variant="standard"
                  type="text"
                  required
                  className="w-100"
                  name="age"
                  onChange={onChangeInput}
                />
              </div>

              <div className="form-group">
                <TextField
                  id="email-input"
                  label="Email"
                  variant="standard"
                  type="email"
                  required
                  className="w-100"
                  name="email"
                  onChange={onChangeInput}
                />
              </div>

              <div
                className="form-group pasword"
                style={{ position: "relative" }}
              >
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  required
                  type={passwordVisible ? "text" : "password"}
                  className="w-100"
                  name="password"
                  onChange={onChangeInput}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "25px",
                    top: "20px",
                    cursor: "pointer",
                    color: "#999",
                  }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <Button
              className="py-1"
                variant="contained w-100 mt-2 Signbtn"
                type="submit"
                onClick={() => validateForm()}
              >{
                isLoding ===true ? <CircularProgress/> :  "Create Account"
              }
               
              </Button>
              <p className="Interfont mt-3">
                Already registered?{"  "}
                <Link to="/login" className="border-effect">
                  Login
                </Link>
              </p>

              <Button variant="contained w-100 mt-1 GoogltBtn">
                <FcGoogle className="mr-2" style={{ fontSize: "20px " }} />{" "}
                Continue With Google
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
