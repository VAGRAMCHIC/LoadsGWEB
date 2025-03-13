import React from 'react';
import NavBarWithSearch from '../navbar/navBarWithSearch';


export default function Dashboard(props){
    return(
        <>
        <NavBarWithSearch></NavBarWithSearch>
        <div className='bg-slate-600 w-full h-dvh justify-items-center'>
            <h1>DASHBOARD</h1>
        </div>
        </>
    )
}