import React from 'react';
import './HeaderSection.css';
import imagesList from './HeaderData';
import textData from './TextData';
import Modal from 'react-modal';

function HeaderSection(props) {

    return (
        <section className='section-container'>
            <section className='grid-container'>

                {/* Render a container with img for each collection in imagesList */}
                {imagesList.map((collection, index) => {
                    return (
                        <article className={index ? "grid-item" : "grid-item big-image"} key={collection.default}>
                            <img src={collection.image} alt={collection.default} onClick={() => props.openModal(collection.imageLg)} />
                        </article>
                    )
                })}

                {/* Text Section. Data imported from TextData.js */}
                <section className='grid-item text-container'>
                    <article className='main-container'>
                        <h2 className='main-title'>{textData.mainTitle}</h2>
                        <p className='main-text'>{textData.mainText}</p>
                    </article>
                    <article className='tips-container'>
                        <h3 className='tips-title red-font'>{textData.tipsTitle}</h3>
                        <p className='tips-text'>{textData.tipsText}</p>
                    </article>
                </section>

                {/* Modal component imported from react-modal */}
                <Modal
                    isOpen={props.modalIsOpen}
                    onRequestClose={props.closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <div className="modal-content">
                        <button className="close-button" onClick={props.closeModal}>
                            <span>&times;</span>
                        </button>
                        {props.selectedImage && <img src={props.selectedImage} alt="Large Image" className="modal-image" />}
                    </div>
                </Modal>
            </section>
        </section>
    );
}

export default HeaderSection;