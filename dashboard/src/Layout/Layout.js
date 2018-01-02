import React, { Component } from 'react';
import Header from '../Header/Header';
import SubHeader from '../Header/SubHeader';
import Balance from '../Widgets/Balance';
import Rate from '../Widgets/Rate';
import Speed from '../Widgets/Speed';
import Downloads from '../Widgets/Downloads';

class Layout extends Component {
  render() {
    return (
      <div className='wrap'>
        <Header />
        <SubHeader />
        <div className='widgets'>
          <Balance />
          <Rate />
          <Speed />
          <Downloads />
        </div>
      </div>
    );
  }
}

export default Layout;
