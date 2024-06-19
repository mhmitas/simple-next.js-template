import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;