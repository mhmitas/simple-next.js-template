import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav
            className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border bg-gray-50 lg:p-4 lg:dark:bg-zinc-800/30"
        >
            <div className="min-h-16 w-full h-full z-20 flex items-center justify-between py-2 px-4">
                <div>
                    <Link href={'/'} className="text-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 p-2 rounded-md">Next Hero</Link>
                </div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;