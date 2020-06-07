import React from 'react'
import './style/CursosItem.css'
import './responsive/CursoItemRes.css'

// function handle_MostrarDetalle(id, nombre, descripcion){
//     const $element = document.getElementById(`${id}`)
//     const $nombre = document.getElementById(`${nombre}`)
//     const $descripcion = document.getElementById(`${descripcion}`)

   
// }

function handle_OcultarDetalle(id, nombre, descripcion){
    const $element = document.getElementById(`${id}`)
    const $nombre = document.getElementById(`${nombre}`)
    const $descripcion = document.getElementById(`${descripcion}`)

    if($element.style.animationName !== 'girar50' && $element.style.animationName !== 'girar100' ){
        $element.style.animationName = 'girar50'
        $element.style.animationDuration = '1s';
        
        $element.addEventListener('animationend', (event) => {
            $nombre.classList.add('ocultar')
            $descripcion.classList.remove('ocultar')   
            
            $element.style.animationName = 'girar100'
            $element.style.animationDuration = '1s';
        })

        return 0
    }

    if($element.style.animationName !== 'girar150' && $element.style.animationName !== 'girar200' ){

        $element.style.animationName = 'girar150'
        $element.style.animationDuration = '1s';
    
        $element.addEventListener('animationend', (event) => {
            $descripcion.classList.add('ocultar')  
            $nombre.classList.remove('ocultar') 
            
            $element.style.animationName = 'girar200'
            $element.style.animationDuration = '1s';   
        })

        return 0
    }

    
}

function CursoItem(props) {

    return(
        <div className='col-lg-2 col-md-3 col-6 pb-3 pb-lg-0 cursosItem' 
        id={props.id} 
        // onMouseOver={() => handle_MostrarDetalle(props.id, props.nombre, props.descripcion)}
        onClick={() => handle_OcultarDetalle(props.id, props.nombre, props.idDes)}
        >
            <div className='cursosItem_container'>
                <div className='cursosItem_img'>
                    <img src={props.imagen} id={props.nombre} alt=""/>
                </div>
                <div className='cursosItem_detalle ocultar' id={props.idDes}>
                    <p>{props.descripcion}</p>
                </div>
            </div>
            <div className='cursosItem_icon'>
                <i className='icon-reply'></i>
            </div>
        </div>
    )
}

export default CursoItem;