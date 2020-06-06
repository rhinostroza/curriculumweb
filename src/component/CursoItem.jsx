import React from 'react'
import './style/CursosItem.css'
import './responsive/CursoItemRes.css'

function CursoItem(props) {
    return(
        <div className='col-lg-2 col-md-3 col-6 pb-3 pb-lg-0 cursosItem' key={props.nombre}>
            <img src={props.imagen} alt=""/>
        </div>
    )
}

export default CursoItem;