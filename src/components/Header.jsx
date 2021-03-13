import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const LogoUrl = '../images/';
  return (
    <header>
      <h1><img src={`${LogoUrl}MainLogo.svg`} alt="Logo" /></h1>
      <form>
        <label>
          검색
          <input type="text" name='keyword' />
        </label>
      </form>
      <ul>
        <li><Link to="/mypage">마이페이지</Link></li>
        <li><Link to="/meeting">모임개설</Link></li>
      </ul>

    </header>
  );
}

export default Header;