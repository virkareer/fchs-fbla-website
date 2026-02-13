import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-[var(--color-fbla-blue)] text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-[var(--color-fbla-gold)] transition-colors">
                            FCHS FBLA
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</Link>
                            <Link to="/events" className="hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</Link>
                            <Link to="/contact" className="hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:text-[var(--color-fbla-gold)] focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#004481]">
                        <Link to="/" onClick={toggleMenu} className="block hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/about" onClick={toggleMenu} className="block hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-base font-medium">About Us</Link>
                        <Link to="/events" onClick={toggleMenu} className="block hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-base font-medium">Events</Link>
                        <Link to="/contact" onClick={toggleMenu} className="block hover:text-[var(--color-fbla-gold)] px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
