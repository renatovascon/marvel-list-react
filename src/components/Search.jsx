import React, { useState } from "react"
import searchIcon from "../assets/busca/Lupa/Shape.png"
import "../css/listHeroes.css"

export function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    onSearch(searchTerm)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm)
    }
  }

  return (
    <div className="form-container">
      <img
        src={searchIcon}
        alt="Search icon"
        className="search-icon"
        onClick={handleSearchClick}
      />
      <input
        className="form-search"
        type="text"
        placeholder="Procure por heróis"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}
