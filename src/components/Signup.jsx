import {signup} from '../service/data-service.js';
import { useState } from 'react';
import logo from '../assets/img/7.png';
import {Alert} from './Alert.jsx';

export function  Signup () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [name , setName] = useState('');

    const [success, setSuccess] = useState('');

    const [ role , setRole] = useState('');
    

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            return setError('Passwords do not match');
        }
        if (email.toLocaleLowerCase().match(/@clarochile.cl$/)) {
            setRole('moderator');
        } else {
            return setError('Solo @clarochile.cl emails estan permitidos');
        }



            setError('');
            setLoading(true);
            await signup({
                "email": email,
                "password": password,
                "name": name,
                "role": [role]


            })
            .then (response => {
                console.log(response);
                setSuccess('Se ha enviado un mail de confirmación a su correo');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
                setName('');
                setRole('');
            }
            )
            .catch(error => {
                console.log(error);
                setError(error.response.data.message);
            }
            );

            
       

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
                        <h1 className="text-center">Sistema de Gestión de Sitios</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Registro</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {error && <Alert variant="danger" >{error}</Alert>}
                        {success && <Alert variant="success" >{success}</Alert>}
                        <form className='form-group' onSubmit={handleSubmit}>

                            <div classname='mb-3 ' >
                                <label for="name">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
                            </div>


                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password Confirmation</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPasswordConfirmation(e.target.value)} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button disabled={loading} className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

