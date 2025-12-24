import type { FC, JSX } from 'react'
import {
    FaHome,
    FaBalanceScale,
    FaFileAlt,
    FaMapMarkedAlt,
    FaPenFancy,
    FaUserTie,
    FaGavel,
    FaHandshake,
} from 'react-icons/fa'
interface ServiceProperties {
    id: number
    title: string
    description: string
    icon: JSX.Element | string
}

export const Services: FC = () => {
    const services: ServiceProperties[] = [
        {
            id: 1,
            title: 'नामसारी सेवा',
            description: 'भूमि राजस्व कार्यालयमा जग्गा र सम्पत्तिको कानुनी नामसारीमा सहयोग।',
            icon: <FaHome className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 2,
            title: 'कानुनी परामर्श',
            description: 'व्यक्ति र संस्थाहरूका लागि व्यावसायिक कानुनी सल्लाह र परामर्श।',
            icon: <FaBalanceScale className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 3,
            title: 'कागजात तयारी',
            description: 'कानुनी कागजात, अनुबंध र सम्झौताहरूको तयारी र प्रमाणीकरण।',
            icon: <FaFileAlt className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 4,
            title: 'नक्सा र नापी सेवा',
            description: 'व्यावसायिक नापजोख समर्थनसहित जग्गाको नक्सा, प्लटिङ र नापी सेवा।',
            icon: <FaMapMarkedAlt className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 5,
            title: 'मसौदा तयार गर्ने सेवा',
            description: 'पेशेवरद्वारा रिट, सम्झौता र अन्य कानुनी मसौदाहरू तयार गर्ने सेवा।',
            icon: <FaPenFancy className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 6,
            title: 'वकिल तथा नोटरी सेवा',
            description: 'प्रमाणित कागजात, प्रमाणीकरण र नोटरी सार्वजनिक सहयोग प्राप्त गर्नुहोस्।',
            icon: <FaUserTie className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 7,
            title: 'मुद्दा दर्ता सेवा',
            description: 'अदालत वा सम्बन्धित प्राधिकरणमा मुद्दा दर्ता र व्यवस्थापनमा सहयोग।',
            icon: <FaGavel className="mb-4 w-full text-3xl text-blue-600" />,
        },
        {
            id: 8,
            title: 'मध्यस्थता सेवा',
            description: 'सम्पत्ति वा पारिवारिक विवादका लागि मध्यस्थता र आपसी सम्झौता सेवा।',
            icon: <FaHandshake className="mb-4 w-full text-3xl text-blue-600" />,
        },
    ]

    return (
        <section id="service" className="bg-gray-50 py-20 sm:py-22 md:py-30 dark:bg-gray-950">
            <div className="mx-auto max-w-10/12 px-6">
                <h2 className="text-center text-2xl font-extrabold text-gray-800 sm:text-3xl md:text-4xl dark:text-white">
                    हाम्रो सेवाहरू
                </h2>
                <p className="md:text-md mx-auto mb-15 max-w-2xl text-center text-xs leading-6 tracking-wide text-gray-600 sm:mb-22 sm:text-sm md:mb-30 dark:text-gray-300">
                    हामी नेपालभर भर, पारदर्शिता र विशेषज्ञताको साथ व्यावसायिक कानुनी र कागजात सम्बन्धी सेवाहरू प्रदान
                    गर्छौं।
                </p>

                <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="rounded-xl p-8 shadow-md shadow-gray-400 transition-transform duration-500 hover:scale-120 hover:shadow-xl dark:border dark:bg-gray-800 dark:shadow-xs dark:hover:shadow-sm"
                        >
                            <div className="text-3xl">{service.icon}</div>
                            <h3 className="mb-3 text-3xl font-semibold text-gray-800 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-xl text-gray-600 dark:text-white">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
