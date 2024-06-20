'use client'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import React, { createContext, useState } from 'react';


export const SidebarContext = createContext(null)

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            <div className='min-h-screen'>
                <DashboardNavbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
                <div className='h-full'>
                    {children}
                </div>
            </div>
        </SidebarContext.Provider>
    );
};

export default DashboardLayout;


/*
// sonar chan //

<button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`md:hidden`}>
    <div className='bg-neutral rounded h-8 flex items-center'>
        <span className='bg-base-300 h-full w-3 rounded-l'></span>
        <span className={`${isSidebarOpen && 'rotate-180'} duration-300 rounded-r`}>
            <FaAngleLeft size={23} />
        </span>
    </div>
</button>
*/