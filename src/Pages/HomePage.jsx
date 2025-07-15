import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveSlider from './../Components/Slider';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/Auth';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart,search } = useContext(AuthContext);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=0');
      const jsonData = await response.json();
      setData(jsonData.products.map(product => ({
        ...product,
        availabilityStatus: product.stock > 0 ? 'In Stock' : 'Out of Stock'
      })));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // search function
  const filterdata=data.filter((ele)=>ele.title.toLowerCase().includes(search.toLowerCase()))
  console.log(filterdata);
  

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (loading) {
    return (
       <div className="flex justify-center items-center h-screen">
                  <div className="animate-spin rounded-full h-16 w-16 bg-gray-300">
                      <img  src="https://www.svgrepo.com/show/1183/loading.svg" alt="" />
                  </div>
              </div>
    );
  }

  return (
    <div className='overflow-x-hidden bg-gray-50 '>
      <ResponsiveSlider />
      
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Products</h2>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filterdata.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-56">
                <div className="absolute inset-0 bg-black/20 hover:bg-black/60 bg-opacity-50 group-hover:bg-opacity-10 transition-all duration-300">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-00"
                />
                {product.discountPercentage && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    {Math.round(product.discountPercentage)}% OFF
                  </span>
                )}
                  
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {product.brand}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discountPercentage && (
                    <span className="text-sm text-gray-500 line-through">
                      ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => addToCart(product)} 
                    disabled={product.stock <= 0}
                    className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 text-sm font-medium ${
                      product.stock > 0 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Add to Cart
                  </button>
                  <Link 
                    to={`/product/${product.id}`}
                    className="flex-1 text-center border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-md transition-colors duration-200 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;