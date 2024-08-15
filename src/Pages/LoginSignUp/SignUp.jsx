import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const SignUp = () => {
  const {createUser} = useAuth();
  const [showPassword, setShowPassWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const handleRegistration = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

      setErrorMessage(null);
      setSuccess(null);
      if(password.length > 6){
        setErrorMessage('Password should have at least 6 character');
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password should have at least one uppercase');
        return;
      }

      createUser( email, password)
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
      <div className="grid grid-cols-1 lg:grid-cols-2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <img className="w-5/6" src="../../../public/Images/login.jpg.jpg" alt="" />
        <div className="hero">
          <div className="hero-content">
            
            <div className="card flex-shrink-0 w-full max-w-sm">
              <form onSubmit={handleRegistration} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold font-serif italic">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input input-bordered"
                    required
                  />
                </div>
  
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
                  <span className="absolute text-2xl top-[260px] right-10" onClick={()=>setShowPassWord(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                  </span>
                  
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold font-serif italic">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-purple-500 font-bold uppercase font-serif italic text-white">sign up</button>
                </div>
                <div className="text-center">
                  <p className="font-bold font-serif">Go to <Link className="text-sky-600 font-bold uppercase" to='/login'>Login</Link> Page</p>
                </div>
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
      </div>
    );
  };
  
  export default SignUp;