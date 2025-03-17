import {
  FaShieldAlt,
  FaRobot,
  FaUsersCog,
  FaLock,
  FaUserShield,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <main>
      <section className="relative bg-white pt-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Secure, AI-Powered</span>
                <span className="block text-custom">Blockchain EHR</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Transform healthcare data management with our revolutionary
                blockchain-based Electronic Health Record system, enhanced by AI
                for seamless access and security.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="!rounded-button bg-custom text-white px-8 py-3 text-base font-medium hover:bg-blue-700"
                    style={{ backgroundColor: "#1B9AF5" }}
                  >
                    Sign Up Now
                  </button>
                  <button className="!rounded-button bg-gray-100 text-gray-700 px-8 py-3 text-base font-medium hover:bg-gray-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                src="images/heroImg.png"
                alt="Hero Image"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Experience the next generation of healthcare data management
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: FaShieldAlt,
                title: "Blockchain Security",
                description:
                  "Immutable and transparent record-keeping ensuring data integrity",
              },
              {
                Icon: FaRobot,
                title: "AI-Powered Search",
                description:
                  "Intelligent search and analysis of medical records",
              },
              {
                Icon: FaUsersCog,
                title: "Role-Based Access",
                description:
                  "Granular control over who can access what information",
              },
              {
                Icon: FaLock,
                title: "Advanced Security",
                description:
                  "End-to-end encryption and compliance with healthcare standards",
              },
            ].map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow-sm p-8 text-center flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Icon className="text-custom text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Simple, secure, and efficient healthcare data management
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                Icon: FaUserShield,
                title: "User Authentication",
                description:
                  "Secure multi-factor authentication ensures only authorized access",
              },
              {
                Icon: FaDatabase,
                title: "Secure Storage",
                description:
                  "Encrypted data storage on distributed blockchain network",
              },
              {
                Icon: FaBrain,
                title: "AI-Powered Access",
                description:
                  "Intelligent search and analysis of medical records",
              },
            ].map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-6 text-center flex flex-col items-center"
              >
                <Icon className="text-custom text-3xl mb-4" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
