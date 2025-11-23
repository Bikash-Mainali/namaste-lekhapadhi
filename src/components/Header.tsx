// src/components/Header.tsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NepaliDate from "nepali-date-converter";
import { HiMenu, HiX } from "react-icons/hi";

type NavLinkItem = {
    name: string;
    link: string;
};

const brand = import.meta.env.BASE_URL + "images/brand.svg";

const navLinks: NavLinkItem[] = [
    { name: "गृहपृष्ठ", link: "/" },
    { name: "हाम्रो बारे", link: "/about" },
    { name: "सेवाहरू", link: "/services" },
    { name: "जानकारी", link: "/janakari" },
    { name: "ब्लगहरू", link: "/blogs" },
    { name: "फोटो ग्यालरी", link: "/gallery" },
    { name: "सम्पर्क", link: "/contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toNepaliDigits(num: number | string) {
        const nepaliNums = ["०","१","२","३","४","५","६","७","८","९"];
        return num.toString().replace(/\d/g, (d) => nepaliNums[parseInt(d)]);
    }

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

    const getNavClass = ({ isActive }: { isActive: boolean }) =>
        `${isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"} transition`;

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="h-11 flex justify-end items-center px-4 sm:px-6 bg-gray-900 text-white text-sm sm:text-base">
                <p>{dateTime}</p>
            </div>

            <nav className="flex flex-col [@media(min-width:1100px)]:flex-row items-center justify-between px-4 sm:px-6 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 h-[var(--header-height)] z-50">
                <Link to="/" className="flex self-auto [@media(max-width:1100px)]:self-start items-center space-x-3">
                    <img src={brand} height="60" width="60" alt="नमस्ते लोगो" className="object-contain" />
                    <span className="text-4xl font-bold gradient-text py-2">नमस्ते लेखापढी</span>
                </Link>

                <div className="[@media(max-width:900px)]:hidden flex flex-col self-auto [@media(max-width:1100px)]:self-end md:flex-row items-center [@media(max-width:1100px)]:pb-4 space-y-2 md:space-y-0 md:space-x-10 text-xl">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.link}
                            end={link.link === "/"}
                            className={getNavClass}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="[@media(min-width:900px)]:hidden absolute top-0 right-0 m-4 z-50">
                    <button
                        className="[@media(min-width:900px)]:block text-3xl text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu /> }
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="flex bg-white flex-col space-y-4 px-4 sm:px-6 py-4 text-lg shadow-lg">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.link}
                            end={link.link === "/"}
                            className={getNavClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
