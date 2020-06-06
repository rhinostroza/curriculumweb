import React from 'react'
import './style/CabeceraDetalle.css'
import './responsive/CabeceraDetalleRes.css'

function CabeceraDetalle(props) {
    return(
        <div className='experienciaContainerPrincipal__general'>
            <div className='experienciaContainer'>
                <h3>{props.titulo}</h3>
                <div className='experienciaContainer__image'><img src={props.url} alt=""/> </div>
                <h4>{props.detalle}</h4>
            </div>
        </div>
    );
}

export default CabeceraDetalle;