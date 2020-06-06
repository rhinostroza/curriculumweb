import React from 'react';
import RH from '../assets/image/Raphael_Hinostroza2x.png'
import './style/Pannel.css'
import './responsive/PannelRes.css'

function Pannel() {
    return(
        <div className='container-fluid pannelContainer'>
            <div className='row pannelContainer__row'>
                <div className='col-sm-12 col-md-6 pb-4 pb-sm-0 pannelContainer__img'>
                    <img src={RH} alt=""/>
                </div>
                <div className='col-sm-12 col-md-6 pannelContainer__detalle'>
                    <div className='pannelContainer__detalle-detalle'>
                        <h2>Raphael es ...</h2>
                        <p>Ingeniero de Sistemas de Información de titulado en la UPC. 
                        <span> Amante de la tecnología </span>y del 
                        <span>conocimiento,</span> aprendiendo continuamente
                        </p>
                    </div>                 
                </div>
            </div>
        </div>
    );
}

export default Pannel;