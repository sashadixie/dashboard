import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Layout from './Layout/Layout';
import Header from './Header/Header';
//import NotFound from './NotFound/NotFound';
import Payment from './Payment/Payment';
import Profile from './Profile/Profile';
import Exit from './Exit/Exit';
import { Route } from 'react-router-dom';
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          path: '/',
          component: Layout,
          exact: true,
          name: 'Просмотр состояния'
        },
        {
          path: '/payment',
          component: Payment,
          name: 'Способ оплаты'
        },
        {
          path: '/profile',
          component: Profile,
          name: 'Настройки профиля'
        },
        {
          path: '/exit',
          component: Exit,
          name: 'Выйти'
        },
      ],
      link: '/'
    };
  }

  toggleActive = e => {
    const {link} = e.target.dataset;

    this.setState({
      link
    })
  }

  render() {
    const {links, link} = this.state;
    const {historyLink} = this.props; 

    return (
      <div>
        <Header onTabClick={this.toggleActive} links={links} link={historyLink ? historyLink : link} />
        <div className='appContainer'>
          {links.map(link => <Route key={link.path} path={link.path} exact={link.exact} component={link.component} />)}
        </div>
      </div>
    );
  }
}

export default withRouter(Container);
