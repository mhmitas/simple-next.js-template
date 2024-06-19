'use client';
import Link from 'next/link';
import React from 'react';
import Btn from './Btn';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();

    const navLinks = [
        { name: 'About', href: '/about', type: 'public' },
        { name: 'Blogs', href: '/blogs', type: 'public' },
        { name: 'Contact', href: '/contact', type: 'public' },
        { name: 'Dashboard', href: '/dashboard', type: 'privet' },
    ];

    return (
        <nav className="w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit bg-gray-50 shadow-md dark:shadow-blue-500/15">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
                <Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                    Next Hero
                </Link>
                <div className="flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link className={`hover:text-blue-500 ${link.href === pathName && 'text-blue-500'
                                    }`} href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="border border-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-1 px-2 rounded">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
