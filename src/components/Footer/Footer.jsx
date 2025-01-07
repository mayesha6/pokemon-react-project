import { NavLink } from "react-router-dom"
import { FaFacebookF,FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter  } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#8EB486] pt-9">
        <div className="border-b-[1px] border-gray-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 mb-7 gap-x-3 gap-y-8">
                    <div>
                        <NavLink to='/' className='text-[#FDF7F4] font-bold text-2xl'><span className="text-5xl tracking-[-5px] leading-none">P</span>okemon</NavLink>
                        <p className="mt-3 mb-4 text-white">Welcome to Pokemon world</p>
                        <nav>
                            <ul className="flex flex-wrap items-center gap-3">
                                <li><a href="#" className="p-2 bg-white text-gray-800 duration-300 rounded-full hover:text-[#8EB486] inline-block"><FaFacebookF/></a></li>
                                <li><a href="#" className="p-2 bg-white text-gray-800 duration-300 rounded-full hover:text-[#8EB486] inline-block"><IoLogoInstagram/></a></li>
                                <li><a href="#" className="p-2 bg-white text-gray-800 duration-300 rounded-full hover:text-[#8EB486] inline-block"><IoLogoTwitter/></a></li>
                                <li><a href="#" className="p-2 bg-white text-gray-800 duration-300 rounded-full hover:text-[#8EB486] inline-block"><FaLinkedinIn/></a></li>
                                <li><a href="#" className="p-2 bg-white text-gray-800 duration-300 rounded-full hover:text-[#8EB486] inline-block"><FaGithub /></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
                            <div>
                                <h2 className="text-white font-semibold text-lg mb-4 uppercase">Shopping</h2>
                                <nav>
                                    <ul>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                        <NavLink to='/'>Home</NavLink>
                                        </li>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                            <NavLink to='/about'>About</NavLink>
                                        </li>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                            <NavLink to='/favourite'>Favourite</NavLink>
                                        </li>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                            <NavLink to='/contact'>contact</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h2 className="text-white font-semibold text-lg mb-4 uppercase">Experience</h2>
                                <nav>
                                    <ul>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                        <NavLink to='/'>Home</NavLink>
                                        </li>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                            <NavLink to='/about'>About</NavLink>
                                        </li>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                            <NavLink to='/favourite'>favourite</NavLink>
                                        </li>
                                        <li className="text-white font-semibold mb-2 capitalize duration-300 hover:text-gray-500">
                                            <NavLink to='/contact'>contact</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h2 className="text-white font-semibold text-lg mb-4 uppercase">Newsletter</h2>
                                <p className="text-white my-3">Be the first to know about new arrival, sales, and promos!!!</p>
                                <form action="">
                                    <input type="email" placeholder="Your Email" className="bg-[#FDF7F4] outline-none p-2 border-b-2 border-gray-500" />
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        <div>
            <p className="text-white text-center py-3">Design and code by <span className="text-[#FDF7F4] font-semibold">Mayesha Soumy</span></p>
        </div>
    </footer>
  )
}

export default Footer