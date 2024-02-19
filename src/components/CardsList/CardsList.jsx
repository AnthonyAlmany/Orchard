import React from 'react'
import './CardsList.css'
import cardsData from "./CardsData"

function CardsList() {
    return (
        <div className='component-wrapper'>
            <h1>ALL THE LATEST FROM AEG</h1>
            <div className='cards-container'>
                {cardsData.map(card => {
                    return (
                        <div className='card' key={card.ref}>
                            <div className='card-image'> <img src={card.image} alt={card.title} /> </div>
                            <div className='card-text'>
                                <h3>{card.title}</h3>
                                <h5>{card.description}</h5>
                            </div>
                            <div className='card-readmore'>
                                <h3>READ MORE</h3>
                            </div>
                        </div>
                    )

                })}
            </div>

        </div>

    )
}

export default CardsList