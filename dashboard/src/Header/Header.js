import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.sass';

class Header extends Component {
  render() {
    const {onTabClick, links, link} = this.props;

    return (
      <header>
        <div className='topHeader'>
          <div className='logo'>
            <img src='logo.png'/>
          </div>
          <div className='userInfo'>
            <img src='userpic.png' />
            <div className='userInfo__static'>
              <div>Тестовый Пользователь Сын-Своего-Отца</div>
              <div>Лицевой счёт № 1337228</div>
            </div>
            <i className='material-icons'>exit_to_app</i>
          </div>
        </div>
        <ul className='sideBar'>
        {
          links.map(item => {
            return (
              <li className={`sideBar__link ${item.path === link ? 'active' : ''}`} data-link='/' onClick={onTabClick}>
                <Link exact={item.exact} to={item.path} data-link={item.path}>
                  {item.name}
                </Link>
              </li>
            );
          })
        }
        </ul>
      </header>
    );
  }
}

export default Header;
