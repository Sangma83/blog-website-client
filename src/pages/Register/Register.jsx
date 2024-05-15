import { Link, useLocation, useNavigate } from "react-router-dom";
import registerPic from '../../assets/reg.jpg';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {
   const { createUser } = useContext(AuthContext);
   const [registerError, setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();


    const handleRegister =  event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        // Reset error
        setRegisterError('');
        // Set success message to empty
        setSuccess('');

        // Password validation
        if(password.length < 6){
          setRegisterError();
          toast.error("Password should be at least 6 characters or longer!");
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError();
          toast.error("Password should contain at least one uppercase letter!");
          return;
        }
        else if(!/[a-z]/.test(password)){
          setRegisterError();
          toast.error("Password should contain at least one lowercase letter!");
          return;
        }
        else if(!/[0-9]/.test(password)){
          setRegisterError();
          toast.error("Password should contain at least one numeric character!");
          return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
          setRegisterError();
          toast.error("Password should contain at least one special character!");
          return;
        }

        // Create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess();
            toast.success("Registration Successful!");
            
            // Navigate after register
            setTimeout(() =>{
                navigate(location?.state ? location.state : '/login'); 
            }, 2000);
            
        })
        .catch(error =>{
            console.error(error);
            setRegisterError();
            toast.error("Email is already in use!");
        });
    }

    return (
        <div>
            <Helmet>
                <title>TravelTime || Register</title>
            </Helmet>
           
            <div className="hero min-h-screen my-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold ml-20 lg:ml-72 mb-10 text-cyan-700">Register here!</h1>
                        <img className="w-[600px] ml-28 lg:ml-20 mt-8" src={registerPic} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 lg:ml-28">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <div className="relative">
                                        <span className="absolute top-8 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                            { showPassword ? <FaEyeSlash /> : <FaEye /> }
                                        </span>
                                    </div>
                                </label>
                                <input 
                                    type={showPassword ? "text" : "password" }
                                    placeholder="password" 
                                    name="password" 
                                    className="input input-bordered" required 
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <br />
                               <div className="mb-2 items-center">
                               <input type="checkbox" name="terms" id="terms" />
                              <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms & Conditions</a>
                               </label>
                               </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register <ToastContainer /></button>
                            </div>
                            <p className="text-center mt-4">Already Have an account? <Link className="text-purple-800 font-bold" to='/login'>Login</Link></p>
                        </form>
                        {
                            registerError && <p className="text-red-500 text-center">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-500 text-center">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
