import HeaderSection from './components/HeaderSection/HeaderSection'
import CardsList from './components/CardsList/CardsList'
import "../src/app.css"
import { useState } from 'react';

function App() {
  // Modal handlers
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <main className='app'>
      <HeaderSection
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        openModal={openModal}
        closeModal={closeModal}
      />

      <CardsList />
    </main>
  )
}

export default App
