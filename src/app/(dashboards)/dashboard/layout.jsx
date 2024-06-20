'use client'
import Link from 'next/link';
import React, { createContext, useState } from 'react';

export const SidebarContext = createContext(null)

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            <div className='min-h-screen'>
                {/* <DashboardNavbar /> */}
                <div className='h-full'>
                    {children}
                </div>
            </div>
        </SidebarContext.Provider>
    );
};

export default DashboardLayout;

// ------------

const DashboardNavbar = () => {
    return (
        <div className="h-16">
            <nav className="py-3 px-4 flex justify-between items-center fixed top-0 left-0 w-full h-16 bg-base-100 shadow-lg">
                <Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                    Next Hero
                </Link>
                <div className="flex gap-2 items-center">
                    <a href="#" className="btn btn-sm btn-ghost p-2 rounded">Logout</a>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
