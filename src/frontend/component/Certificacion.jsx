import React from 'react'
import CabeceraDetalle from '../component/CabeceraDetalle.jsx'
import './style/Certificacion.css'
import './responsive/CertificacionRes.css'

function Certificacion (){
    return(
        <div className='certificacionContainerPrincipal' id='certificacion'>

            <CabeceraDetalle titulo='Certificación' url={require('../assets/image/Certificaciones2x.png')}/>

            <div className='certificacionContainerPrincipal__image'>
                <img src={require('../assets/image/certificacion.png')} alt=""/>               
            </div>
        </div>
    )
}

export default Certificacion;