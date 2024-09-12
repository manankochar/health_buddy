import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Logo from "../../assests/images/Logo.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import pattern from "../../assests/images/pattern.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signdata } from "../";


function SignInPage() {
  const Context = useContext(MyContext);

  const[isLoding,setIsLoding] = useState(false)
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let errorMsg = "";

      if (!formFields.email) {
      errorMsg = "Please Enter Email";
      isValid = false;
    } else if (!formFields.password) {
      errorMsg = "Please Enter Password";
      isValid = false;
    }

    if (!isValid) {
      Context.setAlertBox({
        error: true,
        msg: errorMsg,
        snackOpen: true,
      });
    }

    return isValid;
  };

 

  const onChangeInput = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

 
  const Login = async (e) => {
    e.preventDefault();
   console.log(formFields)
    if (validateForm()) {
      try {
        const data = await signdata("signin", formFields); // Using the modified signupUser function
        if (data.error) {
             
          Context.setAlertBox({
              error: true,               
              msg: data.msg,         
              snackOpen: true,           
          });

        }

        if (data && data.token) {
          setIsLoding(true)
          localStorage.setItem("token", data.token);
          const User = ({
            name:data.user?.name,
            email:data.user?.email,
            userId:data.user.id
          })

          localStorage.setItem("user",JSON.stringify(User));
         

          Context.setAlertBox({
            error: false,
            msg: "Login Sucessfully.",
            snackOpen: true,
          });

          setTimeout(() => {
            setIsLoding(false)
           window.location.href = "/"
          }, 1000);
          
        } else {
          console.error("No token received in the response");
        }
      } catch (error) {
        console.error("Signup failed:");
        let errorMsg = error || "Signup failed. Please try again.";
         
        Context.setAlertBox({
            error: true,
            msg: errorMsg,
            snackOpen: true,
        });
      }
    }
  };

  return (
    <>
    <img src={pattern} className="loginpattern" alt="img" />
    <section className="loginSection ">
      <div className="container">
      <div className="box card p-3 shadow border-0">
        <div className="text-center">
            <img src={Logo} style={{width:"40%"}}/>
        </div>

     

        <form onSubmit={Login}>
        <h2>Sign In</h2>
            <div className="form-group">
            <TextField id="standard-basic" label="Email" variant="standard" type="email" required className="w-100"
              autoFocus
              name="email"
              onChange={onChangeInput}/>
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
            <a className="border-effect Interfont">Forget Password?</a>
            <Button variant="contained w-100 mt-3 Signbtn" type="submit">Sign In</Button>
            <p className="Interfont mt-3">Not Registered <Link to= "/signup" className="border-effect">Sign Up</Link></p>
             
            <Button variant="contained w-100 mt-2 GoogltBtn"><FcGoogle className="mr-2" style={{fontSize:"20px "}}/> Continue With Google</Button>
          
        </form>
      </div>
      </div>
    </section>
    </>
  );
}

export default SignInPage;
