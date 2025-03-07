import React from 'react';

import BasicButton from '../buttons/BasicButton';

export default function LoaderCard(props) {
    return (
        <>
            <div className="size-40 rounded-md box-border pt-8 pb-5 pr-8 pl-5 bg-gray-900 text-white hover:bg-gray-950 
                                        focus:outline-hidden focus:bg-black-700">
                
                <div className="align-left">
                    <h1 className="text-base text-left">{props.LoaderName}</h1>
                    <div className="rounded-full"></div>
                </div>
                <p className="mt-4 text-sm text-left">{props.ipAddr}</p>
                <p className="mt-1 mb-4 text-sm text-left">{props.info}</p>
                <BasicButton name="Open"></BasicButton>
            </div>
        </>
    )
}