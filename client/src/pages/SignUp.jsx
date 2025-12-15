import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className = 'p-4 max-w-lg mx-auto'>
      <h1 className = 'text-3xl text-center font-semibold my-5'> Sign Up</h1>
      <form className = 'flex flex-col gap-4'>
        <input type="text" placeholder = 'username' className = 'border p-3 rounded-lg' id = 'username'/>
        <input type="email" placeholder = 'email' className = 'border p-3 rounded-lg' id = 'email'/>
        <input type="password" placeholder = 'password' className = 'border p-3 rounded-lg' id = 'password'/>
        <button className = 'bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-800'>
          Sign up
        </button>
      </form>
      <div className = 'flex gap-1 justify-center mt-3'> 
        <p>
          Have an account?
        </p>
        <Link to = {'/sign-in'}>
          <span className = 'text-red-500 hover:text-slate-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
