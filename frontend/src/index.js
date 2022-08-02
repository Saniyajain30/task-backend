import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogList from './pages/BlogList';
import AddBlog from './pages/AddBlog';
import ContactForm from './pages/ContactForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='/blogs/add' element={<AddBlog />} />
          <Route path='/contact' element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
