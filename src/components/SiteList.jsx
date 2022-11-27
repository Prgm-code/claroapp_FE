import {Site} from './Site';


function SiteList ({search, sites }) {

    return (<> 
    <div className="container-fluid">

    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Ir</th>
      <th scope="col">Sitio</th>
      <th scope="col">Código</th>
      <th scope="col">Clave Acceso</th>
      <th scope="col">Dirección</th>
      <th scope="col">Comuna</th>
      <th scope="col">Numero Cliente & Medidor</th>
      <th scope="col">Cia. Eléctrica</th>
  
    </tr>
  </thead>
  <tbody>
    {sites
    .filter((site) => site.sitio.toLowerCase().includes(search.toLowerCase()) ||site.codigo.includes(search) )
   
    .map((site) => (
        <Site key={site.id} {...site} />
    ))}
    </tbody>
</table>
    </div>
    
    
    
    </> )

        

    




}

export default SiteList;