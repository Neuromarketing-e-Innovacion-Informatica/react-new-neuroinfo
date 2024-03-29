import React from 'react'

import hero_bg from '../../assets/img/illustrations/hero_bg.png';
import bg from '../../assets/img/illustrations/bg-yellow.png';
import about from '../../assets/img/illustrations/about.png';

export const Home = () => {
    return (
        <>
            <section className="py-0" id="home">

                <div className="bg-holder d-none d-sm-block" style={{backgroundImage: `url(${hero_bg})`, backgroundPosition: "right top", backgroundSize: "contain"}}>
                    
                </div>

                <div className="bg-holder d-sm-none" style={{backgroundImage: `url(${hero_bg})`, backgroundPosition: "right top", backgroundSize: "contain"}}>
                </div>

                <div className="container">
                    <div className="row align-items-center min-vh-75 min-vh-md-100">
                        <div className="col-md-7 col-lg-6 py-6 text-sm-start text-center">
                            <h1 className="mt-6 mb-sm-4 display-2 fw-semi-bold lh-sm fs-4 fs-lg-6 fs-xxl-8 tituloTexto">Neuroinformatics</h1>
                            <p className="mb-4 fs-1 tituloTexto">Dedicados a crear el mejor producto/servicio para nuestros clientes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="bg-holder" style={{backgroundImage: `url(${bg})`, backgroundPosition: "left top", backgroundSize: "initial", marginTop: "-180px"}}>
                </div>

                <div className="container">
                    <div className="row flex-center ">
                        <div className="col-md-5 order-md-0 text-center text-md-start"><img className="img-fluid mb-4" src={about} width="450" alt="" /></div>
                        <div className="col-md-5 text-center text-md-start">
                        <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">Sobre Nosotros</h6>
                        <p className="text-justify my-4 pe-xl-8">Somos, una empresa que busca la excelencia y la innovación en redes informáticas, conectando las necesidades de los clientes con innovaciones abarcando amplios niveles de estudio combinando la psicología y la informática a disposición de nuestro cliente. </p>
                        <p className="text-justify my-4 pe-xl-8">Actualmente nos encontramos trabajando en la Región de Ñuble, en la ciudad de Chillán.</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
