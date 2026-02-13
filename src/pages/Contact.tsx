import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[var(--color-fbla-blue)] mb-4">Contact Us</h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    Have questions about joining FBLA or want to partner with us? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="bg-[var(--color-fbla-blue)] text-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <MapPin size={24} className="text-[var(--color-fbla-accent)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Our Location</h3>
                                <p className="text-blue-100">Forsyth Central High School<br />131 Almon C. Hill Dr<br />Cumming, GA 30040</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Mail size={24} className="text-[var(--color-fbla-accent)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <p className="text-blue-100">f43327@forsyth.k12.ga.us</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Phone size={24} className="text-[var(--color-fbla-accent)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Phone</h3>
                                <p className="text-blue-100">(770) 887-8151</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-bold text-lg mb-4">Meeting Times</h3>
                        <p className="text-blue-100">
                            We meet monthly with dates posted in the GroupMe.<br />
                            All students are welcome to attend!
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Links & Communications</h2>
                    <ul className="space-y-4 mb-8">
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors p-3 bg-blue-50 rounded-lg">
                                <span className="font-bold">GroupMe</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 text-pink-600 hover:text-pink-800 transition-colors p-3 bg-pink-50 rounded-lg">
                                <span className="font-bold">Instagram</span>
                            </a>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Advisor Contact Information</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-bold text-[var(--color-fbla-blue)] mb-2">Lex Alexander</h3>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Mail size={20} />
                                <a href="mailto:f43327@forsyth.k12.ga.us" className="hover:text-[var(--color-fbla-blue)] transition-colors">f43327@forsyth.k12.ga.us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
