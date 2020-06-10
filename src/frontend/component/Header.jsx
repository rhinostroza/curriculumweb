import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Header.css';

function Header() {
    return(
        <header>
        <div className='container-fluid header'>
          <div className='row header__row'>
            <div className='col-6 header__logo'>
              <h1>Raphael Hinostroza</h1>
            </div>
            <div className='col-6 header__nav'>
              <nav>
                <ul>
                  <li><a href='/'>Experiencia</a></li>
                  <li><a href='/'>Conocimiento</a></li>
                  <li><a href='/'>Certificaciones</a></li>
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