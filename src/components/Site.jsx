import  {Link}  from   'react-router-dom' ;

export function Site(site) {
  return (<>
  <tr>

    <td><Link to={`/${site.id}`} className="fa-solid fa-bars"></Link></td>
    <td>{site.sitio}</td>
    <td>{site.codigo}</td>
    <td>{site.clave}</td>
    <td>{site.direccion}</td>
    <td>{site.comuna}</td>
    <td>{site.numeroCliente}</td>
    <td>{site.empresaElectrica}</td>

  </tr>
  
  </>);
}




  
