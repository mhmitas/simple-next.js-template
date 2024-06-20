'use client'
import { SidebarContext } from '@/app/(dashboards)/dashboard/layout';
import Link from 'next/link';
import React, { useContext } from 'react';

const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setIsSidebarOpen(false)
        }
    }

    return (
        <aside onClick={handleOverlayClick} className={`${isSidebarOpen && 'fixed md:static bg-black bg-opacity-50 inset-0'} md:fixed md:w-56`}>
            <div className={`fixed ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-56 bg-base-100 h-screen duration-200 md:translate-x-0`}>
                <ul className='menu text-lg'>
                    <li><Link href={'#'}>Home</Link></li>
                    <li><Link href={'#'}>Profile</Link></li>
                    <li><Link href={'#'}>Settings</Link></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
