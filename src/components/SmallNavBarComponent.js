import React from "react";
import { IoMdClose } from "react-icons/io";

const SmallNavBarComponent = ({seeNavMenu, setSeeNavMenu}) => {
    return (
        <div className={`${!seeNavMenu && "hidden" } fixed w-screen h-screen bg-white flex flex-col gap-10 px-8 py-4`}>
                <div className="flex flex-row items-center justify-between">
                    {/*Logo */}
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/logos/Obled_Money.png"
                        }
                        className="w-24 h-20 object-contain"
                        alt="logo"
                    />

                    <button onClick={() => setSeeNavMenu(false)}>
                        <IoMdClose className="text-3xl text-primary" />
                    </button>
                </div>
                {/* Navigation links */}
                <ul className="flex flex-col gap-4 text-center font-medium">
                    <li>
                        <a
                            href="/"
                            className="hover:text-secondary hover:font-semibold"
                        >
                            Présentation
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a
                            href="/"
                            className="hover:text-secondary hover:font-semibold"
                        >
                            Frais et tarifs
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a
                            href="/"
                            className="hover:text-secondary hover:font-semibold"
                        >
                            Services
                        </a>
                    </li>
                    <hr />
                </ul>
            </div>
    )
}

export default SmallNavBarComponent;