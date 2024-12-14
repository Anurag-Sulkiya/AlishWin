// src/components/common/Footer.jsx
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Reach at Section */}
          <div>
            <h3 className="text-2xl mb-6">Reach at..</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>Location</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>Call +01 1234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>demo@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="hover:text-emerald-300">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="hover:text-emerald-300">
                  <Twitter size={24} />
                </Link>
                <Link href="#" className="hover:text-emerald-300">
                  <Linkedin size={24} />
                </Link>
                <Link href="#" className="hover:text-emerald-300">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-2xl mb-6">About</h3>
            <p className="text-white/80 leading-relaxed">
              Beatae provident nobis mollitia magnam voluptatum, unde dicta
              facilis minima veniam corporis laudantium alias tenetur eveniet
              illum reprehenderit fugit a delectus officiis blanditiis ea.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-2xl mb-6">Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block hover:text-emerald-300">
                Home
              </Link>
              <Link href="/about" className="block hover:text-emerald-300">
                About
              </Link>
              <Link href="/departments" className="block hover:text-emerald-300">
                Departments
              </Link>
              <Link href="/doctors" className="block hover:text-emerald-300">
                Doctors
              </Link>
              <Link href="/contact" className="block hover:text-emerald-300">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-2xl mb-6">Newsletter</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center space-y-2">
          <p>© 2024 All Rights Reserved By Free Html Templates</p>
          <p>© Distributed By ThemeWagon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;