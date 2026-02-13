import { ArrowRight, Trophy, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[500px] rounded-b-[2rem] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/src/assets/fbla_background.JPG"
                        alt="FBLA Background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
                        Forsyth Central High School <span className="text-[var(--color-fbla-accent)]">FBLA</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 shadow-black drop-shadow-md">
                        Inspiring and preparing students to become community-minded business leaders in a global society.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/about"
                            className="px-8 py-3 bg-[var(--color-fbla-accent)] text-[var(--color-fbla-blue)] font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                        >
                            Learn More <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--color-fbla-blue)]">Our Mission</h2>
                    <div className="w-24 h-1 bg-[var(--color-fbla-accent)] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-[var(--color-fbla-blue)] rounded-full flex items-center justify-center mb-6">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Service</h3>
                        <p className="text-gray-600">
                            We believe in giving back to our community through meaningful service projects that make a real difference locally and globally.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-[var(--color-fbla-blue)] rounded-full flex items-center justify-center mb-6">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Education</h3>
                        <p className="text-gray-600">
                            We provide opportunities to learn business skills, leadership principles, and career preparation through workshops and competitions.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-[var(--color-fbla-blue)] rounded-full flex items-center justify-center mb-6">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Progress</h3>
                        <p className="text-gray-600">
                            We strive for continuous improvement and innovation, adapting to the changing business landscape to prepare for the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* SLC Announcements Section */}
            <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[var(--color-fbla-blue)]">SLC Competition Announcements & Deadlines</h2>
                        <div className="w-24 h-1 bg-[var(--color-fbla-accent)] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="p-6 space-y-6">
                            <div className="border-l-4 border-red-500 pl-4 py-1">
                                <h3 className="font-bold text-lg text-gray-800">January 25 - SLC Competition Sign-Ups Due <span className="text-red-500 text-sm font-normal">(Closed)</span></h3>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyz3RivRcZegojmXGdezxqW7bEDejzryysx6K-KV-nGPx5vg/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm break-all">
                                    View Form
                                </a>
                            </div>

                            <div className="border-l-4 border-red-500 pl-4 py-1">
                                <h3 className="font-bold text-lg text-gray-800">January 27 - In-House Pre-Submission Events Due <span className="text-red-500 text-sm font-normal">(Closed)</span></h3>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8dpJs3dwKN8hL2l5LZPS1gnC11InaOfQfpFmiRciA6HuGVA/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm break-all">
                                    Submit Here
                                </a>
                            </div>

                            <div className="border-l-4 border-[var(--color-fbla-accent)] pl-4 py-1">
                                <h3 className="font-bold text-lg text-gray-800">February 1 - FINAL SLC Pre-Submission Due</h3>
                                <p className="mb-1 text-sm text-gray-600">Submit here:</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9js3e6XdrCo7aOph61vtj--qBa-BxpSnGu3d2Cmqn5fwUgg/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm break-all">
                                    Submission Form
                                </a>
                            </div>

                            <div className="border-l-4 border-[var(--color-fbla-accent)] pl-4 py-1">
                                <h3 className="font-bold text-lg text-gray-800">February 1 - Intent to Attend SLC Form Due</h3>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0eDcg2_WewecM0ml9wDRKDt2EaTNgnioJxncJPnsJY0cAXQ/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm break-all">
                                    Intent to Attend Form
                                </a>
                            </div>

                            <div className="border-l-4 border-[var(--color-fbla-accent)] pl-4 py-1">
                                <h3 className="font-bold text-lg text-gray-800">February 2 - SLC Fees Due</h3>
                                <p className="text-sm text-gray-600">Attendee or non-attendee. <strong>Preferred payment method: check.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--color-fbla-blue)] mb-4">Ready to start your journey?</h2>
                        <p className="text-lg text-gray-600">Join FCHS FBLA today and discover your potential.</p>
                    </div>
                    <Link
                        to="/contact"
                        className="px-8 py-3 bg-[var(--color-fbla-blue)] text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                    >
                        Get Involved
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
