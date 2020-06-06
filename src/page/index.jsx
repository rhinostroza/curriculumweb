import React from 'react'
import './Index.css'
import Header from '../component/Header'
import Pannel from '../component/Pannel'
import Experiencia from '../component/Experiencia'
import Curso from '../component/Curso'
import CabeceraDetalle from '../component/CabeceraDetalle'
import Certificacion from '../component/Certificacion'
import Footer from '../component/Footer'

function Index() {
    return(
        <React.Fragment>
            <Header />
            <div className='principal_container'>
                <Pannel />
                <Experiencia />
                <div id='conocimiento'>
                    <CabeceraDetalle titulo='Conocimiento' detalle='Platzi' url={require('../assets/image/Platzi2x.png')}/>
                    <Curso cursos = {require('../assets/cursos').default.frontend} titulo='Fontend'/>
                    <Curso cursos = {require('../assets/cursos').default.backend} titulo='Backend'/>
                    <Curso cursos = {require('../assets/cursos').default.otros} titulo='Otros'/>
                </div>
                <Certificacion />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Index;