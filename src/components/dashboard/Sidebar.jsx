import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-52 md:w-64 h-screen">
            <div className='fixed bg-gray-800 text-white overflow-x-auto h-screen w-52 md:w-64 p-4'>
                <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
                <ul>
                    <li className="mb-4">
                        <a href="#" className="block p-2 hover:bg-gray-700 rounded">Home</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="block p-2 hover:bg-gray-700 rounded">Profile</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
