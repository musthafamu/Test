import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Spinner } from '../../components/index';
import axiosInstance from '../../api/axiosInstance'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true); // Start loading
    setError(''); // Clear any previous errors
    try {
      const response = await axiosInstance.post('api/user/login', values);
      console.log(response.data); // Handle the response as needed

      if (response.data.message === 'success') {
        navigate('/home');        // Redirect or show success message
      } else {
        setError('Login failed. Please try again.'); 
      }
    } catch (error) {
      console.error('Error logging in:', error); 
      setError('An error occurred while logging in. Please try again.'); 
      setLoading(false); 
      setSubmitting(false);
    }
  };

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-bold'>Hala! Let's get started</h1>
          <p className='text-sm text-center'>Access a smoother and quicker checkout process by signing in</p>
        </div>
        <div className='border outline-none border-gray-500 p-4'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col gap-4 p-4'>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <span className='text-sm flex justify-end text-gray-900'>Forgot Password?</span>
                {error && (
                  <div className='text-red-500 text-sm mb-4'>
                    {error}
                  </div>
                )}
                <Button type='submit' disabled={isSubmitting || loading}>
                  {loading ? <Spinner /> : 'Login'}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
