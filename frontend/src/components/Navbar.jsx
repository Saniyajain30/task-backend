import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='shadow-sm p-4 '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex space-x-4 items-center'>
          <div className='logo'>Logo</div>
          <Link to='/blogs/add' className='text-blue-600 mr-2'>
            Add blog
          </Link>
        </div>
        <nav className='flex items-center space-x-2'>
          <Link to='/contact' className='text-blue-600 mr-2'>
            Contact Us
          </Link>
          {user ? (
            <button
              className='border rounded-md border-blue-600 bg-blue-600 text-white p-2 px-4'
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to='/login'
                className='border rounded-md border-blue-600 bg-blue-600 text-white p-2 px-4'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='border rounded-md border-blue-600 bg-white text-blue-600 p-2 px-4'
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
