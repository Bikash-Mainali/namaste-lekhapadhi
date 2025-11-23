// src/components/Header.tsx
import { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";
import { HiMenu, HiX } from "react-icons/hi";

type NavLink = {
    name: string;
    link: string;
};

const navLinks: NavLink[] = [
    { name: "गृहपृष्ठ", link: "/" },
    { name: "हाम्रोबारे", link: "/namaste-lekhapadhi/about" },
    { name: "सेवाहरू", link: "/namaste-lekhapadhi/services" },
    { name: "जानकारी", link: "/namaste-lekhapadhi/janakari" },
    { name: "लेख", link: "/namaste-lekhapadhi/blogs" },
    { name: "ग्यालरी", link: "/namaste-lekhapadhi/gallery" },
    { name: "सम्पर्क", link: "/namaste-lekhapadhi/contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Convert English digits to Nepali digits
    function toNepaliDigits(num: number | string) {
        const nepaliNums = ["०","१","२","३","४","५","६","७","८","९"];
        return num.toString().replace(/\d/g, (d) => nepaliNums[parseInt(d)]);
    }

    // Get Nepali time
    function getNepalTimeNepali() {
        const now = new Date();
        const nptTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
        const hours = nptTime.getHours();
        const minutes = String(nptTime.getMinutes()).padStart(2, "0");
        const seconds = String(nptTime.getSeconds()).padStart(2, "0");

        let period = "बिहान";
        if (hours >= 12) period = "दिउँसो";
        if (hours >= 16) period = "साँझ";
        if (hours >= 19) period = "बेलुका";

        const hour12 = hours % 12 || 12;
        return `${period} ${toNepaliDigits(hour12)}:${toNepaliDigits(minutes)}:${toNepaliDigits(seconds)}`;
    }

    // Full Nepali date + time
    function getNepaliDateShortcut(): string {
        const date = new NepaliDate();
        const year = date.getYear();
        const month = date.getMonth();
        const day = date.getDate();

        const nepaliWeekdays = ["आइतबार","सोमबार","मंगलबार","बुधबार","बिहीबार","शुक्रबार","शनिबार"];
        const nepaliMonths = ["बैशाख","जेठ","असार","श्रावण","भाद्र","आश्विन","कार्तिक","मंसिर","पौष","माघ","फाल्गुण","चैत्र"];

        return `${nepaliMonths[month]} ${toNepaliDigits(day)}, ${toNepaliDigits(year)}, ${nepaliWeekdays[date.getDay()]}, ${getNepalTimeNepali()}`;
    }

    const [dateTime, setDateTime] = useState(getNepaliDateShortcut());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(getNepaliDateShortcut()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="fixed top-0 w-full  z-50">
            {/* Top Bar */}
            <div className="h-11 flex justify-end items-center px-4 sm:px-6 bg-gray-900 text-white text-sm sm:text-base">
                <p>{dateTime}</p>
            </div>

            {/* Main Navigation */}
            <nav className="flex flex-col [@media(min-width:1100px)]:flex-row items-center justify-between px-4 sm:px-6 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 h-[var(--header-height)] z-50">
                {/* Logo */}
                <a href="/" className="flex self-auto [@media(max-width:1100px)]:self-start items-center space-x-3">
                    <img src="/images/brand.svg" height="60" width="60" alt="नमस्ते लोगो" className="object-contain" />
                    <span className="text-1xl md:text-4xl font-bold gradient-text py-2">नमस्ते लेखापढी</span>
                </a>

                {/* Nav Links */}
                <div className="[@media(max-width:800px)]:hidden flex flex-col self-auto [@media(max-width:1100px)]:self-end md:flex-row items-center [@media(max-width:1100px)]:pb-4 space-y-2 md:space-y-0 md:space-x-6 text-lg md:text-2xl">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.link} className="text-gray-700 hover:text-blue-600 transition">
                            {link.name}
                        </a>
                    ))}
                </div>
                {/* Mobile Menu */}
                <div className="[@media(min-width:800px)]:hidden absolute top-0 right-0 m-4 z-50">
                    {/* Mobile Menu Button */}
                    <button
                        className="[@media(min-width:1100px)]:block text-3xl text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX/> : <HiMenu/> }
                    </button>

                </div>
            </nav>
            <div

            >
                {menuOpen && (
                    <div className="flex bg-white flex-col space-y-4 px-4 sm:px-6 py-4 text-lg shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.link}
                                className="text-gray-700 hover:text-blue-600 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
