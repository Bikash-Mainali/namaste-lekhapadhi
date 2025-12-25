// src/pages/Home.tsx
import { NavLink } from 'react-router'
import landImg from '../assets/images/home-bg.png'
import { useTranslation } from 'react-i18next'

export const Home = () => {
    const { t } = useTranslation()
    return (
        <>
            <section
                className="relative h-screen w-full"
                style={{
                    backgroundImage: `url(${landImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

                {/* Vertical Social Link */}
                <a
                    href="https://www.facebook.com/binodkumar.mainali"
                    id="vertical-google"
                    className="fixed top-1/2 right-0 z-40 origin-top-right rotate-90 bg-red-600 px-4 text-white"
                >
                    फेसबुक
                </a>

                {/* Centered Content */}
                <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 pt-[30vh] text-center text-white">
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">{t('welcome')}</h1>
                    <p className="mb-8 max-w-3xl text-lg sm:text-xl md:text-2xl">
                        उपयुक्त जग्गा पत्ता लगाउन तपाईंको भरपर्दो साझेदार
                    </p>
                    <NavLink
                        to="/contact"
                        className="gradient-background transform cursor-pointer rounded-full bg-black px-7 py-3 font-bold tracking-widest text-white transition-all duration-300 hover:scale-105 sm:px-12 sm:py-4 sm:text-xl dark:bg-gray-950"
                    >
                        सम्पर्क गर्नुहोस्
                    </NavLink>
                </div>
            </section>
        </>
    )
}
