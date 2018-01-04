import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='topHeader'>
          <div className='logo'>logo</div>
          <div className='userInfo'>user pic and stuff</div>
        </div>
        <ul>
          <li>
            <Link exact to='/'>
              Просмотр состояния
            </Link>
          </li>
          <li>
            <Link to='/payment'>
              Способы оплаты
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              Настройки профиля
            </Link>
          </li>
          <li>
            <Link to='/exit'>
              Выйти
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
