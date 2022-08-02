import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../backend';

const AddBlog = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    author: '',
  });
  const navigate = useNavigate();

  const { title, description, author } = values;

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`${API}/blogs`, {
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
        if (data.error) {
          alert(data.error);
          return;
        }

        navigate('/blogs');
      });
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form
        className='max-w-[560px] w-full mx-auto p-4 py-8 md:px-8 border rounded-md'
        onSubmit={handleFormSubmit}
      >
        <h1 className='text-center text-2xl mb-2 font-bold text-gray-800'>
          Add a new blog post
        </h1>

        <input
          type='title'
          name='title'
          placeholder='Enter title'
          value={title}
          onChange={handleInputChange}
          className='block w-full p-2 my-4 border rounded-md'
        />

        <textarea
          name='description'
          placeholder='Enter description'
          value={description}
          onChange={handleInputChange}
          className='block w-full p-2 my-4 border rounded-md'
        ></textarea>

        <input
          type='author'
          name='author'
          placeholder='Enter author'
          value={author}
          onChange={handleInputChange}
          className='block w-full p-2 my-4 border rounded-md'
        />

        <button
          type='submit'
          className='p-2 my-4 w-full block bg-blue-600 text-white border  border-blue-600 rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddBlog;
