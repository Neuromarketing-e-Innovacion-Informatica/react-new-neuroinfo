import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import arrow from '../../assets/img/arrow.png'

export const PaginasWeb = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="container">

                    <Link to="/"><img className="w-100 mr-3" src={arrow} alt="<" style={{maxWidth: "2vh"}} />Volver</Link>

                    <div className="my-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h2>Desarrollo de Páginas Web Informativas</h2>
                                <hr/>
                                <p className="text-justify">Realizamos el desarrollo de páginas web informativas en las cuales aparecerá toda la información que desees mostrar, información de tu empresa y/o persona, hablando sobre su trayectoria, servicios, ubicación, contacto, etc.</p>

                                <p className="service-decoration">Responsivo: Si</p>
                                <p className="service-decoration">Auto administrable: No</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
