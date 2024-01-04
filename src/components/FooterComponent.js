import React from "react";
import {
    FaSquareFacebook,
    FaSquareTwitter,
    FaSquareYoutube,
    FaSquarePinterest,
    FaInstagram,
} from "react-icons/fa6";

const FooterComponent = () => {
    return (
        <div className="flex justify-center bg-third py-10 pb-6 bg-secondary bg-opacity-10">
            <div className="relative flex flex-col md:flex-row gap-6 px-4 w-full md:w-11/12 max-w-screen-xl justify-between">
                <div className="flex flex-col justify-between gap-4">
                    {/*Logo */}
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/logos/Obled_Money.png"
                        }
                        className="w-32 h-28 object-contain"
                        alt="logo"
                    />
                    <div className="flex flex-col gap-2">
                        <p>Built by blackCode 😊</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32">
                    {/* Company */}
                    <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className="text-base font-semibold">Page Services</h1>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Paiement Facture CIE
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Paiement Facture SODECI
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Paiement Canal +
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Paiement Frais scolaires
                            </a>
                        </li>
                    </ul>
                    {/* Explore */}
                    <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className="text-base font-semibold">Contact</h1>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                États Unis : +18452880858 –
                            </a>
                        </li>
                    </ul>
                    {/* Follow Us */}
                    <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className="text-base font-semibold">
                                Follow Us
                            </h1>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquareFacebook className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquareTwitter className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquareYoutube className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquarePinterest className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaInstagram className="text-lg" />
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
