'use client';
import { Home, LayoutDashboard, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import { LuChevronFirst } from "react-icons/lu";

const Sidebar = () => {

    const pathname = usePathname()

    const [expanded, setExpanded] = React.useState(true)

    const link = [
        {
            name: 'Home',
            icon: <Home className='w-5 h-6 text-gray-600' />,
            path: '/'
        },
        {
            name: 'Dashboard',
            icon: <LayoutDashboard className='w-5 h-6 text-gray-600' />,
            path: '/dashboard'
        },
        {
            name: 'User',
            icon: <User className='w-5 h-6 text-gray-600' />,
            path: '/users'
        },
        {
            name: 'Product',
            icon: <ShoppingBag className='w-5 h-6 text-gray-600' />,
            path: '/products'
        }
    ]

    return (
        <div className={`flex flex-col gap-4 ${expanded ? 'w-[300px]' : ' w-[90px]'} transition-all border-r min-h-screen p-4 `}>
            <div className='flex space-x-3'>
                <div className='flex justify-center items-center gap-2 border rounded-lg p-2'>
                    <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-400 text-white font-[700] flex justify-center items-center">
                        <p>VI</p>
                    </div>
                    <div className={`${expanded ? 'block' : 'hidden'} `}>
                        <p className='text-gray-800 font-semibold text-base'>Vakhimm Im</p>
                        <p className=' text-gray-500 text-sm '>vakhimim11@gmail.com</p>
                    </div>
                </div>

            </div>
            <div className='grow'>
                <div className=' gap-5 space-y-2'>
                    {link.map((item, index) => (
                        <Link key={index} href={item.path} className={ ` ${expanded ? '' : ' justify-center items-center'} flex items-center gap-4 p-2 rounded duration-200 text-gray-800 font-medium ${pathname === item.path ? 'bg-slate-100 ' : 'text-gray-600 hover:bg-slate-100 '} `}>
                            {item.icon}
                            <p className={`${expanded ? 'block' : 'hidden'} `}>{item.name}</p>
                        </Link>
                    ))}

                </div>
            </div>
            <div className='flex justify-center items-center w-full'>
                <button
                    className='w-full flex justify-center bg-slate-800 rounded overflow-hidden'
                    onClick={() => setExpanded((curr) => !curr)}
                >
                    <LuChevronFirst
                        className={`text-4xl ${expanded ? '' : ' rotate-180'} transition-all text-white p-1 rounded cursor-pointer`} />
                </button>
            </div>
        </div>
    )
}

export default Sidebar