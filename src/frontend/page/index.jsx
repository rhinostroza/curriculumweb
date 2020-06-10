import React from 'react'
import './Index.css'
import Header from '../component/Header.jsx'
import Pannel from '../component/Pannel.jsx'
import Experiencia from '../component/Experiencia.jsx'
import Curso from '../component/Curso.jsx'
import CabeceraDetalle from '../component/CabeceraDetalle.jsx'
import Certificacion from '../component/Certificacion.jsx'
import Footer from '../component/Footer.jsx'

function Index() {
    return(
        <React.Fragment>
            <Header />
            <div className='principal_container'>
                <Pannel />
                <Experiencia />
                <CabeceraDetalle titulo='Conocimiento' detalle='Platzi' url={require('../assets/image/Platzi2x.png')}/>
                <Curso cursos = {require('../assets/cursos').default.frontend} titulo='Fontend'/>
                <Curso cursos = {require('../assets/cursos').default.backend} titulo='Backend'/>
                <Curso cursos = {require('../assets/cursos').default.otros} titulo='Otros'/>
                <Certificacion />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Index;