import React, { useState } from 'react';
import './CardsList.css';
import cardsData from "./CardsData";
import Modal from 'react-modal';

// Set the app element
Modal.setAppElement('#root'); // Assuming '#root' is the ID of the root element in your HTML

function CardsList() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal with a specific image
    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    // Event handler for "READ MORE" link click
    const handleAnchorClick = (event) => {
        console.log(event);
    };

    return (
        <div className='component-wrapper'>
            <h1>ALL THE LATEST FROM AEG</h1>
            <div className='cards-container'>
                {cardsData.map(card => {
                    return (
                        <div className='card' key={card.ref}>
                            <div className='card-image'>
                                <img src={card.image} alt={card.title} onClick={() => openModal(card.imageLg)} />
                            </div>
                            <div className='card-text'>
                                <h3>{card.title}</h3>
                                <h5>{card.description}</h5>
                            </div>
                            <div className='card-readmore'>
                                <a href={`#${card.ref}`} onClick={() => handleAnchorClick(card.ref)}><h3>READ MORE</h3></a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Image Modal"
            >
                {/* <button onClick={closeModal}>Close Modal</button> */}
                <div className='modal-content'>
                    <button className="close-button" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                    {selectedImage && (
                        <img src={selectedImage} className="modal-image" />
                    )}
                </div>

            </Modal>
        </div>
    )
}

export default CardsList;
