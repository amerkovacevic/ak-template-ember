import { crew } from '../data'

export default function ChefCrew() {
  return (
    <section id="crew" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            The talented chefs and staff who bring Ember Eatery to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {crew.map((member) => (
            <div
              key={member.id}
              className="group text-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-1 group-hover:text-amber-warm transition-colors">
                  {member.name}
                </h3>
                <p className="text-amber-warm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

