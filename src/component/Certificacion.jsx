import React from 'react'
import CabeceraDetalle from '../component/CabeceraDetalle'
import './style/Certificacion.css'

function Certificacion (){
    return(
        <div className='certificacionContainerPrincipal'>

            <CabeceraDetalle titulo='Certificación' url={require('../assets/image/Certificaciones2x.png')}/>

            <div className='certificacionContainerPrincipal__image'>
                <img src={require('../assets/image/Iso.png')} alt=""/>               
            </div>
        </div>
    )
}

export default Certificacion;