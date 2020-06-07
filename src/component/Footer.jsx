import React from 'react'
import './style/Footer.css'
import './responsive/FooterRes.css'

function Footer() {
    return(
        <footer className='containerFooter'>
            <div className='container-fluid containerFooter__principal'>
                <div className='row containerFooter__row'>
                    <div className='col-12 col-md-6 containerFooter__year'>
                        <p> Elaborado el {new Date().getFullYear()}</p>
                    </div>
                    <div className='col-12 col-md-6 containerFooter__social'>
                        <a href="https://github.com/rhinostroza" target='_blank'>
                            <i className='icon-github'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/raphael-hinostroza-376bb6a4/" target='_blank'>
                            <i className='icon-linkedin'></i>
                        </a>                     
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;