import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

import arrow from '../../assets/img/arrow.png'

export const Redes = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="container">

                    <Link to="/"><img className="w-100 mr-3" src={arrow} alt="<" style={{maxWidth: "2vh"}} />Volver</Link>

                    <div className="my-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h2>Manejo de redes sociales</h2>
                                <hr/>
                                <p className="text-justify">No entiendes cómo funcionan las redes sociales, no sabes cómo puedes crecer de manera eficiente en este mundo, necesitas que creen y manejen la subida de publicaciones e historias en tus redes, nosotros te podemos ayudar.</p>
                                <p className="text-justify">Manejamos tus redes sociales, creando publicaciones a la medida, realizando las subidas, haciendo un seguimiento del crecimiento y buscando formas de aumentar este (sin la utilización de bots), para que vayas creciendo en el mundo social y aumentar tu popularidad.</p>

                                <p className="service-decoration text-justify">Servicio incluye: creación de imágenes según el diseño del cliente, subida de imágenes, seguimiento del crecimiento y aumento de seguidores en Facebook e Instagram.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
