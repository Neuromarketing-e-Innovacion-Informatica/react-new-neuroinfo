import React from 'react'

import { Link } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import error from './assets/img/illustrations/404.png';

export const NoPage = () => {
    return (
        <>
            <Navbar />
            <section className="py-8" id="contacto">
                <div className="text-center">
                    <img className="w-100" src={error} alt="404" style={{maxWidth: "45%"}} />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center py-4">
                            <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">¡Lo sentimos!</h6>
                            <p>La página a la cual deseas acceder no existe</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 offset-md-4 text-center">
                            <Link to="/" className="btn btn-enviar btn-block">Volver</Link>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}
