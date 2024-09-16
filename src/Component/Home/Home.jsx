import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header className="bg-blue-600 text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">

                    <div className="text-2xl font-bold">Moliva Travel Agency</div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-300">About</a></li>
                            <li><a href="#services" className="hover:text-blue-300">Services</a></li>
                        </ul>
                    </nav>


                    <div>
                        <Link
                            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-100 transition duration-300"
                            to="/contact"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
