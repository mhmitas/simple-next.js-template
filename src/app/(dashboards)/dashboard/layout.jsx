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
        <div className="h-16">
            <nav className="dark:bg-gray-900 bg-gray-700 text-white py-3 px-4 flex justify-between items-center fixed top-0 left-0 w-full h-16">
                <Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                    Next Hero
                </Link>
                <div className="flex space-x-4">
                    <a href="#" className="hover:bg-gray-700 p-2 rounded">Logout</a>
                    <div>
                        <img src="https://via.placeholder.com/40" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700" />
                    </div>
                </div>
            </nav>
        </div>
    );
};
