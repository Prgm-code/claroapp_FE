import { Link } from "react-router-dom";


export function SiteMobile( site ) {



    return (<>
        
        <ul className="list-group mb-3">
            <li className="list-group-item active bg-info d-flex justify-content-between align-items-center" aria-current="true">
                <strong>{site.sitio}</strong> <strong>{site.codigo}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Clave:</strong> <span>{site.clave}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>{site.direccion}</span> <span>{site.comuna}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>{site.empresaElectrica}</span> <span>{site.numeroCliente}</span>
            </li>
           
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`/${site.id}`} className="btn btn-primary">Ver</Link>
            </li>
        </ul>

        </>)
}



