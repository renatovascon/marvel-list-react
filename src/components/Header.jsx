import React from "react"

import logo from "../assets/logo/Group.png"

import "../css/header.css"

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Marvel" />
      </div>
      <h1>Explore O Universo</h1>
      <p>Mergulhe no domonio deslumbrante de todos os personagensque voce ama</p>
    </header>
  )
}

export default Header
