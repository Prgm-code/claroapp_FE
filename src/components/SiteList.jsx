import { Site } from './Site';
import { SiteMobile } from './SiteMobile';

import useMediaQuery from "../hooks/useMediaQuery.js";







function SiteList({ search, sites }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (

    isDesktop ? (
      <>
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
                .filter((site) => site.sitio.toLowerCase().includes(search.toLowerCase()) || site.codigo.includes(search))

                .map((site) => (
                  <Site key={site.id} {...site} />
                ))}
            </tbody>
          </table>
        </div>




      </>) : (
      <>
        <div className="container-fluid">
          {sites
            
            .filter((site) => site.sitio.toLowerCase().includes(search.toLowerCase()) || site.codigo.includes(search))
            .map((site) => (
              <SiteMobile key={site.id} {...site} />
            ))}
        </div>
      </>
    )
  );



        

    




}

export default SiteList;