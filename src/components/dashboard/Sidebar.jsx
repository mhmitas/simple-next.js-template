import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-base-200 w-52 md:w-64 h-screen">
            <div className='fixed overflow-x-auto h-screen w-52 md:w-64 p-4'>
                <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
                <ul className='menu text-lg'>
                    <li className="mb-4">
                        <a href="#" className="block p-2 rounded">Home</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="block p-2 rounded">Profile</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="block p-2 rounded">Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
