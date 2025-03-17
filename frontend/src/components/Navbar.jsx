const Navbar = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="images/logo.png"
                alt="Smart Healthchain"
              />
            </a>
            <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-custom text-custom border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="!rounded-button text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 "style={{ backgroundColor: "#1B9AF5" }}>
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
