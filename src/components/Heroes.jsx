// components/HeroList.js
import React, { useEffect, useState } from "react"
import { getHeroes, getHeroesByName } from "../api/characterHeroes"
import { SearchForm } from "./Search"
import { CardSearch } from "./CardSearch"
import Pagination from "./Pagination"
import "../css/listHeroes.css"

const HeroList = () => {
  const [heroesList, setHeroes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const heroesToPage = 20

  useEffect(() => {
    fetchHeroes(currentPage)
  }, [currentPage])

  const fetchHeroes = async (page) => {
    try {
      const fetchedHeroes = await getHeroes((page - 1) * 5, heroesToPage)
      setHeroes(fetchedHeroes.results)
      setTotalPages(Math.ceil(fetchedHeroes.total / 5))
      console.log(fetchedHeroes)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearch = async (searchHeroe) => {
    if (searchHeroe == "") {
      fetchHeroes(currentPage)
      return
    }
    try {
      const fetchedHeroes = await getHeroesByName(searchHeroe)
      setHeroes(fetchedHeroes.results)
      setTotalPages(Math.ceil(fetchedHeroes.total / 5))
      console.log(fetchedHeroes)
    } catch (error) {
      console.log("error", searchHeroe)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="search-forms">
        <SearchForm onSearch={handleSearch} />
      </div>
      <CardSearch heroes={heroesList} />
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}

export default HeroList
