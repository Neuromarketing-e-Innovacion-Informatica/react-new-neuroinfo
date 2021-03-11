import React from 'react';

import { Navbar } from './components/Navbar';
import { Home } from './components/Inicio/Home';
import { About } from './components/Inicio/About';
import { Servicios } from './components/Inicio/Servicios';
import { Contacto } from './components/Inicio/Contacto';
import { Footer } from './components/Footer';

export const Inicio = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Servicios />
            <Contacto />
            <Footer />
        </>
    )
}
