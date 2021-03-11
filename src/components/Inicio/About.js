import React from 'react'

import job from '../../assets/img/illustrations/job.png';

export const About = () => {
    return (
        <section className="py-0">

            <div className="container">

                <section className="py-8">

                    <div className="container">
                        <div className="row flex-center">
                            <div className="col-md-5 order-md-1 text-center text-md-end">
                                <img className="img-fluid mb-4" src={job} width="450" alt="" />
                            </div>
                            <div className="col-md-5 text-center text-md-start">
                                <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">Cómo trabajamos</h6>
                                <p className="text-justify my-4 pe-xl-8">Mediante aplicaciones y herramientas analíticas buscamos innovar las tendencias proporcionando de una manera simple y cotidiana el análisis de datos complejos, observando tendencia, desarrollando herramientas computacionales, modelos matemáticos y bases de datos, que ayuden a la toma de decisiones.</p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        </section>
    )
}
