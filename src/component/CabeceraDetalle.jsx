import React from 'react'
import logoDeloitte from '../assets/image/Deloitte2x.png'

function CabeceraDetalle() {
    return(
        <div className='experienciaContainerPrincipal__general'>
            <div className='experienciaContainer'>
                <h3>Experiencia</h3>
                <div className='experienciaContainer__image'><img src={logoDeloitte} alt=""/> </div>
                <h4>Deloitte</h4>
            </div>
        </div>
    );
}

export default CabeceraDetalle;