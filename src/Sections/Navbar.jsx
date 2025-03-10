import React from "react";
import { navbarsource } from "../Constants/data.json"; // Ensure correct import

const NavItems = () => {
    return (
        <div className="flex-wrap items-center mx-auto">
            {navbarsource.map((item, index) => (
                <a className="text-white px-5 sm:text-xl" key={item.id} href={item.url}>{item.name}</a> 
            ))}
        </div>
    )
}

const Navbar = () => {
    return (
        <div className="navbar left-0 right-0 top-0 fixed bg-black shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center py-4">
                <NavItems />
            </div>
        </div>
    );
}

export default Navbar;