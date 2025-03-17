import React from "react";

const DoctorDashboard = () => {
  return (
    <div className="bg-gray-50 font-[Inter] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-custom text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Patients
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Calendar
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <i className="fa-regular fa-bell text-xl"></i>
              </button>
              <div className="ml-3 relative flex items-center">
                <button
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                  id="user-menu-button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a male doctor"
                    alt="Profile"
                  />
                </button>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Dr. John Smith</p>
                  <p className="text-xs text-gray-500">Cardiologist</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Search & Filters */}
            <div className="col-span-12 bg-white rounded-lg shadow p-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                  placeholder="Search patients by name, ID or phone number..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fa-solid fa-filter mr-2"></i> Filters
                </button>
                <button className="!rounded-button inline-flex items-center px-4 py-2 bg-custom text-white text-sm font-medium rounded-md hover:bg-custom/90">
                  <i className="fa-solid fa-plus mr-2"></i> New Patient
                </button>
              </div>
            </div>

            {/* Patient Information */}
            <div className="col-span-8 bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Patient Information</h2>
                  <p className="mt-1 text-sm text-gray-500">Last updated: Today at 10:30 AM</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <i className="fa-solid fa-check-circle mr-1"></i> Consent Verified
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-500">AI-Generated Summary</h3>
                <div className="mt-3 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Patient presents with recurring chest pain. Recommend follow-up ECG and stress test.
                  </p>
                </div>
              </div>
            </div>

            {/* Clinical Actions */}
            <div className="col-span-4 bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900">Clinical Actions</h2>
              <div className="mt-4 space-y-4">
                <button className="!rounded-button w-full flex items-center justify-center px-4 py-3 bg-custom text-white text-sm font-medium rounded-md hover:bg-custom/90">
                  <i className="fa-solid fa-prescription mr-2"></i> Write Prescription
                </button>
                <button className="!rounded-button w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <i className="fa-solid fa-flask mr-2"></i> Request Lab Tests
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="!rounded-button inline-flex items-center px-4 py-2 bg-custom text-white text-sm font-medium rounded-md hover:bg-custom/90">
              <i className="fa-solid fa-signature mr-2"></i> Digital Sign
            </button>
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i> Emergency Protocol
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;
