'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react'; // Icons for the menu

function Header() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center bg-transparent justify-between py-4 px-8">
      {/* LOGO */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className="font-bold text-2xl">
          Denta<span className="text-slate-400">Pro</span>
        </h1>
      </div>

      {/* TOGGLE MENU (Mobile) */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU (Desktop & Mobile) */}
      <nav
        className={`lg:flex items-center space-x-16 uppercase ${
          isOpen
            ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-4 space-y-4'
            : 'hidden'
        } lg:relative lg:flex lg:space-x-8 lg:bg-transparent lg:shadow-none lg:p-0 lg:space-y-0`}
      >
        {['/', '/about', '/patientInfo', '/services', '/blog', '/contact'].map(
          (path, index) => (
            <Link
              key={index}
              href={path}
              className={`${
                pathName === path ? 'text-slate-400 font-bold' : ''
              } block text-center lg:inline`}
            >
              {path.replace('/', '') || 'Home'}
            </Link>
          )
        )}
      </nav>

      {/* BUTTON */}
      <div className="hidden lg:block">
        <Button className="bg-slate-400 text-white font-bold hover:bg-slate-500 uppercase">
          Book an appointment
        </Button>
      </div>
    </header>
  );
}

export default Header;
