import { useState } from "react";
import useGeneratePassword from "../../hooks/useGeneratePassword";

function Generatepassword() {
    const [length, setLength] = useState(8);
    const { handleToggle, uppercase, lowercase, numbers, symbols } = useGeneratePassword()

    const handleChange = (event) => {
        setLength(event.target.value);
    };
    return (
        <div className="w-full bg-red-900 p-10">
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

        </div>
    )
}

export default Generatepassword