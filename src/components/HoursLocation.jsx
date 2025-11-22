import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { hours, location } from '../data'

export default function HoursLocation() {
  return (
    <section id="contact" className="section-padding bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-amber-warm" size={32} />
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Hours
              </h2>
            </div>
            <div className="space-y-3">
              {hours.map((day, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-neutral-700 last:border-0"
                >
                  <span className="font-semibold text-lg">{day.day}</span>
                  <span className="text-neutral-300">{day.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-amber-warm" size={32} />
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Location
              </h2>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-warm mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">{location.address}</p>
                  <p className="text-neutral-300">{location.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-warm flex-shrink-0" size={20} />
                <a
                  href={`tel:${location.phone}`}
                  className="text-neutral-300 hover:text-amber-warm transition-colors"
                >
                  {location.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-amber-warm flex-shrink-0" size={20} />
                <a
                  href={`mailto:${location.email}`}
                  className="text-neutral-300 hover:text-amber-warm transition-colors"
                >
                  {location.email}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ember Eatery Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

