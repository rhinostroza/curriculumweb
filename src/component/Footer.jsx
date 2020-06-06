import React from 'react'
import './style/Footer.css'
import './responsive/FooterRes.css'

function Footer() {
    return(
        <footer>
            <div className='containerFooter'>
                <p> Elaborado el {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;