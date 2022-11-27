
import logo from '../assets/img/claro.png';

function Navbar() {
    return (

        <nav className="navbar bg-light mb-3">
  <div className="container-fluid">
    <div className="navbar-brand" >
    <img src={logo} alt="" width="60" className="d-inline-block align-text-center " id="logo" /> Listado de Sitios

    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Control Sites</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Perfil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Logout</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Editar Sitio" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Editar</button>
        </form>
      </div>
    </div>
  </div>
</nav>

        
     
)}

export default Navbar;

   {/* <nav className="navbar bg-secondary stiky-top">
            <div className="flex-container">
                <div className="navbar-brand" >
                    <img src={logo} alt="" width="60" className="d-inline-block align-text-center " id="logo" /> Listado de Sitios
                      
                </div><strong></strong>
            </div>
        </nav>
    ); */}