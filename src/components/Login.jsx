import logo from '../assets/img/7.png';
import {Alert} from './Alert.jsx';
import { useState } from 'react';
import { login } from '../service/data-service.js';
import { useNavigate } from 'react-router';

export function Login ({setLogedIn , logedIn , handleErrors}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

  
    


    async function handleSubmit(e) {
        e.preventDefault();


            setError('');
            setLoading(true);
            await login({
                "email": email,
                "password": password
            })
            .then (response => {
                console.log(response);
                localStorage.setItem('token', response.data);
               
                navigate('/');
                window.location.reload();
                
            })
            .catch(error => {
                console.log(error);
                handleErrors(error);

            });
      

        setLoading(false);
    }

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img src={logo} alt
                        ="logo" className="img-fluid " />
                    </div>
                    <div className="col-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-center">Iniciar Sesion</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


