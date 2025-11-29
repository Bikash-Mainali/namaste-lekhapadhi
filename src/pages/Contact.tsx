// src/pages/Contact.tsx
import {FaFacebookF} from "react-icons/fa";
import {AnimatedBorder} from "../components/AnimatedBorder.tsx";
import {FcGoogle} from "react-icons/fc";

const BASE_URL = import.meta.env.BASE_URL;

export const Contact = () => {
    const contactDetails = [
        {
            id: 1,
            name: "बिनोद कुमार मैनाली",
            phone: "111111111",
            email: "binod@gmail.com",
            imgLink: `${BASE_URL}images/binod.png`,
            alt: "बिनोद कुमार मैनाली"
        },
        {
            id: 2,
            name: "माधव कुमार नेपाल",
            phone: "9843593698",
            email: "nmadhavkumar3@gmail.com",
            imgLink: `${BASE_URL}images/madhav.jpg`,
            alt: "माधव कुमार नेपाल"
        }
    ];

    return (
        <section id="contact-us" className="py-30 text-base sm:text-lg">
            <div className="max-w-10/12 mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-30 text-center">
                    सम्पर्क
                </h2>

                {/* Top block: social icons + contacts */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                        <div
                            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <div className="relative rounded-lg gradient-background">
                                <AnimatedBorder>
                                    <div className="text-3xl font-bold tracking-widest p-4">सम्पर्क गर्नुहोस्</div>
                                </AnimatedBorder>
                            </div>

                            <p className="text-gray-600 max-w-md">
                                हामी तपाईंको सन्देश सुन्न चाहन्छौं! सन्देश पठाउनुहोस् वा सामाजिक सञ्जाल मार्फत
                                जोडिनुहोस्।
                            </p>

                            <div className="flex justify-center md:justify-start space-x-5 mt-4">
                                {[
                                    {id: 1, icon: <FaFacebookF/>, color: "blue", href: "https://www.facebook.com/binodkumar.mainali"},
                                    {id: 2, icon: <FcGoogle/>, color: "blue", href: "https://share.google/efNct91hwVi1KUvOO"},
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className={`flex items-center text-2xl justify-center w-12 h-12 rounded-full bg-${item.color}-100 text-${item.color}-600 hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-110`}
                                        aria-label={item.icon?.type?.name || "सामाजिक लिंक"}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>

                            <p className="text-gray-700"><strong>स्थान:</strong> कालंकी, काठमाडौं</p>
                        </div>

                        {/* Contacts list: centered inside right column */}
                            <div className="grid grid-cols-1 [@media(min-width:1050px)]:grid-cols-2 gap-10 place-items-center">
                                {contactDetails.map(contact => (
                                    <div
                                        key={contact.id}
                                        className="[@media(min-width:1300px)]:w-[350px] [@media(min-width:1300px)]:h-[350px] w-[250px] h-[250px]  flex flex-col items-center bg-white shadow-md hover:shadow-lg rounded-2xl transition justify-evenly"
                                    >
                                        {/* Image Container */}
                                        <div className="w-1/2 h-1/2 flex items-center justify-center p-2">
                                            <img
                                                src={contact.imgLink}
                                                alt={contact.alt}
                                                className="w-full h-full rounded-full object-cover border border-gray-200"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="text-center space-y-2 py-2 w-full border-t border-gray-300">
                                            <p className="font-semibold text-gray-800 text-lg">{contact.name}</p>
                                            <p className="text-sm text-gray-600"><strong>इमेल:</strong> {contact.email}</p>
                                            <p className="text-sm text-gray-600"><strong>फोन:</strong> {contact.phone}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>

                    {/* Form: placed below social icons and images (full width) */}
                    <div className="grid grid-cols-1 [@media(min-width:1050px)]:grid-cols-2 gap-20 mt-20">
                        <div className="w-full mx-auto shadow-2xl rounded-sm [@media(min-width:1050px)]:order-1 order-2">
                            <iframe
                                className="w-full [@media(min-width:1050px)]:h-full h-[400px] rounded-sm"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8691766427214!2d85.2816587!3d27.690438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x856596ababc4e189%3A0xdd3231975c58d0e!2sNamaste%20Lekhapadhi%20%26%20Kanuni%20Sewa!5e0!3m2!1sen!2sus!4v1763266171352!5m2!1sen!2sus"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <form
                            className="space-y-6 bg-white rounded-2xl shadow-xl order-1 [@media(min-width:1050px)]:order-2  p-8 sm:p-8 md:p-10 w-full hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    नाम
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="तपाईंको नाम"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    इमेल
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="tapaiko@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    सन्देश
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="तपाईंको सन्देश..."
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="gradient-background text-white px-8 py-3 rounded-md hover:scale-105 transform transition-all duration-300 font-medium w-full sm:w-auto shadow-lg hover:shadow-xl"
                                >
                                    सन्देश पठाउनुहोस्
                                </button>
                            </div>
                        </form>

                    </div>
                </div>


            </div>
        </section>
    );
};
