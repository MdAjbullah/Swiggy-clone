import React from 'react';
import logo from './Header/image/Swiggy-Logo.png'

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-evenly">
                    <div className="mb-6 md:mb-0 ">

                        <div className='flex'><img src={logo} alt=""  className='w[150px] h-[50px]'/>
                        <h3 className="text-2xl font-bold text-white mb-4 mt-3">Swiggy</h3></div>
                        
                        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-4">Company</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">About</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Careers</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Team</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Swiggy One</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Swiggy Instamart</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Swiggy Genie</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-4">Contact us</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Help & Support</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Partner with us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Ride with us</a></li>
                        </ul>
                        <div className="mb-6 md:mb-0 mt-4">
                            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Investor Relations</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0 ">
                        <h3 className="text-xl font-bold text-white mb-4">We deliver to:</h3>
                        <ul>
                            <li className="mb-2">Bangalore</li>
                            <li className="mb-2">Gurgaon</li>
                            <li className="mb-2">Hyderabad</li>
                            <li className="mb-2">Delhi</li>
                            <li className="mb-2">Mumbai</li>
                            <li className="mb-2">Pune</li>
                            <li className="mb-2">
                                <div className="flex items-center">
                                    <span className="text-gray-400">589 cities</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;