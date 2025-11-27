import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        console.log('After register', data);
        registerUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
           <div className="card bg-white border-2 py-8 w-full max-w-sm shrink-0 shadow-2xl">
                <h3 className='text-3xl text-center font-bold'>Create an Account</h3>
                <p className='text-center'>Please Register</p>
                <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register('email', {required: true})} className="input" placeholder="Email" />
                        {errors.email?.type==='required' && <p className='text-red-600'>Email is required</p>}

                        <label className="label">Password</label>
                        <input type="password" {...register('password', {required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/})} className="input" placeholder="Password" />
                        {errors.password?.type==='required' && <p className='text-red-600'>Password is required</p>}
                        {errors.password?.type==='minLength' && <p className='text-red-600'>Password must be at least 6 character</p>}
                        {errors.password?.type==='pattern' && <p className='text-red-600'>Password must be at least one uppercase one lowercase one number and one special character</p>}

                        <button className="btn bg-primary text-secondary hover:bg-secondary hover:text-primary mt-4">Register</button>
                        <div className='mt-3'>Already have an account? <Link to='/login' className='text-primary font-bold hover:text-secondary'>Login</Link></div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;