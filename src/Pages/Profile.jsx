import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/Auth';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        occupation: '',
        interests: []
    });
    const navigate = useNavigate();

    const {  logout,  } = useContext(AuthContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setFormData(parsedUser);
        } else {
            toast.error('No user data found. Please register first.');
            navigate('/register');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                interests: checked
                    ? [...prev.interests, value]
                    : prev.interests.filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        setUser(formData);
        setEditMode(false);
        toast.success('Profile updated successfully!');
    };

     const handleLogout=()=>{
    logout()
   toast.success('Logged out successfully');
     }
    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-3xl mx-auto mt-15">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* Profile Header - Responsive */}
                    <div className="bg-indigo-600 px-4 py-6 sm:px-6 sm:py-8 text-white">
                        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center overflow-hidden">
                                    {user.avatar ? (
                                        <img 
                                            src={user.avatar} 
                                            alt="Profile" 
                                            className="h-full w-full  object-canter"
                                        />
                                    ) : (
                                        <svg 
                                            className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <div className="text-center sm:text-left">
                                    <h1 className="text-xl sm:text-2xl font-bold">{user.name}</h1>
                                    <p className="text-indigo-100 text-sm sm:text-base">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setEditMode(!editMode)}
                                className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors text-sm sm:text-base"
                            >
                                {editMode ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>
                    </div>

                    {/* Profile Content - Responsive */}
                    <div className="px-4 py-6 sm:px-6 sm:py-8">
                        {editMode ? (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                                    {/* Personal Info */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                            />
                                        </div>
                                    </div>

                                    {/* Address Info */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">Country</label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                            />
                                        </div>
                                    </div>

                                    {/* Full Width Fields */}
                                    <div className="md:col-span-2 space-y-4">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-1">Profile Image</label>
                                            <input
                                                type="file"
                                                name="avatar"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            setFormData(prev => ({
                                                                ...prev,
                                                                avatar: reader.result
                                                            }));
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                                accept="image/*"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Save Button - Responsive */}
                                <div className="mt-6 flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Personal Info */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">Full Name</p>
                                            <p className="text-gray-800 text-sm sm:text-base">{user.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">Email</p>
                                            <p className="text-gray-800 text-sm sm:text-base">{user.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                                            <p className="text-gray-800 text-sm sm:text-base">
                                                {user.phone || <span className="text-gray-400">Not provided</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Address Info */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Address Information</h2>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">Address</p>
                                            <p className="text-gray-800 text-sm sm:text-base">
                                                {user.address || <span className="text-gray-400">Not provided</span>}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">City</p>
                                            <p className="text-gray-800 text-sm sm:text-base">
                                                {user.city || <span className="text-gray-400">Not provided</span>}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">Country</p>
                                            <p className="text-gray-800 text-sm sm:text-base">
                                                {user.country || <span className="text-gray-400">Not provided</span>}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Interests - Full Width */}
                                {user.interests && user.interests.length > 0 && (
                                    <div className="sm:col-span-2">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Interests</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {user.interests.map((interest, index) => (
                                                <span 
                                                    key={index} 
                                                    className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm"
                                                >
                                                    {interest}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Account Actions - Responsive */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 border-t flex justify-end">
                        <button
                            onClick={()=>handleLogout()}
                            className="px-3 py-1 sm:px-4 sm:py-2 text-red-600 hover:text-red-800 transition-colors text-sm sm:text-base"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;