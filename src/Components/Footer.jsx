import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        stiffness: 100
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 }
  };

  const yashodalink="https://yashodadigittech-gb87.vercel.app/"

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-12 pb-8"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Column 1 - About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">E-Store</h3>
            <p className="mb-4">
              Building digital experiences that drive business growth and innovation.
              We combine technical excellence with business acumen to deliver impactful solutions.
            </p>
            <motion.div 
              initial="hidden"
              animate="visible"
              className="flex space-x-4"
            >
              <motion.Link
                to='/'
                className="text-gray-400 hover:text-white text-xl"
                whileHover={{ 
                  scale: 1.2,
                  color: "#ffffff"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={itemVariants}
              >
                <FaGithub />
              </motion.Link>
              <motion.Link 
              to='/'
                className="text-gray-400 hover:text-white text-xl"
                whileHover={{ 
                  scale: 1.2,
                  color: "#ffffff"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={itemVariants}
              >
                <FaLinkedin />
              </motion.Link>
              <motion.Link
              to='/'
                className="text-gray-400 hover:text-white text-xl"
                whileHover={{ 
                  scale: 1.2,
                  color: "#ffffff"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={itemVariants}
              >
                <FaTwitter />
              </motion.Link>
            </motion.div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4 relative pb-2"
            >
              Quick Links
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                variants={lineVariants}
              />
            </motion.h4>
            <ul className="space-y-2">
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to="/" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                  Home
                </Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to="resume" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  About Us
                </Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to={yashodalink} target="_blank" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                  Services
                </Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to={yashodalink} target="_blank" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                  Projects
                </Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to={yashodalink} target="_blank" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-lg font-semibold mb-4 relative pb-2"
            >
              Our Services
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                variants={lineVariants}
              />
            </motion.h4>
            <ul className="space-y-2">
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                  Web Development
                </a>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  Mobile Apps
                </a>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <a href={yashodalink} target="_blank" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                  UI/UX Design
                </a>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link Link to={yashodalink} target="_blank" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                  API Development
                </Link>
              </motion.li>
              <motion.li 
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to={yashodalink} target="_blank" className="text-gray-400 hover:text-white flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  Database Solutions
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={itemVariants}>
            <motion.Link  to={yashodalink} target="_blank"
              className="text-lg font-semibold mb-4 relative pb-2"
            >
              Contact Us
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                variants={lineVariants}
              />
            </motion.Link>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                whileHover={hoverEffect}
              >
                <MdLocationOn className="text-xl mr-3 mt-1" />
                <span className="text-gray-400">Lucknow, Uttar Pradesh, India</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={itemVariants}
                whileHover={hoverEffect}
              >
                <MdEmail className="text-xl mr-3" />
                <a href="mailto:yashpratap3377@gamil.com" className="text-gray-400 hover:text-white">contact@yashodatechsolutions.com</a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={itemVariants}
                whileHover={hoverEffect}
              >
                <MdPhone className="text-xl mr-3" />
                <a href="tel:+918787256663" className="text-gray-400 hover:text-white">+91 8787256663</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Food hub. All Rights Reserved.</p>
          <motion.div 
            className="mt-2 flex justify-center space-x-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a 
              href="#"
              className="hover:text-white"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                color: "#ffffff"
              }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href={yashodalink}
              className="hover:text-white"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                color: "#ffffff"
              }}
            >
              Terms & Conditions
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;