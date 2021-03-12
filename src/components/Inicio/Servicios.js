import React from 'react'

import web from '../../assets/img/iconos/web.png';
import app_web from '../../assets/img/iconos/app_web.png';
import servicio_tecnico from '../../assets/img/iconos/servicio_tecnico.png';
import asesorias from '../../assets/img/iconos/asesorias.png';
import asistencia from '../../assets/img/iconos/asistencia.png';
import redes from '../../assets/img/iconos/redes.png';

export const Servicios = () => {
    return (
        <section className="py-5" id="servicios">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-6 text-center mb-3">
                        <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Servicios</h5>
                        <p className="mb-5">Servicios que por el momento entregamos a nuestros clientes</p>
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
                                            <a href="/paginas-web" className="btn btn-vermas text-white mt-5">Ver más</a>
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
                                            <a href="/aplicaciones-web" className="btn btn-vermas text-white mt-5">Ver más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center">
                                        <img src={servicio_tecnico} height="120" alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Servicio Técnico</h6>
                                            <a href="/servicio-tecnico" className="btn btn-vermas text-white mt-5">Ver más</a>
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
                                            <a href="/asesorias" className="btn btn-vermas text-white mt-5">Ver más</a>
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
                                            <a href="/asistencia-tecnica" className="btn btn-vermas text-white mt-5">Ver más</a>
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
                                            <a href="/redes-sociales" className="btn btn-vermas text-white mt-5">Ver más</a>
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
