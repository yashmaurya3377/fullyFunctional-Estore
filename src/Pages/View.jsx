import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { div } from 'motion/react-client';
import { AuthContext } from '../Context/Auth';

const View = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { addToCart, setCartItems } = useContext(AuthContext)


    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);

            const data = await response.json();
            setProduct(data);
        }
        finally {
            setTimeout(() => {

                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 bg-gray-300">
                <img  src="https://www.svgrepo.com/show/1183/loading.svg" alt="" />
            </div>
        </div>
    );

    const handlecart = () => {
        addToCart({
            ...product,quantity: quantity
        });

        toast.success(`${product.title} added to cart!`);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition"
            >
                <FiArrowLeft className="mr-2" /> Back to Products
            </button>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    {/* Product Images */}
                    <div className="md:w-1/2 p-6">
                        <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.title}
                                className="h-full object-contain"
                            />
                        </div>
                        <div className="flex space-x-2 overflow-x-auto py-2">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.title} ${index}`}
                                    className={`h-20 cursor-pointer rounded border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="md:w-1/2 p-6">
                        <div className="border-b pb-4">
                            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
                            <div className="flex items-center mt-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={`${i < Math.round(product.rating) ? 'fill-current' : ''}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-500 ml-2">{product.rating} ({product.stock} in stock)</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-gray-500 line-through mr-2">
                                ${(product.price * 1.2).toFixed(2)}
                            </span>
                            <span className="text-2xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            <span className="ml-2 text-green-600 font-medium">
                                (20% off)
                            </span>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">Description</h3>
                            <p className="mt-2 text-gray-600">{product.description}</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">Brand</h3>
                            <p className="mt-1 text-gray-600 capitalize">{product.brand}</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">Category</h3>
                            <p className="mt-1 text-gray-600 capitalize">{product.category}</p>
                        </div>

                        <div className="mt-8 flex items-center">
                            <div className="flex items-center border rounded-md">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="px-3 py-1 text-lg"
                                >
                                    -
                                </button>
                                <span className="px-4 py-1">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="px-3 py-1 text-lg"
                                >
                                    +
                                </button>
                            </div>

                            <div className="ml-4 flex space-x-3">
                                <button onClick={() => handlecart()} className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                    <FiShoppingCart className="mr-2" />
                                    Add to Cart
                                </button>
                                <button className="p-2 border rounded-md text-gray-600 hover:text-red-500 hover:border-red-300 transition">
                                    <FiHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>

                <div className="space-y-6">
                    {product.reviews.map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <i className="bi bi-person-fill text-indigo-600 text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{review.reviewerName}</h3>
                                        <div className="flex items-center mt-1">
                                            {[...Array(5)].map((_, starIdx) => (
                                                <i
                                                    key={starIdx}
                                                    className={`bi bi-star${starIdx < review.rating ? '-fill' : ''} ${starIdx < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                ></i>
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">{review.rating}.0</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400">
                                    <i className="bi bi-calendar3 mr-1"></i>
                                    {new Date().toLocaleDateString()}
                                </span>
                            </div>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                <i className="bi bi-quote text-gray-400 mr-1"></i>
                                {review.comment}
                            </p>

                            <div className="mt-4 flex space-x-4">
                                <button className="text-sm text-gray-500 hover:text-indigo-600">
                                    <i className="bi bi-hand-thumbs-up mr-1"></i>
                                    Helpful
                                </button>
                                <button className="text-sm text-gray-500 hover:text-indigo-600">
                                    <i className="bi bi-chat-left-text mr-1"></i>
                                    Reply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default View;    