import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import arrow from '../../assets/img/arrow.png'

export const AppsWeb = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="container">

                    <Link to="/"><img className="w-100 mr-3" src={arrow} alt="<" style={{maxWidth: "2vh"}} />Volver</Link>

                    <div className="my-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h2>Desarrollo de Aplicaciones Web</h2>
                                <hr/>
                                <p className="text-justify">Si necesitas una página web que resuelva algún tipo de problemática laboral y/o personal, el desarrollo de una aplicación web es la mejor opción, desarrollando la solución de tu problema a la medida, como un gestor de inventario, de personal, de asistencia, formularios, etc.</p>
                                <p className="text-justify">Estas páginas requieren de programación y conexión a bases de datos, lo que las diferencia completamente de páginas web informativas, en las cuales solo se estructura información visual.</p>

                                <p className="service-decoration">Responsivo: Si</p>
                                <p className="service-decoration">Panel de acceso: Si</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
