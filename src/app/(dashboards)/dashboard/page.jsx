'use client'
import Sidebar from '@/components/dashboard/Sidebar';
import React, { useContext } from 'react';
import { SidebarContext } from './layout';
import { GoSidebarCollapse } from "react-icons/go";


const DashboardPage = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)

    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 p-4 min-h-full md:ml-56">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded shadow">Widget 1</div>
                    <div className="p-4 rounded shadow">Widget 2</div>
                    <div className="p-4 rounded shadow">Widget 3</div>
                    <div className="p-4 rounded shadow">
                        hello
                    </div>
                </div>
                <div className="bg-primary h-screen w-full"></div>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='btn btn-sm md:hidden fixed top-4 right-4 btn-secondary z-50'><GoSidebarCollapse size={25} /></button>
            </div>
        </div>
    );
};

export default DashboardPage;