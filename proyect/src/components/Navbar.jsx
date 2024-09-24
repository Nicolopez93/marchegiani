import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo-marchegiani.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full bg-[#692044] max-w-[1240px] mx-auto px-4 h-16 flex justify-between items-center'>
      <img className='w-40 h-10' src={logo} alt='logo' />
      <ul className='hidden lg:flex space-x-4'>
        <li className='text-white text-xs uppercase'>Quienes Somos</li>
        <li className='text-white text-xs uppercase'>Diag.Imágenes</li>
        <li className='text-white text-xs uppercase'>Consultorios</li>
        <li className='text-white text-xs uppercase'>Obras Sociales</li>
        <li className='text-white text-xs uppercase'>Mis Estudios</li>
        <li className='text-white text-xs uppercase'>Turnero</li>
        <li className='text-white text-xs uppercase'>Trabajá</li>
        <li className='text-white text-xs uppercase font-bold'>Contacto</li>
      </ul>

      {/* Icono para menú móvil */}
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Menú desplegable para móviles */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[30%] border-r border-r-gray-900 h-full bg-[#692044] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <img className='w-40 h-10 m-4' src={logo} alt='logo' />
        <ul className='p-4 uppercase'>
          <li className='p-4 text-white text-xs'>Quienes Somos</li>
          <li className='p-4 text-white text-xs'>Diag.Imágenes</li>
          <li className='p-4 text-white text-xs'>Consultorios</li>
          <li className='p-4 text-white text-xs'>Obras Sociales</li>
          <li className='p-4 text-white text-xs'>Mis Estudios</li>
          <li className='p-4 text-white text-xs'>Turnero</li>
          <li className='p-4 text-white text-xs'>Trabajá</li>
          <li className='p-4 text-white text-xs font-bold'>Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

