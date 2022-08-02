import { useState } from 'react';
import { API } from '../backend';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const { name, email, password } = values;

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //call api
    fetch(`${API}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);

        if (data.error) {
          alert(data.error);
          return;
        }

        navigate('/login');
      });
  };

  return (
    <div className='container max-w-lg w-[95%] mx-auto flex justify-center items-center min-h-screen'>
      <form
        className='max-w-[600px] w-full mx-auto p-4 py-8 md:px-8 border rounded-md'
        onSubmit={handleFormSubmit}
      >
        <h1 className='text-center text-2xl mb-2 font-bold text-gray-800'>
          Signup
        </h1>
        <p className='text-sm text-center mb-2 text-gray-400'>
          Please signup to continue
        </p>

        <input
          type='name'
          name='name'
          placeholder='Enter name'
          value={name}
          onChange={handleInputChange}
          className='block w-full p-2 my-4 border rounded-md'
        />
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          value={email}
          onChange={handleInputChange}
          className='block w-full p-2 my-4 border rounded-md'
        />

        <input
          type='password'
          name='password'
          placeholder='Enter password'
          value={password}
          onChange={handleInputChange}
          className='block w-full p-2 my-4 border rounded-md'
        />

        <button
          type='submit'
          className='p-2 my-4 w-full block bg-blue-600 text-white border  border-blue-600 rounded-md'
        >
          Signup
        </button>

        <p className='text-center mt-4'>
          Already a member?{' '}
          <a href='/#' className='text-blue-600 hover:underline'>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
