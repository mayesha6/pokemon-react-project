import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-[#8EB486] py-2">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">

                {/* logo */}
                <div className="">
                    <NavLink to='/' className='text-[#FDF7F4] font-bold text-2xl'><span className="text-5xl tracking-[-5px] leading-none">P</span>okemon</NavLink>
                </div>

                {/* desktop menu  */}
                <nav className="hidden md:block">
                    <ul className="flex gap-3">
                        <li className="text-[#FDF7F4] font-semibold capitalize text-lg hover:text-gray-500">
                            <NavLink to='/'>home</NavLink>
                        </li>
                        <li className="text-[#FDF7F4] font-semibold capitalize text-lg hover:text-gray-500">
                            <NavLink to='/favourite'>favourite</NavLink>
                        </li>
                        <li className="text-[#FDF7F4] font-semibold capitalize text-lg hover:text-gray-500">
                            <NavLink to='/about'>about</NavLink>
                        </li>
                        <li className="text-[#FDF7F4] font-semibold capitalize text-lg hover:text-gray-500">
                            <NavLink to='/contact'>contact</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* menu button  */}
                <button className="block md:hidden text-[#FDF7F4]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* mobile menu  */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                        <nav className="flex flex-col items-center space-y-4 p-4">
                            <ul className="">
                                <li className="text-[#8EB486] font-semibold capitalize text-lg">
                                    <NavLink to='/'>home</NavLink>
                                </li>
                                <li className="text-[#8EB486] font-semibold capitalize text-lg">
                                    <NavLink to='/favourite'>favourite</NavLink>
                                </li>
                                <li className="text-[#8EB486] font-semibold capitalize text-lg">
                                    <NavLink to='/about'>about</NavLink>
                                </li>
                                <li className="text-[#8EB486] font-semibold capitalize text-lg">
                                    <NavLink to='/contact'>contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    </header>
  )
}

export default Header