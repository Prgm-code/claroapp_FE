
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SeachBar';
import SiteList from './components/SiteList';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

import { getAllSites, } from './service/data-service.js';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { SiteView } from './components/SiteView';
import { Signup } from './components/Signup';
import decodeJwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { CreateSite } from './components/CreateSite';


function App() {
  
  
  const [search, setSearch] = useState('');
  const [sites, setSites] = useState([]);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  const [loading, setLoading] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
 
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!token) return navigate('/login');

    setLoading(true); 
    getAllSites()
      .then((response) => {
        

        setSites(response.data);
        setLoading(false);
        setLogedIn(true);
        setUserId(decodeJwt(token).sub);
        console.log(response);
        console.log(userId);
        
      })
      .catch((error) => {
        console.log(error);
        handleErrors(error);
        setLoading(false);
      });
  }, [token]);


  
 const  handleErrors = (err) => {
    console.log('el error'+err);
    if (err.response.status === 401) {
      localStorage.removeItem('token');
      setToken(null);
      setUserId(null);
      setLogedIn(false);
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUserId(null);
    setLogedIn(false);
    setSites([]);
    navigate('/login');
  };




  return (
    <div className="App">

      <Navbar handleLogout={handleLogout} logedIn={logedIn}/>
      <Routes>
        <Route path="/" element={<>
        <SearchBar setSearch={setSearch} search={search}/>
        <SiteList sites={sites} search={search} />
        
        </>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} setLogedIn={setLogedIn} logedIn={logedIn} handleErrors={handleErrors}/>
        <Route path="/:id" element={<SiteView sites={sites} handleErrors={handleErrors}/>} />
        <Route path="/createsite" element={<CreateSite  />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      

    </div>
  );


}

export default App;
