import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiFlipkart } from "react-icons/si";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            <header className="text-gray-500 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex font-medium items-center text-gray-500 hover:text-gray-900 mb-4 md:mb-0">
                        <SiFlipkart size={50} />
                        <span className="ml-3 text-xl">Flipkart</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/shop" className="mr-5 hover:text-gray-900 font-semibold">Shop</Link>
                        <Link to="/admin" className="mr-5 hover:text-gray-900 font-semibold">Admin</Link>
                        <Link to="/contact" className="mr-5 hover:text-gray-900 font-semibold">Contact</Link>
                        <Link to="/login" className="mr-5 flex items-center hover:text-gray-900 font-semibold">
                            <FaRegUserCircle size={25} />
                            <span className='ml-2'>Login</span>
                            <RiArrowDropDownLine size={25} />
                        </Link>
                        <Link to="/cart" className="mr-5 flex items-center hover:text-gray-900 font-semibold">
                            <AiOutlineShoppingCart size={25} />
                            <span className='ml-2'>Cart</span>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
