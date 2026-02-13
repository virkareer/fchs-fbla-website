import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white text-[var(--color-fbla-blue)] shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20"> {/* Increased height slightly for logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                            <img src="/src/assets/fchs_fbla_logo.png" alt="FCHS FBLA Logo" className="h-16 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-baseline space-x-8">
                            <Link to="/" className="hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-sm font-bold transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-sm font-bold transition-colors">About Us</Link>
                            <Link to="/events" className="hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-sm font-bold transition-colors">Events</Link>
                            <Link to="/contact" className="hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-sm font-bold transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-fbla-blue)] hover:text-[var(--color-fbla-accent)] focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={toggleMenu} className="block hover:bg-gray-50 hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-base font-bold">Home</Link>
                        <Link to="/about" onClick={toggleMenu} className="block hover:bg-gray-50 hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-base font-bold">About Us</Link>
                        <Link to="/events" onClick={toggleMenu} className="block hover:bg-gray-50 hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-base font-bold">Events</Link>
                        <Link to="/contact" onClick={toggleMenu} className="block hover:bg-gray-50 hover:text-[var(--color-fbla-accent)] px-3 py-2 rounded-md text-base font-bold">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
