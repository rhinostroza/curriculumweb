import React from 'react'
import './style/CursosItem.css'

function CursoItem(props) {
    return(
        <div className='col-2 cursosItem'> 
            <img src={props.imagen} alt=""/>
        </div>
    )
}

export default CursoItem;