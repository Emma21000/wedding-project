import { PiSnowflake } from "react-icons/pi";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { BsMoon } from "react-icons/bs";

export const navbar = {
    name: "K. D. Smith",
    icon: <PiSnowflake />,
    list: [
        {
            title: "HOME",
            path: "#home"
        },
        {
            title: "Portfolio",
            path: "#portfolio"
        },
        {
            title: "About",
            path: "#about"
        },
        {
            title: "Contact",
            path: "#contact"
        }
    ],
    menuIcon: <RiMenu3Line />,
    close: <IoCloseOutline />,
    light: <CiLight />,
    dark: <BsMoon />


}