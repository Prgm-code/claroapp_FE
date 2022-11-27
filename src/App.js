
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

function App() {
  
  
  const [search, setSearch] = useState('');
  const [sites, setSites] = useState([]);



  useEffect(() => {
    getAllSites()
      .then((response) => {
        console.log(response);
        setSites(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<>
        <SearchBar setSearch={setSearch} search={search}/>
        <SiteList sites={sites} search={search} />
        
        </>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<SiteView sites={sites}/>} />
      </Routes>
      

    </div>
  );


}

export default App;
