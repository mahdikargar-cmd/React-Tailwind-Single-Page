import {AiOutlineSearch} from "react-icons/ai";
import shopLogo from "../../assets/Buy.svg";
import NikeLogo from "../../assets/simple-icons_nike.svg";


export function Navbar() {
    return (
        <nav className="navbar">
            <div className="flex flex-wrap items-center justify-between p-1 md:p-4">
                <div className="flex items-center md:ml-16 sm:grid-cols-3 grid-cols-8">
                    <h2 className="md:pr-6 pr-2 md:pl-10 text-white">NIKE</h2>
                    <img className="w-16 md:w-full" src={NikeLogo} alt="Nike" />
                </div>

                <div className="hidden w-full md:block md:w-auto text-white -mr-24" id="navbar-default">
                    <ul className="font-medium flex flex-col md:p-0 mt-4 rounded-lg text-white md:flex-row md:space-x-14">
                        <li className="nav-item">
                            <a href="#" aria-current="page">Men</a>
                            <div className="line"></div>
                        </li>
                        <li className="nav-item">
                            <a href="#">Women</a>
                            <div className="line"></div>
                        </li>
                        <li className="nav-item">
                            <a href="#">Kids</a>
                            <div className="line"></div>
                        </li>
                        <li className="nav-item">
                            <a href="#">Customise</a>
                            <div className="line"></div>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center md:mr-16 sm:grid-cols-4 mr-2">
                    <div className="relative mr-10">
                        <div className="absolute inset-y-0 flex items-center pl-2 cursor-pointer">
                            <AiOutlineSearch size={20} color="blue" />
                        </div>
                        <div>
                            <input type="search" className="rounded-2xl text-center" placeholder="Search" required />
                        </div>
                    </div>
                    <div>
                        <img src={shopLogo} alt="Shop" />
                    </div>
                </div>
            </div>
        </nav>
    );
}