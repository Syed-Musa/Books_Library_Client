/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ExtraSignIn from "./ExtraSignIn";


const SignIn = () => {
    const {signInUser} = useAuth();
    const [showPassword, setShowPassWord] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);
  
    const handleLogin = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log( email, password);
  
        setErrorMessage(null);
        setSuccess(null);
        if(password.length > 6){
          setErrorMessage('Password should have at least 6 character');
          return;
        }else if(!/[A-Z]/.test(password)){
          setErrorMessage('Password should have at least one uppercase');
          return;
        }
  
        signInUser( email, password)
        .then(result => {
          console.log(result.user);
          setSuccess('Created message Successfully');
        })
        .catch(error =>{
          console.error(error);
          setErrorMessage(error.message)
        })
  
    }
  
    return (
      <div className="max-w-7xl mx-auto flex" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <div className="hero">
          <div className="hero-content flex-col ">
            
            <div className="card flex-shrink-0 w-full max-w-sm">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold font-serif italic">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email address"
                    className="input input-bordered"
                    required
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold font-serif italic">Password</span>
                  </label>
                  <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  </div>
                  <span className="absolute text-2xl top-[170px] right-10" onClick={()=>setShowPassWord(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                  </span>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-purple-500 font-bold uppercase font-serif italic text-white">login</button>
                </div>
                <div className="text-center">
                  <p className="font-bold font-serif">Don't have an account please <Link className="text-sky-600 font-bold uppercase" to='/signup'>Sign Up</Link> Page</p>
                </div>
                <ExtraSignIn></ExtraSignIn>
              </form>
              {
                errorMessage && <p className="text-red-600 italic font-bold mb-10 text-center">{errorMessage}</p>
              }
              {
                success && <p className="text-green-600 italic font-bold mb-10 text-center">{success}</p>
              }
            </div>
          </div>
        </div>
        <img className="w-3/5" src="../../../public/Images/login.jpg.jpg" alt="" />
      </div>
    );
  };
  
  export default SignIn;