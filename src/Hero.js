import React from 'react'

export const Hero = () => {
    return (
        <div className="md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100">
            {/* Left */}
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6">Welcome to Mountain!</h2>
                <p className="mb-6">There is never a sad day here!</p>

                <a href="#" className="inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 rounded mr-2">Learn More</a>
                <a href="#" className="inline-block py-3 px-6 text-lg bg-orange-400 text-orange-800 hover:bg-orange-300 rounded">Get Started</a>
            </div>

            {/* Right */}
            <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1613092075733-41de475e941b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1422&q=80" alt="Happy Mountain" className="w-full rounded shadow-2xl"/>
            </div>
        </div>
    )
}
