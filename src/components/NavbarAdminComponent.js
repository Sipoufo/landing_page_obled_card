import React from "react";
import ButtonNavBarWidget from "../widgets/buttonNavBarWidget";
import { SiWindows11 } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsBellFill } from "react-icons/bs";

const NavbarAdminComponent = () => {
    return (
        <div className="flex flex-col justify-between w-3/12 md:w-2/12  bg-secondary bg-opacity-10 px-4 py-6 group hover:absolute md:hover:relative hover:h-screen hover:w-6/12 md:hover:w-2/12">
            <div className="flex flex-col w-full gap-8">
                
            <img src={process.env.PUBLIC_URL + "/assets/logos/Obled_Money.png"} className="w-8/12 object-contain" alt="logo" />
                <div className="flex flex-col">
                    <ButtonNavBarWidget
                        link={"/"}
                        icon={<HiOutlineUsers />}
                        name={"Admin"}
                    />
                    <ButtonNavBarWidget
                        link={"/notification"}
                        icon={<BsBellFill />}
                        name={"Notifications"}
                    />
                    <ButtonNavBarWidget
                        link={"/setting/account"}
                        icon={<AiOutlineSetting />}
                        name={"Setting"}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavbarAdminComponent;