import { X, Calendar, Clock, Users, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Reservation submitted:', formData)
    alert('Reservation request submitted! We will contact you shortly.')
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-3xl font-display font-bold text-neutral-900">
            Make a Reservation
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                <Mail size={16} className="inline mr-1" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                <Phone size={16} className="inline mr-1" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                <Users size={16} className="inline mr-1" />
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                <Calendar size={16} className="inline mr-1" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                <Clock size={16} className="inline mr-1" />
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-warm focus:border-transparent outline-none transition-all resize-none"
              placeholder="Dietary restrictions, celebration notes, etc."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-secondary"
            >
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

