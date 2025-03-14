import React from 'react';

import NoBorderButton from '../components/buttons/NoBorderButton';


export default function SideNavBar(props) {
    return (
        <div className='bg-slate-700 h-16 flex justify-between px-8'>
          <div>
            <button> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 stroke-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>            
          </div>
          <div className='flex justify-around px-4'>
            <NoBorderButton label="Dashboard"></NoBorderButton>
            <NoBorderButton label="Loaders"></NoBorderButton>
            <NoBorderButton label="Test"></NoBorderButton>
            <NoBorderButton label="Login"></NoBorderButton>
            <NoBorderButton label="Settings"></NoBorderButton>
            <NoBorderButton label="Account"></NoBorderButton>


          </div>
        </div>
    )

}