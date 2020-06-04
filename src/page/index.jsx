import React from 'react'
import './Index.css'
import Header from '../component/Header'
import Pannel from '../component/Pannel'
import Experiencia from '../component/Experiencia'

function Index() {
    return(
        <React.Fragment>
            <Header />
            <div className='principal_container'>
                <Pannel />
                <Experiencia />
            </div>
        </React.Fragment>
    )
}

export default Index;