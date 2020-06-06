import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Header.css';
import './responsive/HeaderRes.css'

function Header() {
    return(
        <header>
        <div className='container-fluid header'>
          <div className='row header__row'>
            <div className='col-md-6 col-sm-12 header__logo'>
              <h1>Raphael Hinostroza</h1>
            </div>
            <div className='col-md-6 col-sm-12 header__nav'>
              <nav>
                <ul>
                  <li><a href='#Experiencia'>Experiencia</a></li>
                  <li><a href='#conocimiento'>Conocimiento</a></li>
                  <li><a href='#certificacion'>Certificaciones</a></li>
                  <li><a href='/'>Portafolio</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;