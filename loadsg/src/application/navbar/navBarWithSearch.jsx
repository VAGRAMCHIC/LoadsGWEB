import React from 'react';

import NoBorderButtonLink from '../../components/buttons/NoBorderButtonLink';
import Search from '../../components/forms/Search';

export default function NavBarWithSearch(props) {
    return (
        <div className='bg-slate-700 flex justify-between py-2'>
          <div className='px-2 py-2'>
            <button> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 stroke-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>            
          </div>
          <div className='flex-grow pt-2'>
            <Search></Search>
          </div>
          <div className='flex'>
                <NoBorderButtonLink label="Dashboard" link="/"></NoBorderButtonLink>
                <NoBorderButtonLink label="Loaders" link="/loaders"></NoBorderButtonLink>
                <NoBorderButtonLink label="Test" link="/test"></NoBorderButtonLink>
                <NoBorderButtonLink label="Settings" link="/settings"></NoBorderButtonLink>
                <NoBorderButtonLink label="Account" link="/account"></NoBorderButtonLink>

          </div>
        </div>
    )

}