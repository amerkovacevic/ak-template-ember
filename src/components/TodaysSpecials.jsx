import { Sparkles } from 'lucide-react'
import { todaysSpecials } from '../data'

export default function TodaysSpecials() {
  return (
    <section className="bg-gradient-to-r from-amber-warm to-orange-deep text-white py-6 overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="text-white animate-pulse" size={24} />
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Today's Specials
            </h2>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-12">
            {todaysSpecials.map((special) => (
              <div
                key={special.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4"
              >
                <div>
                  <h3 className="font-bold text-lg">{special.name}</h3>
                  <p className="text-sm opacity-90">{special.description}</p>
                </div>
                <div className="text-xl font-bold">${special.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

