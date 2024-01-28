import React from 'react'

import logo from '../assets/logo/Group.png'

import '../css/header.css'

const Header = props => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Marvel" />
      </div>
    </header>
  )
}

export default Header