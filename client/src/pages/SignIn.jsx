import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);

        try{

            const res = await fetch('api/auth/signin',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  
            })
    
            const data = await res.json();
            console.log(data);
            if(data.success === false){
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/');
        }
        catch(error){
            setLoading(false);
            setError(error.message);
        }

    }

  return (
    <div className = 'p-4 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold my-4 text-center'>Sign In </h1>
        <form onSubmit = {handleSubmit} className = 'flex flex-col gap-3'>
            <input type= "email" placeholder = "email" className = 'border p-3 rounded-lg' id = 'email' onChange = {handleChange}/>
            <input type= "password" placeholder = "password" className = 'border p-3 rounded-lg' id = 'password' onChange = {handleChange}/>
            <button className = 'bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-800 mt-2'>
                Sign In
            </button>
        </form>

        <div className = 'flex gap-1 mt-3'> 
            <p>
              Dont have an account?
            </p>
            <Link to = {'/sign-up'}>
              <span className = 'text-red-500 hover:text-slate-500'>Sign Up</span>
            </Link>
        </div>
        {error && <p className = 'text-red-500 mt-3'>{error}</p>}
    </div>
  )
}
