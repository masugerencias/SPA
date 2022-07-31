import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import PHome from "../pages/PHome";
import PLogin from "../pages/PLogin";
import PRegistro from "../pages/PRegistro";
import PVerificacion from "../pages/PVerificacion";
import PHistorial from "../pages/PHistorial";
import PPerfil from "../pages/PPerfil";

class Main extends Component {


    render() {
        return (
        <div>
            <Routes>
                <Route path="/" element={<PHome />} />
                <Route path="/login" element={<PLogin />} />
                <Route path="/registro" element={<PRegistro />} />
                <Route path="/verificacion" element={<PVerificacion />} />
                <Route path="/historial" element={<PHistorial />} />
                <Route path="/perfil" element={<PPerfil />} />
            </Routes>
        </div>
        );
    }
}
export default Main;

