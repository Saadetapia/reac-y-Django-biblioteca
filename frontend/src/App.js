import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/inicio";
import LoginAdmin from "./components/admin/login_Admin";
import LoginUssers from "./components/usuario/login_Ussers";
import SolicitudLibros from "./components/usuario/SolicitudLibros";
import AgregarUssers from "./components/admin/agregarUsuarios";
import AgregarLibro from "./components/admin/agregar_Libro";
import PaletaPrestamos from "./components/admin/Paleta_Prestamos";
import NavbarAdmin from "./components/navbar/NavbarAdmin";
import NavbarUsuarios from "./components/navbar/NavbarUsuarios";
import InicioAdmin from "./components/admin/InicioAdmin";
import InicioUsuario from "./components/usuario/InicioUsuario";
//import axios from 'axios';

// // Components
// import Header from "./components/Header";
// import BlogForm from "./components/BlogForm";
// import Blogs from "./components/Blogs";


function App() {
  return (
    <Router>
      <div className="container">
        {/* <NavbarAdmin /> */}
        {/* <br />
        <div className="btn-group">
          <NavLink to="/" exact className="btn btn-dark">
            inicio
          </NavLink>
          <NavLink to="/admin" exact className="btn btn-dark">
            admin
          </NavLink>
          <NavLink to="/agregar_Usuarios" exact className="btn btn-dark">
            agregar usuarios
          </NavLink>
          <NavLink to="/agregar_Libro" exact className="btn btn-dark">
            agregar libro
          </NavLink>
          <NavLink to="/usuario" exact className="btn btn-dark">
            usuarios
          </NavLink>
          <NavLink to="/solicitud" exact className="btn btn-dark">
            solicitud
          </NavLink>
        </div>
        <hr /> */}
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/admin" exact>
            <LoginAdmin />
          </Route>
          <Route path="/usuario" exact>
            <LoginUssers />
          </Route>
          <Route path="/solicitud" exact>
            <NavbarUsuarios />
            <SolicitudLibros />
          </Route>
          <Route path="/agregar_Usuarios" exact>
            <NavbarAdmin />
            <AgregarUssers />
          </Route>
          <Route path="/agregar_Libro" exact>
            <NavbarAdmin />
            <AgregarLibro />
          </Route>
          <Route path="/prestamos" exact>
            <PaletaPrestamos />
          </Route>
          <Route path="/inicio_Admin">
            <NavbarAdmin />
            <InicioAdmin />
          </Route>
          <Route path="/inicio_Usuario">
            <NavbarUsuarios />
            <InicioUsuario />
          </Route>
        </Switch>
      </div>
    </Router>
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //   axios.get('/get/')
    //   .then((response) => {
    //     setBlogs(response.data)
    //   }).catch(() => {
    //     alert('Algo fue mal!')
    //   })
    // }, [])

    // return (

    //   <>
    //   <Header/>
    //   <div className="container p-4">
    //    <BlogForm blogs={blogs} setBlogs={setBlogs}/>
    //    <Blogs blogs={blogs} setBlogs={setBlogs}/>

    //   </div>

    //   </>
  )
}

export default App;
