/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../providers/AuthProvider';

const SignIn = () => {

    const { googleSignIn, signInUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // google sign up
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    // sign in user
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    if ((email, password)) {
        signInUser(email, password)
      .then((result) => {            
          // navigate after login
          navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
          // setError(error.message)
          setError('Invalid email or password')
      });
    }
    else {
        // setError(error.message)
        setError('Invalid email or password')
    }
  }

  return (
    <div>
        <div className="py-20">
        <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
            <h2 className="text-2xl font-bold text-center mb-3">
            Sign in
            </h2>
            <p className='text-center text-xs font-medium text-zinc-500 mb-5'>Welcome back! Please sign in to your account.</p>
            <div className="form-control my-6">
                <button onClick={handleGoogleSignIn} className="shadow bg-white p-3 w-full rounded-md font-semibold text-sm flex justify-center items-center gap-4">
                <i className='text-lg'><FcGoogle></FcGoogle></i>
                <p>Continue with Google</p>
                </button>
            </div>
            <form onSubmit={handleSignIn}>
            <div className="divider text-sm font-semibold">or</div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-semibold">Email</span>
                </label>
                <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
                />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-semibold">Password</span>
                </label>
                <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
                />
            </div>
            <p className='mt-2 text-xs text-red-600 font-semibold'>{error}</p>
            <div className="form-control my-6">
                <button type='submit' className="bg-[#F44545] p-3 w-full rounded-md text-white font-semibold text-sm">
                SIGN IN
                </button>
            </div>
            <p className="text-[#706F6F] text-center text-xs font-semibold">
                Don’t have an account?{" "}
                <Link to="/signup">
                <span className="text-[#F44545]">Sign up</span>
                </Link>
            </p>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignIn
