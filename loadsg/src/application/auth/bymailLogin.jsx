import React from 'react';
import InputForm from '../../components/forms/InputForm';
import BasicButton from '../../components/buttons/BasicButton';
import NoBorderButton from '../../components/buttons/NoBorderButton';


export default function ByEMAILLogin(params) {
    return (
        <div>
            <div className='mb-2'>
                <InputForm label="Username"></InputForm>
            </div>
            <div className='my-2'>
                <InputForm label="Password"></InputForm>
            </div>
            <div className='my-2'>
                <BasicButton label="Login"></BasicButton>
            </div>
        </div>
    )
}