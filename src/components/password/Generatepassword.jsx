import { useState } from "react";
import useGeneratePassword from "../../hooks/useGeneratePassword";

function Generatepassword() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const { handleToggle, uppercase, lowercase, numbers, symbols, createPassword } = useGeneratePassword()

    const getPassword = () => {
        setPassword(createPassword(length))
    }
    const handleChange = (event) => {
        setLength(event.target.value);
    };
    return (
        <div className="w-full p-10 text-center">
            <div className="p-10">
                <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">Password length:{length}</label>
                <input id="default-range" type="range" value={length} min={8}
                    max={20} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={handleChange} />
            </div>
            <div className="flex gap-8 justify-center">
                <div className="flex-col text-center">
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"
                            checked={uppercase}
                            name="uppercase"
                            onChange={handleToggle}
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <p className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Upper Case</p>
                </div>
                <div className="flex-col text-center">
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"
                            name="lowercase"
                            checked={lowercase}
                            onChange={handleToggle}
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <p className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lower Case</p>
                </div>
                <div className="flex-col text-center">
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"
                            name="numbers"
                            checked={numbers}
                            onChange={handleToggle} />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <p className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Numbers</p>
                </div>
                <div className="flex-col text-center">
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"
                            name="symbols"
                            checked={symbols}
                            onChange={handleToggle} />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <p className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Symbols</p>
                </div>

            </div>
            <button className="mt-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                disabled={!uppercase && !lowercase && !numbers && !symbols} onClick={getPassword}>
                Generate Password
            </button>

            <div className="relative mt-5">
                <button className="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => setShow(!show)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
                <input type={show ? "text" : "password"} className="block w-full p-4 pl-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="...." value={password} readOnly />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                    navigator.clipboard.writeText(password)
                }}>copy</button>
            </div>

        </div>
    )
}

export default Generatepassword