import React, { Component } from 'react';
//import Header from '../Header/Header';
//import SubHeader from '../Header/SubHeader';
//import Balance from '../Widgets/Balance';
//import Rate from '../Widgets/Rate';
//import Speed from '../Widgets/Speed';
//import Downloads from '../Widgets/Downloads';
import axios from 'axios';

class Layout extends Component {
  render() {
    axios({
      method: 'post',
      url: '/statapi.php',
      data: {
        f: 'login',
        account: '704070',
        password: '142536978246'
      }
    }).then(response => {
      console.log(response);
    });
    return (
      <div className='layout'>
       layout?
      </div>
    );
  }
}

export default Layout;
