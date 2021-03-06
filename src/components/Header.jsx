import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menu = [
  {
    name: 'SIGN UP1',
    to: '/',
    exact: true
  },
  {
    name: 'PRODUCTS1',
    to: '/product',
    exact: false
  },
  {
    name: 'LOGIN1',
    to: '/login',
    exact: false
  }
];

const MenuLink = ({label, to, exact}) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({match}) => {
        var active = match ? 'active' : 'none-active';
        console.log('sssss');
        return (
          <div className={acvite}>
            <Link to={to}>{label}</Link>
          </div>
        )
      }}
    />
  )
}

export default class Header extends Component {

  render(){
    return (
      <header className="header">
        <div className="header__topbar">
          <div className="header__topbar__container">
            <div className="header__topbar__logo">
              <span>DUMB</span>
              <span>DATA</span>
            </div>
            <div className="header__topbar__toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="header__topbar__search-box">
              <form className="form" action="#" name="search">
                <div className="form__group">
                  <i className="fa fa-search"></i>
                  <input className="form__input" type="text" placeholder="WHAT YOU WILL LEARN NEXT" />
                </div>
                <input className="form__button" type="submit" value="SEARCH" />
              </form>
            </div>
            <div className="header__topbar__link">
              <Link to="/product">PRODUCTS</Link>
              <Link to="/">SIGN UP</Link>
              <Link to="/login">LOGIN</Link>
            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="header__menu__container">
            <a href="#" className="menu__item menu__item-add">
              <span className="icon icon-none"></span>
              <span>SIGN UP</span>
            </a>
            <a href="#" className="menu__item menu__item-add">
              <span className="icon icon-none"></span>
              <span>SIGN IN</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__catalog"></span>
              <span>Catalog</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__series"></span>
              <span>Series</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__skills"></span>
              <span>Skill</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__podcast"></span>
              <span>Podcast</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__discuss"></span>
              <span>Discussion</span>
            </a>
          </div>
        </div>
      </header>
    )
  }

  showMenu = (menu) => {

    console.log(menu);
    var result = null;
    if (menu.length > 0) {
      console.log('zzzz');
      result = menu.map((menu, index) => {
        return(
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            exact={menu.exact}
           />
       );
      });
    }
  }
}
