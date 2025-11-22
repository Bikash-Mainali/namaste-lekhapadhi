// src/components/Footer.tsx
import AnimatedWave from "./AnimatedWave.tsx";
import {
    FaEnvelope,
    FaFacebookF,
    FaLinkedinIn,
    FaMapMarker,
    FaPhone
} from "react-icons/fa";

export default function Navbar() {
    return (
        <footer className="relative flex flex-col h-auto bg-gray-800 text-white overflow-hidden">
            <AnimatedWave/>
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 p-6 sm:p-10 lg:p-20">

                {/* Column 1 */}
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <div className="space-y-3 text-sm sm:text-base">
                        <h1 className="flex justify-center md:justify-start space-x-3 text-2xl sm:text-3xl font-bold">
                            नमस्ते लेखापढी & कानुनी सेवा                        </h1>
                        <p className="text-sm sm:text-base">उपयुक्त जग्गा फेला पार्न तपाईंको भरपर्दो साझेदार</p>
                        <p className="text-sm sm:text-base">© 2025 NLKS. All copy rights reserved.</p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <div className="space-y-2 text-sm sm:text-base">
                        <h1 className="text-lg sm:text-2xl font-bold underline mb-2 sm:mb-4">सम्पर्क</h1>
                        <a href="tel:+4733378901" className="flex items-center gap-3 justify-center md:justify-start hover:underline">
                            <FaPhone className="text-xl sm:text-2xl" aria-hidden="true"/>
                            <span>9851069249</span>
                        </a>
                        <a href="mailto:binodkumarmainali18@gmail.com" className="flex items-center gap-3 justify-center md:justify-start hover:underline">
                            <FaEnvelope className="text-xl sm:text-2xl" aria-hidden="true"/>
                            <span>binodkumarmainali18@gmail.com</span>
                        </a>
                        <a href="https://maps.app.goo.gl/zr3DQud9C5zY3fTx6" className="flex items-center gap-3 justify-center md:justify-start hover:underline">
                            <FaMapMarker className="text-xl sm:text-2xl" aria-hidden="true"/>
                            <span>कलंकी, काठमाडौं</span>
                        </a>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-4 items-center md:items-end text-center md:text-right">
                    <div className="flex space-x-4 sm:space-x-5">
                        {[
                            {icon: <FaFacebookF/>, color: "blue"},
                            {icon: <FaLinkedinIn/>, color: "blue"},
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full
                                    bg-white text-blue-500
                                    hover:bg-blue-500 hover:text-white
                                    transition-transform duration-300 transform hover:scale-110 shadow text-lg sm:text-2xl`}
                                aria-label={idx === 0 ? "फेसबुक" : "लिंक्डइन"}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
