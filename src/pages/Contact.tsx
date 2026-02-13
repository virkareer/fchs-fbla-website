import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
    };

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
                                <MapPin size={24} className="text-[var(--color-fbla-gold)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Our Location</h3>
                                <p className="text-blue-100">Falls Church High School<br />7521 Jaguar Trail<br />Falls Church, VA 22042</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Mail size={24} className="text-[var(--color-fbla-gold)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <p className="text-blue-100">fbla@fchs.edu</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Phone size={24} className="text-[var(--color-fbla-gold)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Phone</h3>
                                <p className="text-blue-100">(703) 207-4000</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-bold text-lg mb-4">Meeting Times</h3>
                        <p className="text-blue-100">
                            We meet every [Day] at [Time] in Room [Number].<br />
                            All students are welcome to attend!
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-md border">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Membership Inquiry"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--color-fbla-blue)] text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
