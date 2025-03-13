import React from 'react';
import { Link } from "react-router-dom";


export default function NoBorderButtonLink(props) {
    return (
        <>
        <Link to={props.link} className="w-full py-1 px-2 inline-flex 
                                            justify-center items-center gap-x-2 text-sm font-mono 
                                            border-transparent text-gray-300 hover:bg-gray-700 
                                            focus:outline-hidden focus:bg-black-700 disabled:opacity-50 
                                            disabled:pointer-events-none">{props.label}</Link>
        </>
    )
}