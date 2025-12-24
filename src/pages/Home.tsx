// src/pages/Home.tsx
import { NavLink } from "react-router";
import landImg from '../assets/images/home-bg.png';

export const Home = () => {
    return (
        <>
            <section
                className="relative w-full h-screen"
                style={{
                    backgroundImage: `url(${landImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

                {/* Vertical Social Link */}
                <a
                    href="https://www.facebook.com/binodkumar.mainali"
                    id="vertical-google"
                    className="fixed top-1/2 right-0 text-white rotate-90 origin-top-right bg-red-600 px-4 z-40"
                >
                    फेसबुक
                </a>

                {/* Centered Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white pt-[30vh] w-full px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        नमस्ते लेखापढीमा स्वागत छ
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
                        उपयुक्त जग्गा पत्ता लगाउन तपाईंको भरपर्दो साझेदार
                    </p>
                    <NavLink
                        to="/contact"
                        className="hover:scale-105 transform transition-all duration-300 sm:text-xl rounded-full bg-black dark:bg-gray-950 text-white py-3 sm:py-4 px-7 sm:px-12 tracking-widest cursor-pointer gradient-background font-bold"
                    >
                        सम्पर्क गर्नुहोस्
                    </NavLink>
                </div>
            </section>
        </>
    );
};
