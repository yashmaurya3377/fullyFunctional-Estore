import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Auth';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useContext(AuthContext);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 20.00; 
  const total = subtotal + shipping;
  const navigate=useNavigate
  // Handle checkout
  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    clearCart();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const checkoutVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="overflow-hidden ">
      <motion.section 
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Cart Items */}
            <div className="lg:w-7/12">
              <motion.div 
                className="mb-6"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link 
                  to="/" 
                  className="text-indigo-600 hover:text-indigo-800 flex items-center group"
                >
                  <motion.span 
                    className='bi bi-arrow-left-short text-3xl group-hover:-translate-x-1 transition-transform'
                    whileHover={{ x: -3 }}
                  />
                  <span className="ml-1">Continue shopping</span>
                </Link>
              </motion.div>

              <motion.hr 
                className="my-4 border-gray-300"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="mb-4 sm:mb-0">
                  <motion.h2 
                    className="text-2xl font-bold text-gray-800"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Shopping cart
                  </motion.h2>
                  <p className="text-gray-600">
                    {cartItems.length === 0 
                      ? "Your cart is waiting to be filled" 
                      : `You have ${cartItems.length} item${cartItems.length !== 1 ? 's' : ''} in your cart`}
                  </p>
                </div>
                {cartItems.length > 0 && (
                  <motion.button 
                    onClick={clearCart}
                    className="text-rose-500 hover:text-rose-700 text-sm flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear cart
                  </motion.button>
                )}
              </div>
              {cartItems.length === 0 ? (
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-700">Your cart feels lonely</h3>
                  <p className="text-gray-500 mb-6">Add some amazing products to get started</p>
                  <Link 
                    to="/" 
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Start Shopping
                  </Link>
                </motion.div>
              ) : (
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        variants={itemVariants}
                        exit="exit"
                        layout
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-32 md:w-40 flex-shrink-0">
                            <img 
                              src={item.thumbnail} 
                              alt={item.name} 
                              className="w-full h-full object-cover aspect-square"
                            />
                          </div>
                          <div className="p-4 flex-grow">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-rose-500 ml-4 self-start transition-colors"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                            
                            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between">
                              <div className="flex items-center mb-4 sm:mb-0">
                                <motion.button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
                                  disabled={item.quantity <= 1}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </motion.button>
                                <span className="mx-4 w-8 text-center font-medium">{item.quantity}</span>
                                <motion.button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                </motion.button>
                              </div>
                              <div className="text-right">
                                <p className="text-gray-500 text-sm">Price</p>
                                <p className="text-lg font-bold text-indigo-600">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            {/* Right Column - Checkout Card (only show if items exist) */}
            {cartItems.length > 0 && (
              <motion.div 
                className="lg:w-5/12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.3 }
                  }
                }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white rounded-2xl p-6 shadow-xl sticky top-8"
                  variants={checkoutVariants}
                  whileHover="hover"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <span className="bg-indigo-400 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                      {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  <motion.hr 
                    className="border-indigo-400 my-6"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.4 }}
                  />

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Shipping</span>
                      <span>
                        {subtotal > 100 ? (
                          <span className="text-emerald-200">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {subtotal > 100 && (
                      <div className="flex justify-between text-emerald-200 text-sm">
                        <span>🎉 You've unlocked free shipping!</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between font-bold text-xl mb-8">
                    <span className="text-indigo-100">Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <motion.button 
                    onClick={handleCheckout}
                    
                    className="w-full bg-white hover:bg-gray-100 text-indigo-600 font-bold py-4 px-6 rounded-xl transition duration-200 flex justify-between items-center shadow-md"
                    variants={checkoutVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="font-bold">${total.toFixed(2)}</span>
                    <span className="flex items-center bi bi-arrow-right">
                      Proceed to Checkout 
                    
                    </span>
                  </motion.button>

                  <div className="mt-6 flex items-center justify-center space-x-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/217/217425.png" alt="Visa" className="h-8 opacity-80" />
                    <img src="https://cdn-icons-png.flaticon.com/128/11378/11378185.png" alt="Mastercard" className="h-8 opacity-80" />
                    <img src="https://cdn-icons-png.flaticon.com/128/7875/7875821.png" alt="PayPal" className="h-8 opacity-80" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Cart;