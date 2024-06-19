import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardPage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 p-4">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded shadow">Widget 1</div>
                    <div className="p-4 rounded shadow">Widget 2</div>
                    <div className="p-4 rounded shadow">Widget 3</div>
                    <div className="p-4 rounded shadow">Widget 4</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;