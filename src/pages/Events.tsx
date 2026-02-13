import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
    // Placeholder data - this would normally come from a CMS or database
    const events = [
        {
            title: "SLC Competition Sign-Ups Due",
            date: "January 25, 2026",
            time: "11:59 PM",
            location: "Online",
            description: "Deadline to sign up for State Leadership Conference competitions. (Closed)",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdyz3RivRcZegojmXGdezxqW7bEDejzryysx6K-KV-nGPx5vg/viewform"
        },
        {
            title: "In-House Pre-Submission Events Due",
            date: "January 27, 2026",
            time: "11:59 PM",
            location: "Online",
            description: "Deadline for in-house pre-submission events. (Closed)",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSe8dpJs3dwKN8hL2l5LZPS1gnC11InaOfQfpFmiRciA6HuGVA/viewform"
        },
        {
            title: "FINAL SLC Pre-Submission Due",
            date: "February 1, 2026",
            time: "11:59 PM",
            location: "Online",
            description: "Final deadline for SLC pre-submissions.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd9js3e6XdrCo7aOph61vtj--qBa-BxpSnGu3d2Cmqn5fwUgg/viewform"
        },
        {
            title: "Intent to Attend SLC Form Due",
            date: "February 1, 2026",
            time: "11:59 PM",
            location: "Online",
            description: "Mandatory form for those planning to attend SLC.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf0eDcg2_WewecM0ml9wDRKDt2EaTNgnioJxncJPnsJY0cAXQ/viewform?usp=sharing"
        },
        {
            title: "SLC Fees Due",
            date: "February 2, 2026",
            time: "DURING SCHOOL",
            location: "Fchs",
            description: "Payment due for SLC (attendee or non-attendee). Preferred method: check."
        },
        {
            title: "Monthly Chapter Meeting",
            date: "October 15, 2026",
            time: "3:15 PM - 4:15 PM",
            location: "Room 101",
            description: "Regular monthly meeting to discuss upcoming competitions and fundraising events."
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
                    <div key={index} className="bg-white rounded-lg shadow-md border-l-4 border-[var(--color-fbla-accent)] p-6 hover:shadow-lg transition-shadow">
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
