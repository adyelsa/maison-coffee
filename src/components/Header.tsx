
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#F5F0E8] border-b border-[#E5D9CA]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[#3B2418]">
          MAISON.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-[#3B2418] hover:opacity-60">
            Home
          </a>
          <a href="#features" className="text-[#3B2418] hover:opacity-60">
            Why Us
          </a>
          <a href="#pricing" className="text-[#3B2418] hover:opacity-60">
            Membership
          </a>
          <a href="#contact" className="text-[#3B2418] hover:opacity-60">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-2xl text-[#3B2418]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Membership</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header
