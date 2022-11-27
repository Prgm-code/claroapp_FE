import logo from '../assets/claro.png';


export function Register (){
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <img src={logo} alt
                    ="logo" className="img-fluid claro-logo" />
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
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>)

}
