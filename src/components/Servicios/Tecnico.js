import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import arrow from '../../assets/img/arrow.png'

export const Tecnico = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="container">

                    <Link to="/"><img className="w-100 mr-3" src={arrow} alt="<" style={{maxWidth: "2vh"}} />Volver</Link>

                    <div className="my-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h2>Servicio técnico</h2>
                                <hr/>
                                <p className="text-justify">Te ofrecemos este servicio para cuando tengas problemas con tu computadora, si necesitara mantención, armado desde cero, cambio de pasta térmica, limpieza, etc., contamos con todo el equipo necesario para volver a darle vida a tu herramienta.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
