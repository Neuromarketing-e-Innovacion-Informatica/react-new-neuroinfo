import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import arrow from '../../assets/img/arrow.png'

export const Asistencia = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="container">

                    <Link to="/"><img className="w-100 mr-3" src={arrow} alt="<" style={{maxWidth: "2vh"}} />Volver</Link>

                    <div className="my-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h2>Asistencia técnica de nuestros productos</h2>
                                <hr/>
                                <p className="text-justify">No entiendes cómo funciona el programa, existe alguna problemática en el uso del producto que desarrollamos para ti, contáctanos para poder resolver cada problema o duda que se pueda presentar, para que así puedas continuar desarrollando tu labor de la mejor manera posible.</p>
                                
                                <p className="service-decoration">Recalcar que esta asistencia es sobre los productos que Neuroinformatics entrega.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
