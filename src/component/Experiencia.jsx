import React from 'react'
import CabeceraDetalle from '../component/CabeceraDetalle'
import './style/Experiencia.css'

function Experiencia (){
    return(
        <div className='experienciaContainerPrincipal'>

            <CabeceraDetalle titulo='Experiencia' detalle='Deloitte' url={require('../assets/image/Deloitte2x.png')}/>

            <div>
                <div className='container-fluid experienciaDetalle'>
                    <div className='row'>
                        <div className='col-6 experienciaDetalle_izquiera'>
                            <div>
                                <p>Cuento con
                                <span> 2 años y medio </span>
                                de experiencia como especialista de TI en el área de asesoramiento de riesgos
                                </p>
                            </div>
                        </div>
                        <div className='col-6 experienciaDetalle_derecha'>
                            <div>
                                <p>Realizando...</p>
                                <p>Evaluación de controles generales de TI</p>
                                <p>Ejecución de eficacia operativa de controles generales de TI</p>
                                <p>Indagación de información referente a los controles implementados.</p>
                                <p>Ejecución de pruebas de integridad y reconciliación de datos financieros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencia;