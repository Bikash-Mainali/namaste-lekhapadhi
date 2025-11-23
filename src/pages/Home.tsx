// src/pages/Home.tsx
import {NavLink} from "react-router";

export const Home = () => {
    return (
        <>
            <section className="relative w-full h-screen" // full viewport height
                     style={{
                         backgroundImage: `url(${import.meta.env.BASE_URL}images/land.png)`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                     }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                <button id="vertical-facebook" className="fixed top-3/6 right-0 text-white rotate-90 origin-top-right
 bg-blue-600 px-4 z-10 cursor-pointer">फेसबुक
                </button>
                {/* Centered Content */}
                <div
                    className="relative z-10 flex flex-col items-center justify-center text-center text-white pt-[30vh]  w-full px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        नमस्ते कानुनी सेवालयमा स्वागत छ
                    </h1>
                    <p className="text-lg md:text-2xl max-w-3xl mb-8">
                        उपयुक्त जग्गा पत्ता लगाउन तपाईंको भरपर्दो साझेदार
                    </p>
                    <NavLink to="/contact"
                             className="hover:scale-105 transform transition-all duration-300 text-lg md:text-2xl rounded-full bg-black py-4 px-12 tracking-widest cursor-pointer gradient-background font-bold">
                        सम्पर्क गर्नुहोस्
                    </NavLink>
                </div>
            </section>

        </>

    )
}
