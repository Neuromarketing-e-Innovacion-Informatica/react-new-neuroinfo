import React from 'react'

import unete from '../assets/img/illustrations/contact.png';

export const Unete = () => {
    return (
        <section className="py-8"><img className="w-100" src={unete} alt="" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">Contáctanos</h6>
                        <p>Create an account and refer your friend </p>
                    </div>
                </div>
            </div>

            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Correo Electrónico</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Mensaje</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        <button type="submit" class="btn btn-enviar">Envíar</button>
                        </div>
                    </div>
                </div>
            </form>
      </section>
    )
}
