import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [search, setsearch] = useState('');

  // Initialize from localStorage
  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem('loginuser'));
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setUser(loginUser);
    setCartItems(savedCart);
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    const retData = JSON.parse(localStorage.getItem('user'));
    if (retData && retData.email === email && retData.password === password) {
      toast.success(`Welcome back, ${retData.name}!`);
      localStorage.setItem('loginuser', JSON.stringify(retData));
      setUser(retData);
      return true;
    }
    toast.error('Invalid email or password');
    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('loginuser');
    setUser(null);
    toast.success('Logged out successfully');
  };

  // Add to cart function
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    let updatedCart;
    
    if (existingItemIndex >= 0) {
      updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += item.quantity || 1;
    } else {
      updatedCart = [...cartItems, { ...item, quantity: item.quantity || 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${item.name || item.title} added to cart`);
  };

  // Update quantity function
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item function
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item removed from cart');
  };

  // Clear cart function
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ 
      user,
      cartItems,
      setsearch,
      search,
      login,
      logout,
      addToCart,
      updateQuantity,
      removeItem,
      setCartItems,
      clearCart
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;