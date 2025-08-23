// components/ClientHeader.tsx
'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function ClientHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-purple-500 mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">SecureVision</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors">Features</a>
          <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors">Products</a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors">FAQ</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="bg-transparent border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 neon-glow hidden md:block">
            Get Started
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors py-2">Features</a>
            <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors py-2">Products</a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors py-2">Testimonials</a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors py-2">FAQ</a>
            <button className="bg-transparent border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 neon-glow w-full">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
