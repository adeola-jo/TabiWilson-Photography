"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Mail, Instagram, Facebook, Sun, Moon } from 'lucide-react';

const TabiWilsonPortfolio = () => {
    const [currentYear, setCurrentYear] = useState(2024);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
        // Check system preference for dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Apply dark mode to body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Rest of your existing constants (portfolioCategories, portfolioItems) remain the same
    const portfolioCategories = [
        { id: 'all', label: 'All Work' },
        { id: 'portrait', label: 'Portraits' },
        { id: 'wedding', label: 'Weddings' },
        { id: 'commercial', label: 'Commercial' },
        { id: 'event', label: 'Events' }
    ];

    const portfolioItems = [
        {
            category: 'portrait',
            image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
            title: 'Contemporary Portraiture',
            description: 'Professional studio session'
        },
        {
            category: 'portrait',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
            title: 'Natural Light Portraits',
            description: 'Outdoor portrait session'
        },
        {
            category: 'portrait',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
            title: 'Business Headshots',
            description: 'Corporate portraiture'
        },
        {
            category: 'wedding',
            image: 'https://images.unsplash.com/photo-1537633552985-df8429e048b?auto=format&fit=crop&w=800&q=80',
            title: 'Garden Wedding',
            description: 'Intimate ceremony photography'
        },
        {
            category: 'wedding',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
            title: 'Beach Wedding',
            description: 'Destination wedding coverage'
        },
        {
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
            title: 'Product Photography',
            description: 'Commercial brand shoot'
        },
        {
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
            title: 'Food Photography',
            description: 'Restaurant menu shoot'
        },
        {
            category: 'event',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
            title: 'Corporate Event',
            description: 'Annual gala coverage'
        },
        {
            category: 'event',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
            title: 'Music Festival',
            description: 'Live concert photography'
        }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? isDarkMode 
                        ? 'bg-gray-900 shadow-lg shadow-gray-800/50' 
                        : 'bg-white shadow-lg'
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <span className={`text-2xl font-serif tracking-wider ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                                TabiWilson
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {['Home', 'Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`${
                                        isScrolled
                                            ? isDarkMode
                                                ? 'text-gray-300 hover:text-white'
                                                : 'text-gray-800 hover:text-gray-600'
                                            : 'text-white hover:text-gray-200'
                                    } transition-colors duration-200 text-sm uppercase tracking-wider`}
                                >
                                    {item}
                                </a>
                            ))}
                            
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full ${
                                    isDarkMode
                                        ? 'bg-gray-800 text-yellow-500 hover:bg-gray-700'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full ${
                                    isDarkMode
                                        ? 'bg-gray-800 text-yellow-500'
                                        : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`${
                                    isScrolled
                                        ? isDarkMode
                                            ? 'text-white'
                                            : 'text-gray-800'
                                        : 'text-white'
                                } hover:text-gray-500`}
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden absolute w-full shadow-lg ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                    }`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`block px-3 py-2 ${
                                        isDarkMode
                                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            : 'text-gray-800 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="h-screen relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1920&q=80"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>
                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-serif mb-6">TabiWilson Photography</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide">
                            Capturing Timeless Moments with Artistic Vision
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-4xl font-serif text-center mb-16 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Portfolio</h2>
                    
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {portfolioCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`px-6 py-2 text-sm tracking-wider transition-all duration-200 ${
                                    activeFilter === category.id
                                        ? isDarkMode
                                            ? 'bg-gray-700 text-white'
                                            : 'bg-gray-900 text-white'
                                        : isDarkMode
                                            ? 'bg-transparent text-gray-400 hover:bg-gray-800'
                                            : 'bg-transparent text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems
                            .filter(item => activeFilter === 'all' || item.category === activeFilter)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden bg-gray-100 aspect-[3/4]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500">
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                                            <p className="text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-24 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                                alt="Tabitha Wilson"
                                className="w-full h-full object-cover rounded-lg shadow-xl"
                            />
                        </div>
                        <div>
                            <h2 className={`text-4xl font-serif mb-8 ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>About Me</h2>
                            <div className={`space-y-6 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                <p>
                                    With over a decade of experience behind the lens, I've developed
                                    a distinctive style that combines classic elegance with modern
                                    creativity. My approach to photography is deeply personal,
                                    focusing on capturing authentic moments and genuine emotions.
                                </p>
                                <p>
                                    Whether I'm photographing a intimate wedding, creating powerful
                                    portraits, or working on commercial projects, my goal remains
                                    the same: to create timeless images that tell your unique story.
                                </p>
                                <p>
                                    Based in Spain, I work with clients worldwide, bringing
                                    technical expertise and artistic vision to every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-4xl font-serif text-center mb-16 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Weddings',
                                description: 'Full-day coverage with a second photographer, engagement session, and premium photo album',
                                price: 'Starting at $3,500'
                            },
                            {
                                title: 'Portrait Sessions',
                                description: 'Professional portrait sessions for individuals, families, and corporate clients',
                                price: 'Starting at $500'
                            },
                            {
                                title: 'Commercial',
                                description: 'Brand photography, product shoots, and corporate events',
                                price: 'Custom quotes available'
                            }
                        ].map((service, index) => (
                            <div key={index} className={`p-8 rounded-lg ${
                                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                            }`}>
                                <h3 className={`text-2xl font-serif mb-4 ${
                                    isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>{service.title}</h3>
                                <p className={`mb-6 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>{service.description}</p>
                                <p className={`text-lg font-medium ${
                                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                }`}>{service.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-4xl font-serif text-center mb-16 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Get in Touch</h2>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <form className="space-y-6">
                                <div>
                                    <label className={`block mb-2 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>Name</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                                            isDarkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white focus:border-gray-500'
                                                : 'bg-white border-gray-300 focus:border-gray-900'
                                        } border`}
                                    />
                                </div>
                                <div>
                                    <label className={`block mb-2 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>Email</label>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                                            isDarkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white focus:border-gray-500'
                                                : 'bg-white border-gray-300 focus:border-gray-900'
                                        } border`}
                                    />
                                </div>
                                <div>
                                    <label className={`block mb-2 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>Message</label>
                                    <textarea
                                        rows="4"
                                        className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                                            isDarkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white focus:border-gray-500'
                                                : 'bg-white border-gray-300 focus:border-gray-900'
                                        } border`}
                                    ></textarea>
                                </div>
                                <button className={`w-full py-3 px-6 rounded-lg transition-colors ${
                                    isDarkMode
                                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className={`text-xl font-serif mb-4 ${
                                    isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>Contact Information</h3>
                                <div className={`space-y-2 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    <p>Email: tabithawilson@gmail.com</p>
                                    <p>Studio: [Address]</p>
                                    <p>Phone: [Phone Number]</p>
                                </div>
                            </div>
                            <div>
                                <h3 className={`text-xl font-serif mb-4 ${
                                    isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>Follow My Work</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className={`${
                                        isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}>
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                    <a href="#" className={`${
                                        isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}>
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; {currentYear} TabiWilson Photography. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default TabiWilsonPortfolio;