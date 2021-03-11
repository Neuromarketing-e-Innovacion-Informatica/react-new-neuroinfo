import React from 'react'

import web from '../assets/img/iconos/web.png';
import app_web from '../assets/img/iconos/app_web.png';
import app_mobile from '../assets/img/iconos/app_mobile.png';
import asesorias from '../assets/img/iconos/asesorias.png';
import asistencia from '../assets/img/iconos/asistencia.png';
import redes from '../assets/img/iconos/redes.png';

export const Servicios = () => {
    return (
        <section className="py-5" id="servicios">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-6 text-center mb-3">
                        <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Servicios</h5>
                        <p className="mb-5">Choose from the list of most popular categories</p>
                    </div>
                </div>
                <div className="row flex-center h-100">
                    <div className="col-10 col-xl-9">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={web} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Desarrollo de páginas web informativas</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={app_web} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Desarrollo de aplicaciones web</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={app_mobile} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Desarrollo de aplicaciones móviles</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={asesorias} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Asesorías</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={asistencia} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Asistencia técnicas de nuestros productos</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={redes} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Manejo de redes sociales</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
