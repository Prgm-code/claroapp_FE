import logo from '../assets/img/7.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { getSite, updateSite } from '../service/data-service.js';

import { KeySite } from './KeySite.jsx';





export function SiteView({ handleErrors }) {

    const [site, setSite] = useState({});
    const [arrSite, setArrSite] = useState([]);
    const [editing, setEditing] = useState(false);
    const [sitio, setSitio] = useState(site.sitio);
    const [clave, setClave] = useState(site.clave);
    const [direccion, setDireccion] = useState(site.direccion);

    const fixedError = useRef();



    const { id } = useParams();

    function handleArrSite(s) {
        let result = [];
        for (let n in s) {
            result.push([n, s[n]]);
        }
        console.log(result);
        setArrSite(result);

    }
    function handleGetSite() {
        getSite(id)
            .then(response => {
                setSite(response.data);
                handleArrSite(response.data);
            })
            .catch(error => {
                console.log(error);
                fixedError.current = error;
                handleErrors(fixedError.current);
            })
    }





    useEffect(() => {

        handleGetSite()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );




    useEffect(() => {
        setSitio(site.sitio);
        setClave(site.clave);
        setDireccion(site.direccion);
    }, [site]);

    const handleSaveKey = (key, value) => {
        if (key === 'IC1' && value.toLowerCase() === "si") {
            value = true;
        } else if (key === 'IC1' && value.toLowerCase() === "no") {
            value = false;
        }

        let Site = { ...site };
        Site[key] = value;

        updateSite(Site)
            .then(response => {
                console.log(response);
                setSite(Site)
            })
            .catch(error => {
                console.log(error);
                handleErrors(error);
            })
    }









    return (
        <div className="container">
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
                    <h2 className="text-center">Detalle de Sitio</h2>
                </div>

                <div className="row">

                    {
                        editing ? (
                            <>
                                <li className='list-group-item'>Sitio: <input type="text" value={sitio} onChange={e => setSitio(e.target.value)} /></li>
                                <li className='list-group-item'>Clave: <input type="text" value={clave} onChange={e => setClave(e.target.value)} /></li>
                                <li className='list-group-item'>Dirección: <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} /></li>

                            </>
                        ) : (
                            <div>
                                <ul className='list-group'>
                                    {
                                        arrSite.map((item, i) => (
                                            < KeySite key={i} item={item} handleSaveKey={handleSaveKey} />
                                        )
                                        )
                                    }
                                </ul>

                                <Link to={`/`} className="btn btn-info my-5">Volver al listado de sitios <i className="fa-solid fa-left-long  mx-3"></i></Link>


                            </div>
                        )


                    }

                </div>



            </div>

        </div>
    )
}



