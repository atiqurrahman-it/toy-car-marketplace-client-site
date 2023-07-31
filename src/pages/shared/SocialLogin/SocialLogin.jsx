import { useContext, useState } from "react";
import { FaGooglePlusG ,FaGithub} from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const [error,setError]=useState('')

    const {loginWithGoogle,loginWithGitHub}=useContext(AuthContext)

    
    const navigate = useNavigate();
    const location=useLocation()

    let from = location.state?.from?.pathname || "/";

    const handelGoogleLogin=()=>{
        setError(" ")
        
        loginWithGoogle()
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch((error)=>{
            const message=error.message
            console.log(message)
            setError(message)
        })
    }


    const handelGitHubLogin=()=>{
        loginWithGitHub()
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch((error)=>{
            const message=error.message
            console.log(message)
            setError(message)
        })
    }

    return (
        <div>
            <p className="text-danger"> {error} </p>
        <div className="divider">OR</div>
        <div className="text-center">
          <button
            onClick={handelGoogleLogin}
            className="btn btn-circle btn-outline btn-warning mr-2">
               <FaGooglePlusG className="text-2xl"/>
          </button>

          <button
            onClick={handelGitHubLogin}
            className="btn btn-circle btn-outline btn-warning">
               <FaGithub className="text-2xl"/>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;