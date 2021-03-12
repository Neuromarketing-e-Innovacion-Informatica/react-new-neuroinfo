import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import arrow from '../../assets/img/arrow.png'

export const Asesorias = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="container">

                    <Link to="/"><img className="w-100 mr-3" src={arrow} alt="<" style={{maxWidth: "2vh"}} />Volver</Link>

                    <div className="my-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h2>Asesorías</h2>
                                <hr/>
                                <p className="text-justify">Tienes dudas sobre qué contenido puedes implementar en tu página web, qué computadores o productos tecnológicos puedas necesitar para innovar tu manera de trabajar o resolver alguna problemática, nosotros podemos ayudarte a resolver todas esas dudas que puedas tener, con el fin de orientar a trabajar con las mejores herramientas para aumentar tu productividad y eficiencia.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
