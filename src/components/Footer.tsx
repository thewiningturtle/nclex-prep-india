import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-xl">NCLEX India</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner for NCLEX success. Expert coaching to help you achieve your dream of nursing in the US or Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors text-sm">
                  About NCLEX
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>NCLEX-RN Review</li>
              <li>NCLEX-PN Coaching</li>
              <li>Live Classes</li>
              <li>Recorded Sessions</li>
              <li>Practice Tests</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-100 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-blue-100 text-sm">info@nclexindia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © 2024 NCLEX India Coaching. All rights reserved. | Designed for success in US & Canada nursing careers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;