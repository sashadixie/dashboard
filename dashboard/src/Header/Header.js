import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';

class Header extends Component {
  render() {
    const {onTabClick, links, link} = this.props;

    return (
      <header>
        <div className='topHeader'>
          <div className='logo'>
            <img alt='Zatymenka' src='logo.png'/>
          </div>
          <div className='userInfo'>
            <img alt='avatar' src='userpic.png' />
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
              <li className={`sideBar__link ${item.path === link ? 'active' : ''}`} key={`link${item.path}`} data-link='/' onClick={onTabClick}>
                <Link exact={item.exact} to={item.path}  data-link={item.path}>
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
