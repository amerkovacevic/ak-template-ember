import { useState } from 'react'
import { Printer } from 'lucide-react'
import { menuItems } from '../data'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters')
  const categories = ['starters', 'mains', 'desserts']

  const handlePrint = () => {
    window.print()
  }

  const getCategoryLabel = (category) => {
    const labels = {
      starters: 'Starters',
      mains: 'Main Courses',
      desserts: 'Desserts',
    }
    return labels[category]
  }

  const currentItems = menuItems[activeCategory] || []

  return (
    <section id="menu" className="section-padding bg-white print-friendly">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 no-print">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Carefully crafted dishes using the finest ingredients
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 no-print">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-warm text-white shadow-lg scale-105'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Print Button */}
        <div className="flex justify-end mb-6 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors"
          >
            <Printer size={20} />
            Print Menu
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-neutral-900 group-hover:text-amber-warm transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-warm">
                    ${item.price}
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Print-only section */}
        <div className="hidden print:block mt-12">
          <h3 className="text-3xl font-display font-bold mb-6">
            {getCategoryLabel(activeCategory)}
          </h3>
          <div className="space-y-6">
            {currentItems.map((item) => (
              <div key={item.id} className="border-b border-neutral-300 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">{item.name}</h4>
                  <span className="text-xl font-bold">${item.price}</span>
                </div>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

