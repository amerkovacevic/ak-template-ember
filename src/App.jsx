import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TodaysSpecials from './components/TodaysSpecials'
import Menu from './components/Menu'
import PhotoGallery from './components/PhotoGallery'
import ChefCrew from './components/ChefCrew'
import HoursLocation from './components/HoursLocation'
import ReservationModal from './components/ReservationModal'

function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  const handleReserveClick = () => {
    setIsReservationModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsReservationModalOpen(false)
  }

  return (
    <div className="min-h-screen">
      <Header onReserveClick={handleReserveClick} />
      <Hero onReserveClick={handleReserveClick} />
      <TodaysSpecials />
      <Menu />
      <PhotoGallery />
      <ChefCrew />
      <HoursLocation />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App

