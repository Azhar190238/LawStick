
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar2 = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const links = [
        {
            label: 'Home',
            key: 'home',
            submenu: [
                { label: 'Home 1', path: '/', key: '0' },
                { label: 'Home 2', path: '/home2', key: '1' }
            ]
        },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Case Study', path: '/case' },
        { label: 'Page', path: '/page' },
        { label: 'Blogs', path: '/blogs' },
        { label: 'Contact Us', path: '/contactUs' },
    ];

    const handleLinkClick = (label) => {
        setActiveLink(label);
        if (label === 'Home') {
            setIsDropdownOpen(!isDropdownOpen);
        } else {
            setIsDropdownOpen(false);
        }
    };

    return (
        <div className=' relative border-b-2  border-dashed border-[#B68C5A] z-10'>
        <div className="navbar relative z-10 max-w-[1320px] mx-auto pt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="flex flex-col dropdown-content mt-3 w-36 p-2 text-[16px]">
                        {links.map(link => (
                            <li key={link.key}>
                                {link.submenu ? (
                                    <>
                                        <span
                                            className={activeLink === link.label ? 'text-[#B68C5A] cursor-pointer' : 'cursor-pointer'}
                                            onClick={() => handleLinkClick(link.label)}
                                        >
                                            {link.label}
                                        </span>
                                        {isDropdownOpen && activeLink === link.label && (
                                            <ul className="mt-1 p-2 text-[16px] bg-gray-30 text-white shadow-lg border rounded">
                                                {link.submenu.map(sublink => (
                                                    <li key={sublink.key}>
                                                        <Link
                                                            href={sublink.path}
                                                            className={activeLink === link.label ? 'text-[#B68C5A]' : ''}
                                                            onClick={() => setActiveLink(link.label)}
                                                        >
                                                            {sublink.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className={activeLink === link.label ? 'text-[#B68C5A]' : ''}
                                        onClick={() => handleLinkClick(link.label)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image src='/logo.png' height={46} width={157} alt="logo image"></Image>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row px-1 space-x-[30px] text-[16px] text-white">
                    {links.map(link => (
                        <li key={link.key} className="relative">
                            {link.submenu ? (
                                <>
                                    <span
                                        className={activeLink === link.label ? 'text-[#B68C5A] cursor-pointer' : 'cursor-pointer'}
                                        onClick={() => handleLinkClick(link.label)}
                                    >
                                        {link.label}
                                    </span>
                                    {isDropdownOpen && activeLink === link.label && (
                                        <ul className="absolute mt-2 w-48 bg-gray-30 text-white shadow-lg border rounded p-2 text-[16px]">
                                            {link.submenu.map(sublink => (
                                                <li key={sublink.key}>
                                                    <Link
                                                        href={sublink.path}
                                                        className={activeLink === sublink.label ? 'text-[#B68C5A]' : ''}
                                                        onClick={() => setActiveLink(sublink.label)}
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.path}
                                    className={activeLink === link.label ? 'text-[#B68C5A]' : ''}
                                    onClick={() => handleLinkClick(link.label)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#B68C5A] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300">
                    Get Appointment
                </button>
            </div>
        </div>
     
        </div>
    );
};

export default Navbar2;


