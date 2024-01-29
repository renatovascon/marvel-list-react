// CardSearch.js
import React, { useEffect, useState } from "react"
import heart from "../assets/icones/heart/Path Copy 2.png"
import heartFilled from "../assets/icones/heart/Path Copy 7@1,5x.png"

export function CardSearch({ heroes }) {
  const [loaded, setLoaded] = useState(false)
  const [selectedCards, setSelectedCards] = useState([])

  useEffect(() => {
    if (heroes && heroes.length > 0) {
      setLoaded(true)
    }
  }, [heroes])

  const handleCardSelect = (heroId) => {
    // Verifica se o card já está selecionado
    if (selectedCards.includes(heroId)) {
      // Remove o card da lista de selecionados
      setSelectedCards((prevSelectedCards) =>
        prevSelectedCards.filter((id) => id !== heroId)
      )
    } else {
      // Adiciona o card à lista de selecionados
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, heroId])
    }
  }
  return (
    <>
      {loaded && (
        <div className="list-heroes">
          <h5>Encontrado um total de {heroes.length} heróis</h5>
          <ul className="heroes-grid">
            {heroes.map((hero) => (
              <li
                key={hero.id}
                className={`hero-item ${
                  selectedCards.includes(hero.id) ? "selected" : ""
                }`}
              >
                <div className="search-list">
                  <img
                    src={
                      hero.thumbnail.path +
                      "/standard_xlarge." +
                      hero.thumbnail.extension
                    }
                    alt={hero.name}
                    className="hero-image"
                  />
                  <div className="info">
                    <span>{hero.name}</span>
                    <img
                      src={
                        selectedCards.includes(hero.id) ? heartFilled : heart
                      }
                      alt={hero.name}
                      onClick={() => handleCardSelect(hero.id)} // Adiciona evento de clique
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
