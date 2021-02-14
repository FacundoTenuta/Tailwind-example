import React from 'react'

export const Header = () => {
    return (
        <div className="bg-indigo-700 p-4 flex justify-between items-center">

            {/* Left side */}
            <div className="flex items-center">
                <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-256.png" width="50" alt="Logo" className="mr-2"/>
                <a href="#" className="inline-block p-2 text-indigo-200 mr-2 hover:text-indigo-100">Home</a>
                <a href="#" className="inline-block p-2 text-indigo-200 hover:text-indigo-100">About</a>
            </div>

            {/* Right side */}
            <div className="hidden md:block">
                <a href="#" className="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2">Login</a>
                <a href="#" className="inline-block p-2 px-4 text-yellow-700 hover:bg-yellow-300 hover:text-yellow-800 bg-yellow-400 rounded transition ease-in duration-150">Signup</a>
            </div>

        </div>
    )
}
