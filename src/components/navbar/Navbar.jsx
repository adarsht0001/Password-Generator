import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Toogle from "../themeButton/Toogle";

export default function Navbar() {
    const { dark } = useContext(ThemeContext)
    return (
        <nav className={`${dark ? "dark" : "light"} flex justify-evenly items-center p-7`}>
            <div className="flex items-center ">
                <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <img
                    className="hidden h-16 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
            </div>
            <Toogle />
        </nav>

    );
}
