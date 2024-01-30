// CardSearch.js
import React, { useEffect, useState } from "react"
import heart from "../assets/icones/heart/Path Copy 2.png"
import heartFilled from "../assets/icones/heart/Path Copy 7@1,5x.png"

export function CardSearch({ heroes, onShowSelectedHeroes }) {
  const [loaded, setLoaded] = useState(false)
  const [selectedCards, setSelectedCards] = useState([])

  useEffect(() => {
    if (heroes && heroes.length > 0) {
      setLoaded(true)
    }
  }, [heroes])

  const handleCardSelect = (heroId) => {
    if (selectedCards.includes(heroId)) {
      setSelectedCards((prevSelectedCards) =>
        prevSelectedCards.filter((id) => id !== heroId)
      )
    } else {
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, heroId])
    }
  }

  return (
    <>
      {loaded && (
        <div className="list-heroes">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h5 style={{ width: "100%" }}>
              Encontrado um total de {heroes.length} heróis
            </h5>
            <div style={{ display: "flex", width: "100%" }}>
              <picture>
                <img
                  src={heartFilled}
                  onClick={() => onShowSelectedHeroes(selectedCards)}
                />
              </picture>
              <p>Somente Favoritos</p>
            </div>
          </div>
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
                    src={`${hero.thumbnail.path}/standard_xlarge.${hero.thumbnail.extension}`}
                    alt={hero.name}
                    className="hero-image"
                  />
                  <div className="info">
                    <span>{hero.name}</span>
                    <picture>
                      <img
                        src={
                          selectedCards.includes(hero.id) ? heartFilled : heart
                        }
                        alt={hero.name}
                        onClick={() => handleCardSelect(hero.id)}
                      />
                    </picture>
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
