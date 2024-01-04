import React from "react";
import ButtonWidget from "../widgets/ButtonWidget";
import { FaBars } from "react-icons/fa6";

const NavbarComponent = ({ setSeeNavMenu }) => {
    return (
        <div className="px-6 py-4 flex bg-secondary bg-opacity-10 font-medium font-roboto">
            <div className="w-full flex flex-row justify-between items-center">
                {/*Logo */}
                <img
                    src={
                        process.env.PUBLIC_URL + "/assets/logos/Obled_Money.png"
                    }
                    className="w-24 h-20 object-contain"
                    alt="logo"
                />
                {/* Navigation links */}
                <ul className="hidden md:flex flex-row gap-4">
                    <li>
                        <a
                            href="/"
                            className="hover:text-secondary hover:font-semibold"
                        >
                            Présentation
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="hover:text-secondary hover:font-semibold"
                        >
                            Frais et tarifs
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="hover:text-secondary hover:font-semibold"
                        >
                            Services
                        </a>
                    </li>
                </ul>
                {/* Other */}
                <div className="hidden md:flex flex-row gap-4 items-center">
                    <a href="/auth" className="bg-secondary text-white bg-opacity-80 hover:bg-opacity-100 rounded-md px-6 py-3 font-semibold">
                        Se connecter
                    </a>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setSeeNavMenu(true)}
                >
                    <FaBars />
                </button>
            </div>
        </div>
    );
};

export default NavbarComponent;
