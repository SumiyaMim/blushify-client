/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const { googleSignIn, createUser, handleUpdateProfile, signOutUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // google sign up
    const handleGoogleSignUp = () => {
        googleSignIn()
        .then((result) => {
            navigate('/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    // create user
    const handleCreateUser = (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const photo = e.target.photo.value;
      const password = e.target.password.value;
      // console.log(name, email, photo, password);

      if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
        setError('Password must be 6 characters with a capital letter and a special character.')
      }
      else {
        setError("");
        createUser(email, password).then((result) => {
            handleUpdateProfile(name, photo)
            .then((result) => {
              signOutUser(); 
              navigate('/signin');
            })
            .catch((error) => {
              console.error(error);
            })
        });
      }
    }


  return (
    <div>
        <div className="py-20">
        <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
            <h2 className="text-2xl font-bold text-center mb-3">
            Create Account
            </h2>
            <p className='text-center text-xs font-medium text-zinc-500 mb-5'>Start your journey: sign up and join today.</p>
            <div className="form-control my-6">
                <button onClick={handleGoogleSignUp} className="shadow bg-white p-3 w-full rounded-md font-semibold text-sm flex justify-center items-center gap-4">
                <i className='text-lg'><FcGoogle></FcGoogle></i>
                <p>Continue with Google</p>
                </button>
            </div>
            <form onSubmit={handleCreateUser}>
            <div className="divider text-sm font-semibold">or</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
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
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
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
                SIGN UP
                </button>
            </div>
            <p className="text-[#706F6F] text-center text-xs font-semibold">
                Already have an account?{" "}
                <Link to="/signin">
                <span className="text-[#F44545]">Sign in</span>
                </Link>
            </p>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignUp
