import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { IoSearch } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import avatarImg from '../assets/avatar.png';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/orders' },
  // { name: 'Cart Page', href: '/cart-page' },
  // { name: 'Check Out', href: '/check-out' },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Corrected selector for cartItems
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
const {currentUser,logoutUser}=useAuth()

const handleLogOut=()=>{
  logoutUser();
}

  return (
    <header className="max-w-screen-2xl mx-auto px-20 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="w-7 h-7" />
          </Link>

          {/* Search input */}
          <div className="relative sm:w-72 w-40">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {/* User Avatar / Login */}
          <div>
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={avatarImg}
                    alt="User Avatar"
                    className={`size-7 rounded-full ${
                      isDropdownOpen ? 'ring-2 ring-blue-500' : ''
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul>
                      {
                      navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.href}
                            className="text-sm py-2 px-4 block hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))
                      }
                      <li>
                        <button 
                        onClick={handleLogOut}
                        className="text-sm py-2 px-4 w-full block hover:text-primary">
                          Logout
                          </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-6" />
              </Link>
            )}
          </div>

          {/* Wishlist */}
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <MdShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
