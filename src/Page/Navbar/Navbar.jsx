import { FaMobileAlt } from 'react-icons/fa';


const Navbar = () => {
    const menulist = <>
        <li><a className="text-xl text-white hover:text-yellow-300">Home</a></li>
        <li><a className="text-xl text-white hover:text-yellow-300">About</a></li>
        <li><a className="text-xl text-white hover:text-yellow-300">Services</a></li>
        <li><a className="text-xl text-white hover:text-yellow-300">Portfolio</a></li>
        <li><a className="text-xl text-white hover:text-yellow-300">Testimonial</a></li>
        <li><a className="text-xl text-white hover:text-yellow-300">Contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100 p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {menulist}
                    </ul>
                </div>
                <a className="">
                    <img className="w:3/6 md:w-2/6 lg:w-2/6" src="https://i.ibb.co/7VvzCFq/logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menulist}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="">
                    <FaMobileAlt className='text-yellow-300 md:text-3xl lg:text-3xl'></FaMobileAlt> 
                </a> <span className='text-sm md:text-xl lg:text-xl text-white hover:text-yellow-300'>+880 1911 166118</span>
            </div>
        </div>
    );
};

export default Navbar;