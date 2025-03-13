import React from 'react';
import NavBarWithSearch from '../navbar/navBarWithSearch';


export default function AccountPage(props){
    return(
        <>
        <NavBarWithSearch></NavBarWithSearch>
        <div className='bg-slate-600 w-full h-dvh justify-items-center'>
            <h1>ACCOUNT</h1>
        </div>
        </>
    )
}