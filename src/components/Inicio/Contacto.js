import React from 'react'

import contacto from '../../assets/img/illustrations/contact.png';

export const Contacto = () => {
    return (
        <section className="py-8" id="contacto">
            <img className="w-100" src={contacto} alt="" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center py-4">
                        <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">Contáctanos</h6>
                        <p>Si deseas más información sobre los valores de los servicios o una cotización, no dudes en comunicarte con nosotros.</p>
                    </div>
                </div>
            </div>

            <div className="row text-center pb-8">
                <div className="col-md-4 offset-md-4">
                    <a without="true" rel="noreferrer" href="https://api.whatsapp.com/send?phone=56936662380&text=Hola,%20les%20hablo%20desde%20su%20web" target="_blank" className="btn btn-enviar btn-block text-white">Contactar</a>
                </div>
            </div>
      </section>
    )
}
