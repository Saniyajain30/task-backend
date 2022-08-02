import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../backend';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API}/messages`, {
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

        setTimeout(() => {
          setSubmitted(true);
        }, 100);
      });
  };

  if (submitted) {
    return (
      <div className='flex justify-center items-center min-h-screen flex-col'>
        <div className='text-2xl'>Thank you!</div>
        <div className='text-md'>We'll be in touch soon.</div>

        <Link
          to='/'
          className='mt-4 text-white bg-blue-600 p-2 px-4 rounded-sm'
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='py-4 lg:py-8  relative'>
          <img
            src='https://i.postimg.cc/wMCgWDgm/Back-Image.png'
            className='h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden'
            alt='map'
          />
          <div className='xl:mx-auto xl:container  relative '>
            <div className='flex flex-wrap xl:mx-auto xl:container'>
              <div className='w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 '>
                <img
                  src='https://i.postimg.cc/wMCgWDgm/Back-Image.png'
                  className='h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden'
                  alt='map'
                />
                <div className='w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4'>
                  <div className='w-full 2xl:pl-48 xl:pt-1'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-800'>
                      We are always at your service
                    </h1>
                    <div className='w-full md:w-10/12 mt-3'>
                      <h2 className='text-gray-800 text-base md:text-lg leading-8 tracking-wider'>
                        A practical blog for impractical people
                      </h2>

                      <div className='mt-4 md:mt-8'>
                        <h2 className='text-sm md:text-base text-indigo-700 font-semibold'>
                          Contact
                        </h2>
                        <h2 className='text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2'>
                          +91 898212121(Phone)
                        </h2>
                      </div>
                      <div className='mt-4 md:mt-8'>
                        <h2 className='text-sm md:text-base text-indigo-700 font-semibold'>
                          Email
                        </h2>
                        <h2 className='text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2'>
                          connect@technomore.com
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2   xl:pt-10 lg:pl-24'>
                <div className='flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4'>
                  <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700'>
                    Let’s Connect
                  </h1>
                  <div className='w-full 2xl:w-8/12 mt-3'>
                    <h2 className='text-gray-800 text-base md:text-lg leading-8 tracking-wider'>
                      For enquiries, please email us using the form below
                    </h2>
                    <div className='mt-4 md:mt-8'>
                      <p className='text-gray-800 text-base font-medium'>
                        Name
                      </p>
                      <input
                        className='mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800'
                        type='text'
                        name='name'
                        placeholder='Enter your name '
                        value={values.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='mt-4 md:mt-8'>
                      <p className='text-gray-800 text-base font-medium'>
                        Email Address
                      </p>
                      <input
                        className='mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800'
                        type='email'
                        name='email'
                        placeholder='example@mail.com'
                        value={values.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='mt-4 md:mt-8'>
                      <p className='text-gray-800 text-base font-medium'>
                        Message
                      </p>
                      <textarea
                        className='mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800'
                        type='text'
                        name='message'
                        placeholder='Write us something...'
                        value={values.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='py-5'>
                      <button
                        type='submit'
                        className='py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold'
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
