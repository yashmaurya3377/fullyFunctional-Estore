import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        avatar: '',
        interests: []
    });
    const navigate = useNavigate();

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

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords don't match!");
            return;
        }

        console.log('Form submitted:', formData);
        toast.success('Account created successfully!');
        localStorage.setItem('user', JSON.stringify(formData))
        navigate('/');
    };

    const nextStep = () => {
        if (step === 1 && (!formData.name || !formData.email || !formData.password)) {
            toast.error('Please fill in all required fields');
            return;
        }
        if (step === 2 && (!formData.phone || !formData.address)) {
            toast.error('Please fill in all required fields');
            return;
        }
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const interestOptions = ['Technology', 'Sports', 'Music', 'Travel', 'Reading', 'Cooking'];

    return (
        <div className='pt-16'>
            <section className=" flex items-stretch  text-white ">
                <div className=" lg:flex w-1/2  bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: 'url(/BG.jpg)' }}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0" />
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                        <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ backgroundColor: '#161616' }}>
                    <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: 'url(public/BG.jpg)' }}>
                        <div className="absolute bg-black opacity-60 inset-0 z-0" />
                    </div>

                    <div className="w-full py-6 z-20">
                        <h1 className="my-6 text-3xl font-bold">
                            SignUp Here - Step {step} of 3
                        </h1>

                        <div className="w-full bg-gray-800 rounded-full h-2.5 mb-6">
                            <div
                                className="bg-indigo-600 h-2.5 rounded-full"
                                style={{ width: `${(step / 3) * 100}%` }}
                            ></div>
                        </div>

                        <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            {/* Step 1: Basic Information */}
                            {step === 1 && (
                                <div className="space-y-4">
                                    <div className="pb-2 pt-4">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                            required
                                        />
                                    </div>

                                    <div className="pb-2 pt-4">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email *"
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                            required
                                        />
                                    </div>

                                    <div className="pb-2 pt-4">
                                        <input
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Password *"
                                            required
                                        />
                                    </div>

                                    <div className="pb-2 pt-4">
                                        <input
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm Password *"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Contact Information */}
                            {step === 2 && (
                                <div className="space-y-4">
                                    <div className="pb-2 pt-4">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number *"
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                            required
                                        />
                                    </div>

                                    <div className="pb-2 pt-4">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Address *"
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                            required
                                        />
                                    </div>

                                    <div className="pb-2 pt-4">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="City"
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                        />
                                    </div>

                                    <div className="pb-2 pt-4">
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Country"
                                            className="block w-full p-4 text-lg rounded-sm bg-black"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Additional Information */}
                            {step === 3 && (
                                <div className="space-y-4">
                                    <div className="pb-2 pt-4">
                                        <label className="block text-gray-300 mb-2 text-left">PROFILE Image</label>
                                        <input
                                            type="file"
                                            name="avatar"
                                            id="avatarImage"
                                            onChange={handleChange}
                                            accept="image/*"
                                            className="block w-full p-2 text-lg rounded-sm bg-black text-white"
                                        />
                                    </div>


                                    <div className="pb-2 pt-4 text-left">
                                        <p className="text-gray-300 mb-2">Terms and Conditions</p>
                                        <div className="bg-black p-4 rounded-sm max-h-32 overflow-y-auto text-sm">
                                            <p>By creating an account, you agree to our Terms of Service and Privacy Policy.
                                                You consent to receiving occasional updates and account-related emails.</p>
                                            <p className="mt-2">We will never share your personal information with third parties without your explicit consent.</p>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                name="terms"
                                                required
                                                className="mr-2"
                                            />
                                            <label htmlFor="terms">I agree to the terms and conditions *</label>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between px-4 pb-2 pt-8">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="uppercase block w-1/3 p-4 text-lg rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
                                    >
                                        Back
                                    </button>
                                )}

                                {step < 3 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className={`uppercase block ${step > 1 ? 'w-2/3 ml-4' : 'w-full'} p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none`}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                                    >
                                        Create Account
                                    </button>
                                )}
                            </div>

                            <div className="text-center mt-4">
                                <p className="text-gray-400">
                                    Already have an account?{' '}
                                    <a href="/login" className="text-indigo-400 hover:underline">
                                        Login here
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;