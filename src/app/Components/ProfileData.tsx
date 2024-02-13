'use client'
import React from 'react'
import Image from 'next/image'
import '../globals.css'
const ProfileData = () => {
    return (
        <div className='data_profile_container'>
            <div className="data_profile">
                <Image
                    className='data_profile_Image'
                    src={'/Vishwa.jpg'}
                    alt=''
                    width={50}
                    height={50} />
                <div className="data_profile_para">
                    <p>Visu Rathan</p>
                </div>

            </div>
        </div>
    )
}

export default ProfileData
