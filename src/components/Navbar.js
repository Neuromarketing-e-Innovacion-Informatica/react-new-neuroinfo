import React from 'react'

import logo from '../assets/img/logo.png'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 backdrop" data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center fw-bolder fs-2 fst-italic" href="/">
                    <img src={logo} style={{maxWidth: "250px"}} alt="Neuroinformatics"/>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                        <li className="nav-item px-2"><a className="nav-link fw-medium" aria-current="page" href="#home">Inicio</a></li>
                        <li className="nav-item px-2"><a className="nav-link fw-medium" href="#servicios">Servicios</a></li>
                        <li className="nav-item px-2"><a className="nav-link fw-medium" href="#contacto">Contacto</a></li>
                        <li className="nav-item px-2"><a className="nav-link fw-medium" href="#features">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
