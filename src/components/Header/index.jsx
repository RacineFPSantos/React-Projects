import React from 'react';

import Logo from '../../img/logo.svg';

const Header = () => (
  <header>
    <div className="header-for-layout">
      <img src={Logo} alt="Logo" className="logo" />
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Todos</a></li>
        </ul>
      </nav>
    </div>

    <a href="/"><button type="button" className="contact-btn">Contato</button></a>
  </header>
);

export default Header;
