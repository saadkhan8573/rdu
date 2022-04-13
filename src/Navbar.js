import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center w-full h-24 bg-white shadow-2xl px-16 sticky top-0 ">
                <div className="flex justify-center items-center">
                    <NavLink exact to="/"><h1 className="text-4xl">Saad</h1></NavLink>
                </div>
                <div>
                    <ul className="flex justify-start gap-4 list-none">
                        <NavLink exact to="/"><li className="text-white bg-blue-300 px-3 py-2 rounded">Home</li></NavLink>
                        <NavLink exact to="/"><li className="text-white bg-blue-300 px-3 py-2 rounded">About</li></NavLink>
                        <NavLink exact to="/todo"><li className="text-white bg-blue-300 px-3 py-2 rounded">Redux</li></NavLink>
                        <NavLink exact to="/search"><li className="text-white bg-blue-300 px-3 py-2 rounded">Search</li></NavLink>
                        <NavLink exact to="/slider"><li className="text-white bg-blue-300 px-3 py-2 rounded">Slider</li></NavLink>
                        <NavLink exact to="/"><li className="text-white bg-blue-300 px-3 py-2 rounded">Contact</li></NavLink>
                    </ul>
                </div>
                <div>
                    <NavLink exact to="/redux" className="text-white bg-blue-300 px-3 py-2 rounded">Sign in</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
