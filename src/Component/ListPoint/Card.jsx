import React from 'react'
import './Card.scss'
import Data from '../Data/Data'


function Card() {
  return (
    <>
      <div className="Card-Container">
        <div className="cards">
          {
            Data.map((value, i) => {
              return (
                <div key={i} className="card">
                  <h1>{value.title}</h1>
                  <p>{value.description}</p>
                  <button>Get Started</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Card