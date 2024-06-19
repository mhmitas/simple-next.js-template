import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='min-h-screen px-10 pt-4'>
            {children}
        </div>
    );
};

export default Container;