import React from 'react'

import hero_bg from '../assets/img/illustrations/hero_bg.png';
import bg from '../assets/img/illustrations/bg_yellow.png';
import passion from '../assets/img/illustrations/passion.png';

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
                            <h1 className="mt-6 mb-sm-4 display-2 fw-semi-bold lh-sm fs-4 fs-lg-6 fs-xxl-8">Find your job better <br className="d-block d-lg-none d-xl-block" />and faster</h1>
                            <p className="mb-4 fs-1">Find your best job better and faster with Jobest</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="bg-holder" style={{backgroundImage: `url(${bg})`, backgroundPosition: "left top", backgroundSize: "initial", marginTop: "-180px"}}>
                </div>

                <div className="container">
                    <div className="row flex-center">
                        <div className="col-md-5 order-md-0 text-center text-md-start"><img className="img-fluid mb-4" src={passion} width="450" alt="" /></div>
                        <div className="col-md-5 text-center text-md-start">
                        <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">Find your passion and<br />achieve success</h6>
                        <p className="my-4 pe-xl-8"> find a job that suits your interests and talents. A high salary is not the top priority. Most importantly,You can work according to your heart's desire.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
