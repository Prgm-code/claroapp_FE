import { Alert } from "./Alert";
import { useState } from "react";
import { createSite } from "../service/data-service";
import { Link } from "react-router-dom";

export function CreateSite() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [key, setKey] = useState('');
    const [address, setAddress] = useState('');
    const [commune, setCommune] = useState('');
    const [clientNumber, setClientNumber] = useState('');
    const [electricCompany, setElectricCompany] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
  

    async function handleSubmit(e) {
        e.preventDefault();
        if (name === '') {
            return setError('El nombre es requerido');
        }
        if (code === '') {
            return setError('El código es requerido');
        }
        if (key === '') {
            return setError('La clave es requerida');
        }

        setError('');
        setLoading(true);
        await createSite({
            "sitio": name,
            "codigo": code,
            "clave": key,
            "direccion": address,
            "comuna": commune,
            "numeroCliente": clientNumber,
            "empresaElectrica": electricCompany,
        })

            .then(response => {
                console.log(response);
                setSuccess('Se ha creado el sitio');
                setName('');
                setCode('');
                setKey('');
                setAddress('');
                setCommune('');
                setClientNumber('');
                setElectricCompany('');
            }
            )
            .catch(error => {
                console.log(error);
                setError(error.response.data.message);
            }
            );

        setLoading(false);
    }


    return (<>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h2 className="text-center">Crear Sitio</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {error && <Alert variant="danger"> {error} </Alert>}
                    {success && <Alert variant='success'> {success} </Alert>}

                    {loading && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                </div>
            </div>
            <div className="row">
                <div className="col-12">






                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Código</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={code} onChange={e => setCode(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Clave</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={key} onChange={e => setKey(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={address} onChange={e => setAddress(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Comuna</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={commune} onChange={e => setCommune(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Número de Cliente</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={clientNumber} onChange={e => setClientNumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Empresa Eléctrica</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={electricCompany} onChange={e => setElectricCompany(e.target.value)} />
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                        <button type="submit" className="btn btn-success">Crear</button>
                        <Link to="/" className="btn btn-primary ">Volver</Link>
                    </div>

                       
                    </form>
                </div>
            </div>
        </div>
    </>);
}



