// src/pages/Services.tsx
import type {FC, JSX} from "react";
import {FaHome, FaBalanceScale, FaFileAlt, FaMapMarkedAlt, FaPenFancy, FaUserTie, FaGavel, FaHandshake} from "react-icons/fa";
interface ServiceProperties {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element | string;
}

export const Services: FC = () => {

    const services: ServiceProperties[] = [
        {
            id: 1,
            title: "नामसारी सेवा",
            description:
                "भूमि राजस्व कार्यालयमा जग्गा र सम्पत्तिको कानुनी नामसारीमा सहयोग।",
            icon: <FaHome className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 2,
            title: "कानुनी परामर्श",
            description:
                "व्यक्ति र संस्थाहरूका लागि व्यावसायिक कानुनी सल्लाह र परामर्श।",
            icon: <FaBalanceScale className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 3,
            title: "कागजात तयारी",
            description:
                "कानुनी कागजात, अनुबंध र सम्झौताहरूको तयारी र प्रमाणीकरण।",
            icon: <FaFileAlt className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 4,
            title: "नक्सा र नापी सेवा",
            description:
                "व्यावसायिक नापजोख समर्थनसहित जग्गाको नक्सा, प्लटिङ र नापी सेवा।",
            icon: <FaMapMarkedAlt className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 5,
            title: "मसौदा तयार गर्ने सेवा",
            description:
                "पेशेवरद्वारा रिट, सम्झौता र अन्य कानुनी मसौदाहरू तयार गर्ने सेवा।",
            icon: <FaPenFancy className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 6,
            title: "वकिल तथा नोटरी सेवा",
            description:
                "प्रमाणित कागजात, प्रमाणीकरण र नोटरी सार्वजनिक सहयोग प्राप्त गर्नुहोस्।",
            icon: <FaUserTie className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 7,
            title: "मुद्दा दर्ता सेवा",
            description:
                "अदालत वा सम्बन्धित प्राधिकरणमा मुद्दा दर्ता र व्यवस्थापनमा सहयोग।",
            icon: <FaGavel className="text-blue-600 mb-4 w-full text-3xl" />
        },
        {
            id: 8,
            title: "मध्यस्थता सेवा",
            description:
                "सम्पत्ति वा पारिवारिक विवादका लागि मध्यस्थता र आपसी सम्झौता सेवा।",
            icon: <FaHandshake className="text-blue-600 mb-4 w-full text-3xl" />
        }
    ];

    return (
        <section id="service" className="py-20 sm:py-22 md:py-30 bg-gray-50">
            <div className="max-w-10/12 mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
                हाम्रो सेवाहरू
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto  mb-15 sm:mb-22 md:mb-30  text-xs sm:text-sm md:text-md leading-6 text-center tracking-wide">
                    हामी नेपालभर भर, पारदर्शिता र विशेषज्ञताको साथ व्यावसायिक कानुनी र कागजात सम्बन्धी सेवाहरू प्रदान गर्छौं।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                    {services.map((service) => (
                        <div key={service.id} className="shadow-md shadow-gray-400 hover:shadow-xl rounded-xl p-8 transition-transform hover:scale-120 duration-500 ">
                            <div className="text-3xl">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 text-xl">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>

    )
}
