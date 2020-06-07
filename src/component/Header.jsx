import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Fonts.css'
import './style/Header.css';
import './responsive/HeaderRes.css'

function handle_MostrarMenu (){
  const menu = document.getElementById('menu');
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
  }else{
    menu.classList.add('is-active');
  }
}

function Header() {
    return(
      <React.Fragment>
          <i className='icon-menu burger-button' onClick={handle_MostrarMenu}></i>
          <header>
          <div className='container-fluid header'>
            <div className='row header__row'>
              <div className='col-md-6 col-sm-12 header__logo'>
                <h1>Raphael Hinostroza</h1>
              </div>
              <div className='col-md-6 col-sm-12 header__nav'>
                <nav>
                  <ul id='menu'>
                    <li onClick={handle_MostrarMenu}>
                      <i className='icon-experiencia header_icono'></i>    
                      <a href='#Experiencia'>Experiencia</a></li>
                    <li onClick={handle_MostrarMenu}>
                      <i className='icon-curso header_icono'></i>
                      <a href='#conocimiento'>Conocimiento</a>
                    </li>
                    <li onClick={handle_MostrarMenu}>
                      <i className='icon-certificacion header_icono'></i>
                      <a href='#certificacion'>Certificaciones</a>
                    </li>
                    {/* <li onClick={handle_MostrarMenu}><a href=''>Portafolio</a></li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
}

export default Header;