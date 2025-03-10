import React from 'react';
import { useState } from "react";

import InputForm from '../../components/forms/InputForm';
import BasicButton from '../../components/buttons/BasicButton';
import NoBorderButton from '../../components/buttons/NoBorderButton';
import ByEMAILLogin from './bymailLogin';


export default function LoginPage(params) {
    return (
        <div className='bg-slate-600 w-full h-dvh justify-items-center'>
            <div className='h-full content-center'>
                <div className='bg-slate-700 w-full max-w-128 min-w-96 p-8 rounded-lg'>
                    <div className='flex justify-center pb-5'>
                        <h1 className=' '>Login method</h1>
                    </div>
                    <div className='flex justify-center pb-8'>
                        <NoBorderButton label="by EMAIL"></NoBorderButton>
                        <NoBorderButton label="LDAP"></NoBorderButton>
                        <NoBorderButton label="OAUTH"></NoBorderButton>
                    </div>
                    <ByEMAILLogin></ByEMAILLogin>
                </div>
            </div>
        </div>
    )
}