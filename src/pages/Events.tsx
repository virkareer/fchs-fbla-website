import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
    // Placeholder data - this would normally come from a CMS or database
    const events = [
        {
            title: "Monthly Chapter Meeting",
            date: "October 15, 2026",
            time: "3:15 PM - 4:15 PM",
            location: "Room 101",
            description: "Regular monthly meeting to discuss upcoming competitions and fundraising events."
        },
        {
            title: "Regional Leadership Conference",
            date: "November 12, 2026",
            time: "8:00 AM - 3:00 PM",
            location: "Fairfax High School",
            description: "Annual regional competition where members compete in various business events."
        },
        {
            title: "Community Service Day",
            date: "December 5, 2026",
            time: "9:00 AM - 12:00 PM",
            location: "Local Food Bank",
            description: "Volunteer opportunity for all members to give back to the community."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[var(--color-fbla-blue)] mb-4">Upcoming Events</h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    Stay up to date with our latest meetings, competitions, and community service projects.
                </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
                {events.map((event, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md border-l-4 border-[var(--color-fbla-gold)] p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-[var(--color-fbla-blue)] mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>

                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-[var(--color-fbla-blue)]" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[var(--color-fbla-blue)]" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-[var(--color-fbla-blue)]" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
