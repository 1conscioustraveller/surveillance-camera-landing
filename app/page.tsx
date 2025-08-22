// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { PlaceholderRobot } from '@/components/ui/placeholder-robot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Camera, Eye, Zap, Check, Play, Star, Menu, X } from 'lucide-react'; //Removed ArrowRight

//const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const features = [
    {
      icon: <Camera className="h-10 w-10 text-purple-500" />,
      title: "4K Ultra HD Resolution",
      description: "Crystal clear footage with our advanced 4K cameras, day or night."
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "AI Motion Detection",
      description: "Smart algorithms that distinguish between people, animals, and vehicles."
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: "Military-Grade Encryption",
      description: "Your footage is secure with end-to-end encryption and cloud storage."
    },
    {
      icon: <Eye className="h-10 w-10 text-purple-500" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance with real-time alerts to your devices."
    }
  ];

  const products = [
    {
      name: "Home Security Kit",
      price: "$499",
      description: "Complete system for your home with 4 cameras and central hub",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["4K Camera x4", "Night Vision", "Mobile App", "Cloud Storage"]
    },
    {
      name: "Business Surveillance",
      price: "$1,299",
      description: "Enterprise-grade system with 8 cameras and advanced analytics",
      image: "https://images.unsplash.com/photo-1566669437686-9c5c43669f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["8K Camera x8", "AI Analytics", "Remote Access", "24/7 Support"]
    },
    {
      name: "Outdoor Security Pack",
      price: "$799",
      description: "Weatherproof cameras designed for outdoor use with night vision",
      image: "https://images.unsplash.com/photo-1594122230685-c36c2c8ee6be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Weatherproof", "Night Vision", "Wide Angle", "Motion Alerts"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The peace of mind I get from SecureVision is priceless. The AI detection is incredibly accurate and the video quality is stunning.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "As a business owner, security is paramount. SecureVision's system has helped us prevent theft and monitor operations seamlessly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      content: "Managing multiple properties has never been easier. The remote access feature allows me to check on all locations from my phone.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
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
            <button className="
              bg-transparent 
              border-2 
              border-purple-500 
              text-purple-500 
              px-4 
              py-2 
              rounded-lg 
              font-semibold
              transition-all
              duration-300
              hover:bg-purple-500
              hover:text-white
              hover:shadow-lg
              hover:shadow-purple-500/50
              neon-glow
              hidden md:block
            ">
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
              <button className="
                bg-transparent 
                border-2 
                border-purple-500 
                text-purple-500 
                px-4 
                py-2 
                rounded-lg 
                font-semibold
                transition-all
                duration-300
                hover:bg-purple-500
                hover:text-white
                hover:shadow-lg
                hover:shadow-purple-500/50
                neon-glow
                w-full
              ">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with 3D Robot */}
      <section className="relative w-full h-screen overflow-hidden">
        <PlaceholderRobot
          className="absolute inset-0 z-0" 
        />
      
        <div className="
          absolute inset-0 z-10
          pt-20 md:pt-32 lg:pt-40
          px-4 md:px-8            
          pointer-events-none     
        ">
          <div className="
            text-center
            text-white
            drop-shadow-lg
            w-full max-w-4xl
            mx-auto
          ">
            <h1 className="
              text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-bold 
              mb-6
              animate-fadeIn
            ">
              Advanced <span className="gradient-text">Surveillance</span> Systems
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
              Next-generation security solutions with AI-powered monitoring and 24/7 protection for your home and business.
            </p>
            <div className="pointer-events-auto animate-fadeIn animation-delay-400">
              <button className="
                bg-transparent 
                border-2 
                border-purple-500 
                text-white 
                px-8 
                py-4
                rounded-lg 
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:bg-purple-500
                hover:shadow-lg
                hover:shadow-purple-500/50
                neon-glow
                mr-4
              ">
                View Products
              </button>
              <button className="
                bg-white
                text-gray-900 
                px-8 
                py-4
                rounded-lg 
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:bg-gray-100
                hover:shadow-lg
                border-2 border-transparent
              ">
                <div className="flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Why Choose Our Systems
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Our cutting-edge technology combines advanced hardware with intelligent software to deliver unparalleled security solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="text-gray-900 dark:text-white text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Our Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Choose from our range of security solutions designed for different needs and budgets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Check className="h-4 w-4 text-purple-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-500">{product.price}</span>
                    <button className="
                      bg-transparent 
                      border-2 
                      border-purple-500 
                      text-purple-500 
                      px-4 
                      py-2 
                      rounded-lg 
                      font-semibold
                      transition-all
                      duration-300
                      hover:bg-purple-500
                      hover:text-white
                      hover:shadow-lg
                      hover:shadow-purple-500/50
                      neon-glow
                    ">
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our security systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 gradient-bg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen SecureVision for their security needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="
              bg-white
              text-purple-600 
              px-8 
              py-4
              rounded-lg 
              font-semibold
              text-lg
              transition-all
              duration-300
              hover:bg-gray-100
              hover:shadow-lg
              border-2 border-transparent
            ">
              Get Started Today
            </button>
            <button className="
              bg-transparent 
              border-2 
              border-white 
              text-white 
              px-8 
              py-4
              rounded-lg 
              font-semibold
              text-lg
              transition-all
              duration-300
              hover:bg-white
              hover:text-purple-600
            ">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-xl font-bold">SecureVision</span>
            </div>
            <p className="text-gray-400">
              Advanced surveillance systems for home and business security.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home Security</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Business Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Outdoor Cameras</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <button className="
                bg-purple-500 
                text-white 
                px-4 
                py-2 
                rounded-r-lg 
                font-semibold
                transition-all
                duration-300
                hover:bg-purple-600
                hover:shadow-lg
                hover:shadow-purple-500/50
              ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2023 SecureVision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
