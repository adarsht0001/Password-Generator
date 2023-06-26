import { useState } from "react"
import Generatepassword from "../password/Generatepassword"
import UID from "../uid/UID"

const Main = () => {
    const [active, setActive] = useState("password")

    const setUID = () => {
        setActive("uid")
    }
    const setPass = () => {
        setActive("password")
    }



    return (
        <div className="flex justify-center mt-9">
            <div className="flex flex-col items-center w-1/2">
                <h4>{active === "password" ? "Password Generator" : "Unique ID"}</h4>
                <div className="inline-flex rounded-md shadow-sm m-5 w-1/2">
                    <button aria-current="page" className="w-1/2 text-center px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-700 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={setPass}
                    >
                        Password
                    </button>
                    <button className="w-1/2 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-blue-700 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={setUID}
                    >
                        Unique ID
                    </button>
                </div>
                {active === "password" ?
                    <Generatepassword />
                    : <UID />
                }
            </div>
        </div>

    )
}

export default Main
