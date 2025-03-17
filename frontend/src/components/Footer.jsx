import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img className="h-8" src="images/logo.png" alt="Company Logo" />
            <p className="mt-4 text-gray-400 text-sm">
              Transforming healthcare data management with blockchain and AI
              technology.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contact@smarthealthchain.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Smart Healthchain. All rights reserved. |{" "}
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
