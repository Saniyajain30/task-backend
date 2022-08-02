import { useEffect, useState } from 'react';
import { API } from '../backend';
import Navbar from '../components/Navbar';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      fetch(`${API}/blogs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setBlogs(data);
          if (data.error) {
            alert(data.error);
          }
        });
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container max-w-[1080px] w-[95%] mt-4 mx-auto'>
        <h2>All Blogs</h2>

        <ul>
          {blogs.length > 0
            ? blogs.map((blog) => (
                <li key={blog._id} className='p-2 rounded-md shadow-md my-2'>
                  <h3 className='text-2xl'>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <small className='text-xs'>{blog.author}</small>
                </li>
              ))
            : 'Loading...'}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
