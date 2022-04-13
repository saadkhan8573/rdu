import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen flex-col gap-y-4">
                <h1 className="text-4xl font-bold">Sorry</h1>
                <h2 className="text-3xl font-bold">Page Not found</h2>
                <NavLink exact to="/"><button className="text-white bg-blue-400 px-6 py-4 rounded">Back to Home</button></NavLink>
            </div>
        </>
    )
}

export default Error
