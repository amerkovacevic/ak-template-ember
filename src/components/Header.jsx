import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header({ onReserveClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Our Team', href: '#crew' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className={`text-3xl font-display font-bold transition-colors ${
              isScrolled
                ? 'text-neutral-900 hover:text-amber-warm'
                : 'text-white hover:text-amber-warm'
            }`}
          >
            Ember Eatery
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-semibold transition-colors ${
                  isScrolled
                    ? 'text-neutral-700 hover:text-amber-warm'
                    : 'text-white hover:text-amber-warm'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onReserveClick}
              className={isScrolled ? 'btn-primary' : 'btn-secondary'}
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden pb-6 animate-slide-down ${
            isScrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-sm rounded-lg mt-4'
          }`}>
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold transition-colors py-2 px-4 ${
                    isScrolled
                      ? 'text-neutral-700 hover:text-amber-warm'
                      : 'text-white hover:text-amber-warm'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onReserveClick()
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full mt-4 mx-4 ${
                  isScrolled ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

