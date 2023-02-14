import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/login.jpg'

const login_Ussers = () => {

  return (
    <div className="container w-75 bg-primary mt-5 rounded shadow">
      <div className="row align-items-stretch">
        <div className="col bg d-none col-md-5 col-lg-5 col-xl-6 rounded">
        </div>
        <div className="col bg-white p-5 rounded-end">
          <div className="text-end">
            <img src={logo} alt="" width="14% px" />
          </div>
          <h2 className="fw-bold text-center py-5">Login de estudiantes </h2>

          {/* Formulario */}
          {/* <form>
                        <div className="form-group mb-4">
                            <label for="exampleInputEmail1">Correo electronico</label>
                            <input class="form-control" type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Correo institucional" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <br/>
                        <div className="d-grid">
                            <span><Link className="btn bg-success nav-link" to="/solicitud">Iniciar sesión</Link></span>
                        </div>
                        <br />
                        <div className="d-grid">
                            <span><Link className="btn bg-danger nav-link" to="/">Regresar</Link></span>
                        </div>
                        
                    </form> */}
          {/* Formulario 2 */}
          <form>
            <div className="row mb-4">
              <label for="exampleInputEmail1" className="col-sm-3 col-form-label form-label">correo electronico:</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="row mb-4">
              <label for="exampleInputPassword1" className="col-sm-2 col-form-label form-label">Contraseña:</label>
              <div className="col-sm-10">
                <input type="password" class="form-control" />
              </div>
            </div>
            <div className="d-grid mb-4">
              <span><Link className="btn btn-success nav-link col-4 my-auto mx-auto" to="/inicio_Usuario">Iniciar sesión</Link></span>
            </div>
            <div className="d-grid mb-4">
              <span><Link className="btn btn-danger nav-link col-4 my-auto mx-auto" to="/">Regresar</Link></span>
            </div>
          </form>
          {/* <form>
            <div className="form-group mb-4">
              <label for="exampleInputEmail1" className="form-label" id="exampleInputEmail1" aria-describedby="emailHelp">Matricula</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-4">
              <label for="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="d-grid">
              <span><Link className="btn bg-black nav-link" to="#">Iniciar sesión</Link></span>
            </div>
            <br />
            <div className="d-grid">
              <span><Link className="btn bg-black nav-link" to='#'>Recuperar contraseña</Link></span>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default login_Ussers