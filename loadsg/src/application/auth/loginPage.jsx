import React from 'react';
import InputForm from '../../components/forms/InputForm';
import BasicButton from '../../components/buttons/BasicButton';



export default function LoginPage(params) {
    return (
        <main className='bg-slate-600 w-full h-dvh'>
            <div className='bg-slate-700 ml-4 mt-8' >
                <InputForm label="Username"></InputForm>
                <InputForm label="Password"></InputForm>
                <BasicButton label="Login"></BasicButton>
            </div>
        </main>
    )
}