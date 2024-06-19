import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <DashboardNavbar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;

// ------------

const DashboardNavbar = () => {
    return (
        <nav className="dark:bg-gray-900 bg-gray-700 text-white py-2 px-4 flex justify-between items-center">
            <Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                Next Hero
            </Link>
            <div className="flex space-x-4">
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Home</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Profile</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Logout</a>
            </div>
        </nav>
    );
};
