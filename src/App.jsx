import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Form from './Component/Form/Form';
import Home from './Component/Home/Home';
import ViewData from './Component/ViewData/ViewData';
import getdata from './Component/js/main'; 

function App() {
  const navigate = useNavigate();

  const [FormInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [Storage, setStorage] = useState(getdata()); 

  
  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setFormInput({
      ...FormInput,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newFormInput = { ...FormInput, id: uuidv4() };
    setStorage([...Storage, newFormInput]);

    navigate('/view-data');

    setFormInput({
    name: '',
    email: '',
    message: '',
    })
  };
  
  useEffect(() => {
    localStorage.setItem('Storage', JSON.stringify(Storage));
  }, [Storage]);
  
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="contact" element={<Form handleForm={handleForm} handleSubmit={handleSubmit} />} />
      <Route path="view-data" element={<ViewData data={Storage} />} />
      <Route path="*" element={<h1 className="text-center p-3">404 page not found</h1>} />
    </Routes>
  );
}

export default App;
