import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 lg:space-x-4">
          <div className="space-y-4 lg:flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 hover:underline">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900 hover:underline">Careers</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900 hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4 lg:flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/web-design" className="text-gray-600 hover:text-gray-900 hover:underline">Web Design</a></li>
              <li><a href="/services/development" className="text-gray-600 hover:text-gray-900 hover:underline">Development</a></li>
              <li><a href="/services/consulting" className="text-gray-600 hover:text-gray-900 hover:underline">Consulting</a></li>
            </ul>
          </div>
          <div className="space-y-4 lg:flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900 hover:underline">Blog</a></li>
              <li><a href="/docs" className="text-gray-600 hover:text-gray-900 hover:underline">Documentation</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-gray-900 hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-4 lg:flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}