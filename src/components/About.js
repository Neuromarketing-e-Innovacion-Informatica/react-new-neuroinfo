import React from 'react'

import jobs from '../assets/img/illustrations/jobs.png';

export const About = () => {
    return (
        <section className="py-0">

            <div className="container">

                <section className="py-8">

                    <div className="container">
                        <div className="row flex-center">
                            <div className="col-md-5 order-md-1 text-center text-md-end">
                                <img className="img-fluid mb-4" src={jobs} width="450" alt="" />
                            </div>
                            <div className="col-md-5 text-center text-md-start">
                                <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">Million of jobs, finds <br /> the one thats rights for you</h6>
                                <p className="my-4 pe-xl-8">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        </section>
    )
}
