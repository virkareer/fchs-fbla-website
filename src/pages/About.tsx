import { User } from 'lucide-react';

const About = () => {
    // Placeholder data for officers
    const officers = [
        { name: "First Last", position: "President" },
        { name: "First Last", position: "Vice President" },
        { name: "First Last", position: "Secretary" },
        { name: "First Last", position: "Treasurer" },
        { name: "First Last", position: "Historian" },
        { name: "First Last", position: "Reporter" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-[var(--color-fbla-blue)] mb-4">About Us</h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    The Future Business Leaders of America (FBLA) at Falls Church High School is dedicated to bringing business and education together in a positive working relationship through innovative leadership and career development programs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-2xl font-bold text-[var(--color-fbla-blue)] mb-4">Our History</h2>
                    <p className="text-gray-600 mb-4">
                        Founded in [Year], the FCHS chapter of FBLA has been a cornerstone of the business department, providing students with opportunities to compete in regional, state, and national competitions.
                    </p>
                    <p className="text-gray-600">
                        Over the years, our members have achieved success in various categories including Marketing, Accounting, Web Design, and Public Speaking.
                    </p>
                </div>
                <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-400">
                    {/* Placeholder for group photo */}
                    <span className="font-medium">Chapter Photo Placeholder</span>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-[var(--color-fbla-blue)] mb-8 text-center">Meet the Officer Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {officers.map((officer, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                                <User size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-center text-[var(--color-fbla-blue)]">{officer.name}</h3>
                            <p className="text-center text-[var(--color-fbla-gold)] font-medium">{officer.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
