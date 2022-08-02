import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container max-w-lg w-[95%] mx-auto flex justify-center items-center min-h-screen'>
      <div className='w-full'>
        <h1 className='text-center text-2xl'>Welcome Blog App </h1>
        <div className='mt-4 flex justify-center space-x-4 text-white'>
          <Link
            to='/login'
            className='p-2 px-4 border rounded-md border-blue-600 bg-blue-600 '
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='p-2 px-4 border rounded-md border-blue-600 text-blue-600'
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
