import React from 'react';
import LoaderCard from '../../components/cards/LoaderCard';

export default function TestPage(props){
    return(
        <>
        <LoaderCard LoaderName="Test Loader" ipAddr="54.145.67.213" info="Last RPS: 40"/>
        </>
    )
}