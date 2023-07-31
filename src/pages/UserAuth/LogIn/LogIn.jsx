import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/userAuth/sing_up.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import useTitle from "../../../hook/useTittle";
import { ToastContainer } from 'react-toastify';
const LogIn = () => {
  //setTittle
  useTitle('Login')
    const [loginError,setLoginError]=useState("")
    const  {logInUser}=useContext(AuthContext)

    const navigate = useNavigate();
    const location=useLocation()

    let from = location.state?.from?.pathname || "/";

    const handelLoginUser=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setLoginError(" ")
        // user login 
        logInUser(email,password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
            form.reset()
            navigate(from, { replace: true })
            

        })
        .catch((error) => {
            const errorMessage = error.message;
            setLoginError(errorMessage)
          });
        

    }
    return (
        <div className="hero min-h-screen bg-white ">
           <ToastContainer />
        <div className="hero-content flex-col justify-between   lg:flex-row w-full">
          
          <div className="card md:mr-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <h1 className="text-2xl font-bold">Login </h1>
              <form onSubmit={handelLoginUser}>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                
                </div>
            
                <div className="mt-1">
              
                    <p className="text-error"> {loginError} </p>
                  </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-warning"
                    type="submit"
                    value="SingUP"
                  />
                </div>
              </form>
             
    
              <SocialLogin></SocialLogin>
    
              <p className="text-center">
                New user ?
                <Link to='/sing-up' className="text-orange-600 text-bold ms-2">
                  Register Here 
                </Link>
              </p>
            </div>
          </div>
          <div className="w-1/2 md:ml-10">
            <img src={logo} alt="logo not found" />
          </div>
        </div>
        </div>
    );
};

export default LogIn;