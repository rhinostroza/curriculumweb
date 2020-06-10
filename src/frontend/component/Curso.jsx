import React from 'react';
import CursoItem from './CursoItem.jsx'
import './style/Curso.css'
import './responsive/CursoRes.css'

function Cursos(props) {
    return( 
        <React.Fragment>
            <div className='cursoContainerPrincipal' id='Curso'>
                <h2 className='titulo_curso'>{props.titulo}</h2>
                <div className='container-fluid'>
                    <div className='row'>
                        {props.cursos.map(curso => ( <CursoItem {...curso}/> ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cursos;