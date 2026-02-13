import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[var(--color-fbla-gold)]">FCHS FBLA</h3>
                        <p className="text-gray-300 text-sm">
                            Empowering the next generation of business leaders through service, education, and progress.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[var(--color-fbla-gold)]">Advisor Contact</h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p className="font-bold">Lex Alexander</p>
                            <div className="flex items-center space-x-2">
                                <Mail size={16} className="text-[var(--color-fbla-gold)]" />
                                <a href="mailto:f43327@forsyth.k12.ga.us" className="hover:text-white transition-colors">f43327@forsyth.k12.ga.us</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[var(--color-fbla-gold)]">Links & Communications</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">GroupMe</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="https://www.fbla.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National FBLA</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Forsyth Central High School FBLA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
