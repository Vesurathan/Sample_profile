'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const BackBtn = () => {

    const router = useRouter();


    const goBack = () => {
        router.back();
    };

    return (
        <div>
            <button className='backbtn' onClick={goBack}>Back</button>
        </div>
    )
}

export default BackBtn
