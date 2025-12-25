import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            brand: 'Namaste Lekhapadhi',
            welcome: 'Welcome to Namaste Lekhapadhi',
            footer: {
                brandName: 'Namaste Lekhapadhi & Legal Services',
                rights: '© 2025 NLKS. All copy rights reserved.',
                tagline: 'Your trusted partner in finding the right property.',
                importantLinks: {
                    title: 'Important Links',
                    landManagement: 'Department of Land Management and Records',
                    malpotOffice: 'Malpot Office Kalanki, Kathmandu',
                    downloadForms: 'Download / Form Formats',
                    rtiAct: 'Right to Information Act',
                },
                contact: {
                    title: 'Contact',
                    phone: 'Phone: 9851069249',
                    address: 'Address: Kalanki, Kathmandu',
                },
            },
            menu: {
                home: 'Home',
                about: 'About Us',
                service: 'Services',
                info: 'Information',
                blog: 'Blogs',
                gallery: 'Photo Gallery',
                contact: 'Contact',
            },
            hero: 'Your trusted partner in finding the right property.',
            about: {
                title: 'About Us',
                content:
                    "Welcome to <b class='text-blue-400'>Namaste Lekhapadhi Services</b>, your trusted partner in property and legal solutions." +
                    'We specialize in providing reliable, transparent, and professional services to individuals,' +
                    'families, and organizations handling property and legal matters in Nepal.' +
                    '<br/>' +
                    '<br/>' +
                    'Our dedicated team includes experienced legal advisors, land survey experts, and certified notary' +
                    'professionals who are committed to simplifying complex processes. From land ownership transfer and' +
                    'legal drafting to map preparation, dispute resolution, and court document submission, we deliver' +
                    'accurate, efficient services in compliance with Nepal’s legal standards.' +
                    '<br/>' +
                    '<br/>' +
                    'We prioritize integrity, accountability, and client satisfaction. Our goal is to ensure that your' +
                    'property-related decisions are secure, lawful, and stress-free — because we understand that property' +
                    'is not just paperwork; it is your investment, your future, and your peace of mind.' +
                    '<br/>' +
                    '<br/>' +
                    'Whether you need assistance with documentation, legal consultation, land measurement, mediation, or' +
                    'notary services, we are here to provide personalized support backed by years of experience.' +
                    '<b>Your trust is our foundation — and your success is our priority.</b>',
            },
            services: {
                title: 'Our Services',
                description:
                    'We provide professional legal and documentation services across Nepal with reliability, transparency, and expertise.',
            },
            information: {
                title: 'Information',
                description:
                    'Accurate land measurement and map preparation in Nepal is crucial. It ensures correct land ownership, reduces disputes, and provides legal security.',
                content: {
                    section1: {
                        title: '1. What is Land Measurement?',
                    },
                    section2: {
                        title: '2. Importance of Land Measurement',
                    },
                    section3: {
                        title: '3. Measurement Process',
                    },
                    section4: {
                        title: '4. Documents Required for Measurement',
                    },
                    section5: {
                        title: '5. Legal Aspects',
                    },
                    section6: {
                        title: '6. Common Issues and Solutions',
                    },
                    section7: {
                        title: '7. Frequently Asked Questions',
                    },
                },
                contact: {
                    title: 'Contact for Assistance',
                    description: 'If you need any assistance regarding land measurement, please contact us.',
                    phone: 'Phone: 9851069249',
                    email: 'Email: binodkumar699@gmail.com, nmadhavkumar3@gmail.com',
                    address: 'Address: Kalanki, Kathmandu',
                },
            },
            blog: {
                title: 'Blogs',
            },
            contact: {
                title: 'Contact',
                reachUs: 'CONTACT US',
                description:
                    'हामी तपाईंको सन्देश सुन्न चाहन्छौं! सन्देश पठाउनुहोस् वा सामाजिक सञ्जाल मार्फत जोडिनुहोस्।',
                address: '<strong>Address:</strong> Kalanki, Kathmandu, Nepal',
                binod: {
                    name: 'Binod Kumar Mainali',
                    phone: '<b>Phone:</b> 9851069249',
                    email: '<b>Email:</b> binodkumar699@gmail.com',
                },
                madhav: {
                    name: 'Madhav Kumar Nepal',
                    phone: '<b>Phone:</b> 9802446323',
                    email: '<b>Email:</b> nmadhavkumar3@gmail.com',
                },
                contactForm: {
                    name: {
                        label: 'Name',
                        placeholder: 'Your Name',
                    },
                    email: {
                        label: 'Email',
                        placeholder: 'example@gmail.com',
                    },
                    message: {
                        label: 'Message',
                        placeholder: 'Your Message',
                    },
                    submit: 'Submit Message',
                },
            },
        },
    },
    np: {
        translation: {
            brand: 'नमस्ते लेखापढी',
            welcome: 'नमस्ते लेखापढीमा स्वागत छ',
            footer: {
                brandName: 'नमस्ते लेखापढी तथा कानुनी सेवा',
                rights: '© २०२५ एनएलकेएस। सबै अधिकार सुरक्षित।',
                tagline: 'उपयुक्त जग्गा फेला पार्न तपाईंको भरपर्दो साझेदार।',
                importantLinks: {
                    title: 'महत्वपूर्ण लिङ्कहरू',
                    landManagement: 'भूमि व्यवस्थापन तथा अभिलेख विभाग',
                    malpotOffice: 'मालपोत कार्यालय कलंकी, काठमाण्डौं',
                    downloadForms: 'डाउनलोड / फारमको ढाँचा',
                    rtiAct: 'सूचनाको हक सम्बन्धी ऐन',
                },
                contact: {
                    title: 'सम्पर्क',
                    phone: 'फोन: ९८५१०६९२४९',
                    address: 'ठेगाना: कलंकी, काठमाडौं',
                },
            },
            menu: {
                home: 'गृहपृष्ठ',
                about: 'हाम्रो बारे',
                service: 'सेवाहरू',
                info: 'जानकारी',
                blog: 'ब्लगहरू',
                gallery: 'फोटो ग्यालरी',
                contact: 'सम्पर्क',
            },
            hero: 'उपयुक्त जग्गा पत्ता लगाउन तपाईंको भरपर्दो साझेदार',
            about: {
                title: 'हाम्रो बारेमा',
                content:
                    "<b class='text-blue-400'>नमस्ते लेखापढी सेवा</b>मा तपाईंलाई स्वागत छ, तपाईंको भरपर्दो सम्पत्ति र कानुनी समाधान साझेदार।" +
                    'हामी नेपालमा सम्पत्ति र कानुनी मामिलाहरू ह्यान्डल गर्ने व्यक्तिहरू,' +
                    'परिवारहरू, र संस्थाहरूलाई भरपर्दो, पारदर्शी, र व्यावसायिक सेवाहरू प्रदान गर्न विशेषज्ञ छौं।' +
                    '<br/>' +
                    '<br/>' +
                    'हाम्रो समर्पित टोलीमा अनुभवी कानुनी सल्लाहकारहरू, भूमि सर्वेक्षण विशेषज्ञहरू, र प्रमाणित नोटरी' +
                    'व्यावसायिकहरू समावेश छन् जो जटिल प्रक्रियाहरूलाई सरल बनाउन प्रतिबद्ध छन्। जग्गा स्वामित्व स्थानान्तरण र' +
                    'कानुनी मस्यौदा देखि नक्सा तयारी, विवाद समाधान, र अदालत कागजात पेश गर्ने सम्म, हामी प्रदान गर्दछौं' +
                    'नेपालको कानुनी मापदण्डहरूको अनुपालनमा सही, प्रभावकारी सेवाहरू।' +
                    '<br/>' +
                    '<br/>' +
                    'हामी ईमानदारी, जवाफदेहिता, र ग्राहक सन्तुष्टिलाई प्राथमिकता दिन्छौं। हाम्रो लक्ष्य तपाईंको' +
                    'सम्पत्ति सम्बन्धी निर्णयहरू सुरक्षित, कानुनी, र तनावमुक्त सुनिश्चित गर्नु हो — किनभने हामी बुझ्छौं कि सम्पत्ति' +
                    'केवल कागजातहरू मात्र होइन; यो तपाईंको लगानी हो, तपाईंको भविष्य हो, र तपाईंको मनको शान्ति हो।' +
                    '<br/>' +
                    '<br/>' +
                    'तपाईंलाई कागजातहरू, कानुनी परामर्श, भूमि मापन, मध्यस्थता, वा नोटरी सेवाहरूमा सहयोग चाहिन्छ भने,' +
                    'हामी यहाँ छौं व्यक्तिगत समर्थन प्रदान गर्न वर्षौंको अनुभवले समर्थित।' +
                    '<b>तपाईंको विश्वास हाम्रो आधार हो — र तपाईंको सफलता हाम्रो प्राथमिकता हो।</b>',
            },
            services: {
                title: 'हाम्रो सेवाहरू',
                description:
                    'हामी नेपालभर भर, पारदर्शिता र विशेषज्ञताको साथ व्यावसायिक कानुनी र कागजात सम्बन्धी सेवाहरू प्रदान गर्छौं।',
            },
            information: {
                title: 'जानकारी',
                description:
                    'नेपालमा जग्गाको सही नापी र नक्सा तयार पार्नु अत्यन्त आवश्यक छ। यसले जग्गाको सही स्वामित्व सुनिश्चित गर्ने, विवादहरू कम गर्ने र कानुनी सुरक्षा दिने काम गर्छ।',
                content: {
                    section1: {
                        title: '१. जग्गा नाप भनेको के हो?',
                    },
                    section2: {
                        title: '२. जग्गा नापको महत्व',
                    },
                    section3: {
                        title: '३. नापी प्रक्रिया',
                    },
                    section4: {
                        title: '४. नापीका लागि आवश्यक कागजातहरू',
                    },
                    section5: {
                        title: '५. कानुनी पक्ष',
                    },
                    section6: {
                        title: '६. सामान्य समस्या र समाधान ',
                    },
                    section7: {
                        title: '७. प्रायः सोधिने प्रश्नहरू ',
                    },
                },
                contact: {
                    title: 'सहयोगका लागि सम्पर्क गर्नुहोस्',
                    description: 'तपाईंलाई जग्गा नापी सम्बन्धी कुनै सहयोग चाहिएको खण्डमा हामीलाई सम्पर्क गर्नुहोस्।',
                    phone: 'फोन: ९८५१०६९२४९',
                    email: 'इमेल: binodkumar699@gmail.com, nmadhavkumar3@gmail.com',
                    address: 'ठेगाना: कलंकी, काठमाडौं',
                },
            },
            blog: {
                title: 'ब्लगहरू',
            },
            contact: {
                title: 'सम्पर्क',
                reachUs: 'सम्पर्क गर्नुहोस्',
                description:
                    'हामी तपाईंको सन्देश सुन्न चाहन्छौं! सन्देश पठाउनुहोस् वा सामाजिक सञ्जाल मार्फत जोडिनुहोस्।',
                address: '<strong>स्थान:</strong> कालंकी, काठमाडौं, नेपाल',
                binod: {
                    name: 'बिनोद कुमार मैनाली',
                    phone: '<b>फोन:</b> ९८५१०६९२४९',
                    email: '<b>इमेल:</b> binodkumar699@gmail.com',
                },
                madhav: {
                    name: 'माधव कुमार नेपाल',
                    phone: '<b>फोन:</b> ९८०२४४६३२३',
                    email: '<b>इमेल:</b> nmadhavkumar3@gmail.com',
                },
                contactForm: {
                    name: {
                        label: 'नाम',
                        placeholder: 'तपाईंको नाम',
                    },
                    email: {
                        label: 'इमेल',
                        placeholder: 'example@gmail.com',
                    },
                    message: {
                        label: 'सन्देश',
                        placeholder: 'तपाईंको सन्देश',
                    },
                    submit: 'सन्देश पठाउनुहोस्',
                },
            },
        },
    },
}

i18next.use(initReactI18next).init({
    debug: true,
    resources,
    fallbackLng: 'en', // if not chosen
    lng: 'np',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
})

export default i18next
