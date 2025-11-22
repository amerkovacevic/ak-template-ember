import { Calendar } from 'lucide-react'

export default function Hero({ onReserveClick }) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg">
          Ember Eatery
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-shadow">
          Where Culinary Art Meets Warm Hospitality
        </p>
        <p className="text-lg md:text-xl mb-10 text-shadow max-w-2xl mx-auto">
          Experience exceptional cuisine crafted with passion and served in an
          atmosphere of refined elegance
        </p>
        <button
          onClick={onReserveClick}
          className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-3 group"
        >
          <Calendar className="group-hover:scale-110 transition-transform" />
          Reserve Your Table
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

