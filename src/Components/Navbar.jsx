import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth';

const Navbar = () => {
    const { user, logout, search, setsearch,cartItems } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItemsCount] = useState(0);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        setMobileMenuOpen(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="bg-gray-800 text-amber-100 shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold italic">
                            E-<span className="text-amber-400">Store</span>
                        </Link>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-1 mx-6 max-w-md">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 border border-gray-600"
                                value={search}
                                onChange={(e) => setsearch(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-2.5 text-gray-400"
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/home"
                            className="hover:text-amber-400 transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/cart"
                            className="flex items-center hover:text-amber-400 transition-colors duration-200 relative"
                        >
                            <i className="bi bi-cart2 mr-1"></i>
                            Cart
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-4 bg-amber-500 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="relative group">
                                <Link to={'/profile'} className="focus:outline-none">
                                    <div className="h-10 w-10 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center overflow-hidden">
                                        {user.avatar ? (
                                            <img src='/yash.jpeg' alt="Profile" className="h-full w-full object-fill" />
                                        ) : (
                                            <i className="bi bi-person-fill-gear text-gray-800 text-xl"></i>
                                        )}
                                    </div>
                                </Link>
                               
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <Link
                                    to="/Register"
                                    className="px-3 py-1 rounded hover:text-amber-400 transition-colors duration-200"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    to="/"
                                    className="px-3 py-1 rounded bg-amber-500 text-gray-900 hover:bg-amber-400 transition-colors duration-200"
                                >
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <i className="bi bi-x-circle text-2xl"></i>
                            ) : (
                                <i className="bi bi-list text-2xl"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-700 px-4 py-3">
                    <form onSubmit={handleSearch} className="mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 rounded-full bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 border border-gray-500"
                                value={search}
                                onChange={(e) => setsearch(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-2.5 text-gray-300"
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col space-y-3">
                        <Link
                            to="/home"
                            className="px-3 py-2 hover:text-amber-400 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/cart"
                            className="px-3 py-2 flex items-center hover:text-amber-400 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <i className="bi bi-cart2 mr-2"></i>
                            Cart
                            {cartItemsCount > 0 && (
                                <span className="ml-auto bg-amber-500 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <>
                                <div className="px-3 py-2 text-amber-400 border-b border-gray-600">
                                    Hi, {user.name}
                                </div>
                                <Link
                                    to="/profile"
                                    className="px-3 py-2 hover:text-amber-400 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/orders"
                                    className="px-3 py-2 hover:text-amber-400 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    My Orders
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-3 py-2 text-left hover:text-amber-400 transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/Register"
                                    className="px-3 py-2 hover:text-amber-400 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    to="/"
                                    className="px-3 py-2 text-center bg-amber-500 text-gray-900 rounded hover:bg-amber-400 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;