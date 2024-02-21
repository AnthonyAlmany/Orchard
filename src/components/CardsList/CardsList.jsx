import React from 'react';
import './CardsList.css';
import cardsData from "./CardsData";
import Modal from 'react-modal';

// Set the app element fixing modal issue
Modal.setAppElement('#root');

function CardsList(props) {

    // Event handler for "READ MORE" link click
    const handleAnchorClick = (event) => {
        console.log(event.target)
    };

    return (
        <section className='component-wrapper'>
            <h1>ALL THE LATEST FROM AEG</h1>
            <ul className='cards-container'>
                {/* Create a card for each object in CardsData.js */}
                {cardsData.map(card => {
                    return (
                        <li id={card.ref} className='card' key={card.ref}>
                            <div className='card-image'>
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className='card-text'>
                                <h3>{card.title}</h3>
                                <h5>{card.description}</h5>
                            </div>
                            <div className='card-readmore'>
                                <a href={`#${card.ref}`} onClick={(e) => handleAnchorClick(e)}><h3 className={card.ref}>READ MORE</h3></a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CardsList;
