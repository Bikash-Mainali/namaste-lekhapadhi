// src/components/Footer.tsx
import AnimatedWave from './AnimatedWave.tsx'
import { FaFacebookF, FaPhone } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { ImLocation2 } from 'react-icons/im'

export default function Footer() {
    return (
        <footer className="relative flex h-auto flex-col overflow-hidden bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-200">
            <AnimatedWave />
            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/20"></div>

            <div className="relative grid w-full grid-cols-1 gap-8 p-6 text-center sm:gap-12 sm:p-10 md:grid-cols-3 lg:grid-cols-4 lg:p-20">
                {/* Column 1 */}
                <div className="order-4 flex flex-col gap-4 sm:order-1">
                    <div className="space-y-3 text-sm sm:text-base">
                        <h1 className="space-x-3 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                            नमस्ते लेखापढी & कानुनी सेवा
                        </h1>
                        <p className="text-xs sm:text-sm">उपयुक्त जग्गा फेला पार्न तपाईंको भरपर्दो साझेदार</p>
                        <p className="text-xs sm:text-sm">© 2025 NLKS. All copy rights reserved.</p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="order-2 flex flex-col flex-wrap gap-4">
                    <div className="space-y-2">
                        <h1 className="text-lg font-bold underline">महत्त्वपूर्ण लिंकहरू</h1>
                        <p className="text-sm underline hover:text-blue-300 dark:hover:text-blue-400">
                            <a href="https://dolma.gov.np/">भूमि व्यवस्थापन तथा अभिलेख विभाग</a>
                        </p>
                        <p className="text-sm underline hover:text-blue-300 dark:hover:text-blue-400">
                            <a href="https://kalanki.dolma.gov.np/office/kalanki">मालपोत कार्यालय कलंकी, काठमाण्डौं</a>
                        </p>
                        <p className="text-sm underline hover:text-blue-300 dark:hover:text-blue-400">
                            <a href="https://www.dolma.gov.np/office/dept/content/form-format-1643263780">
                                डाउनलोड / फारमको ढाँचा
                            </a>
                        </p>
                        <p className="text-sm underline hover:text-blue-300 dark:hover:text-blue-400">
                            <a href="https://giwmscdnone.gov.np/media/pdf_upload/right-to-information-3_zu65sc7.pdf?utm_source=chatgpt.com">
                                सूचनाको हक सम्बन्धी ऐन
                            </a>
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="order-3 flex flex-col flex-wrap gap-4">
                    <div className="space-y-2 text-sm sm:text-base">
                        <h1 className="text-lg font-bold underline">सम्पर्क</h1>
                        <a
                            href="tel:+4733378901"
                            className="flex flex-wrap justify-center gap-3 text-sm underline hover:text-blue-300 hover:underline dark:hover:text-blue-400"
                        >
                            <span>
                                <FaPhone className="text-xl sm:text-2xl" aria-hidden="true" />
                            </span>
                            <span>9851069249</span>
                        </a>

                        <a
                            href="https://maps.app.goo.gl/zr3DQud9C5zY3fTx6"
                            className="flex flex-wrap justify-center gap-3 text-sm underline hover:text-blue-300 hover:underline dark:hover:text-blue-400"
                        >
                            <span>
                                <ImLocation2 className="text-xl" aria-hidden="true" />
                            </span>
                            <span>कलंकी, काठमाडौं</span>
                        </a>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="order-3 flex flex-col flex-wrap items-center gap-4 sm:order-4">
                    <div className="flex space-x-4 sm:space-x-5">
                        {[
                            {
                                id: 1,
                                icon: <FaFacebookF />,
                                color: 'blue',
                                href: 'https://www.facebook.com/binodkumar.mainali',
                            },
                            {
                                id: 2,
                                icon: <FcGoogle />,
                                color: 'blue',
                                href: 'https://share.google/efNct91hwVi1KUvOO',
                            },
                        ].map((item, idx) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={`flex h-10 w-10 transform items-center justify-center rounded-full bg-white text-lg text-blue-500 shadow transition-transform duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white sm:h-12 sm:w-12 sm:text-2xl dark:bg-gray-700 dark:text-white`}
                                aria-label={idx === 0 ? 'फेसबुक' : 'लिंक्डइन'}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
