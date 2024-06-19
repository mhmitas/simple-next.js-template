import React from 'react';

const Btn = ({ children }) => {

    return (
        <span role='button' className={`dark:bg-blue-600 bg-blue-500 py-2 px-3 rounded-md dark:active:bg-blue-700 active:bg-blue-600 cursor-pointer selection:bg-none`}>
            {children}
        </span>
    );
};

export default Btn;