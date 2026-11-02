
import { Mail, MapPin } from 'lucide-react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#3B2418] px-6 pt-20 pb-8 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="mb-5 text-3xl font-bold">
              MAISON.
            </h2>

            <p className="max-w-xs leading-relaxed text-[#D5C4B4]">
              More than coffee. A daily ritual.
              Crafted with passion, served with love.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Explore
            </h3>

            <ul className="space-y-4 text-[#D5C4B4]">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-white">
                  Why Us
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-white">
                  Membership
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-[#D5C4B4]">
              <div className="flex items-start gap-3">
                <Mail size={20} className="shrink-0" />

                <a
                  href="mailto:hello@maisoncoffee.com"
                  className="hover:text-white"
                >
                  hello@maisoncoffee.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0" />
                <span>California, USA</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Follow Us
            </h3>

            <p className="mb-5 text-[#D5C4B4]">
              Stay connected with MAISON.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-[#D5C4B4] p-3 transition-colors hover:bg-white hover:text-[#3B2418]"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-[#D5C4B4] p-3 transition-colors hover:bg-white hover:text-[#3B2418]"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-[#795C47] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#D5C4B4] md:flex-row">
            <p>
              © {new Date().getFullYear()} MAISON COFFEE.
              All rights reserved.
            </p>

            <p>
              Crafted with care. Made for moments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
