'use client'
import Link from 'next/link';
import React from 'react';
import Btn from './Btn';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname()

    const navLinks = [
        { name: 'About', href: '/about', type: 'public' },
        { name: 'Blogs', href: '/blogs', type: 'public' },
        { name: 'Contact', href: '/contact', type: 'public' },
    ]

    return (
        <nav
            className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit bg-gray-50"
        >
            <div className="min-h-16 w-full h-full z-20 flex items-center justify-between py-2 px-4">
                <div>
                    <Link href={'/'} className="text-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md">Next Hero</Link>
                </div>

                <div className='flex gap-3 items-center flex-1 justify-end'>
                    <ul className='flex gap-3'>
                        {navLinks.map(link => <li key={link.href}>
                            <Link className={`hover:text-blue-500 ${link.href === pathName && 'text-blue-500'}`} href={link.href}>{link.name}</Link>
                        </li>)}
                    </ul>
                    <Btn size='sm'><button className='bg'>Sign in</button></Btn>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// lg:static lg:w-auto  lg:rounded-xl lg:border bg-gray-50 lg:p-4 lg:dark:bg-zinc-800/30