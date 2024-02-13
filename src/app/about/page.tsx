'use client'
import React from 'react'
import { FaHeart, FaHome, FaPhone, FaSuitcase, FaUser } from 'react-icons/fa'
import { FaGraduationCap, FaLocationDot, FaLocationPin, FaMapLocation, FaMapLocationDot } from 'react-icons/fa6'
import BackBtn from '../Components/BackBtn'
import { PostBanner } from '../Components/PostBanner'

const Page = () => {

    return (
        <div className="banner">
            <PostBanner Title='About' filter='filter' manage='Manage About' />

            <div className="backbutton">
                <BackBtn />

            </div>
            <div className='about_container'>
                <div className="about">
                    <h2>About</h2>
                    <h3>Overview</h3>
                    <h3>Work & Education</h3>
                    <h3>Placred Lived</h3>
                    <h3>Contact and Basic Info</h3>
                    <h3>Family and Relationship</h3>
                    <h3>Details about you</h3>
                    <h3>Life Events</h3>

                </div>
                <div className="about_details">
                    <div className="about_details_data">
                        <div className="combined_data">
                            <FaSuitcase className='icon' /> <h2>Jaffna and Works at Apptimus</h2>
                        </div>
                        <div className="combined_data">
                            <FaGraduationCap className='icon' />
                            <h2>Studied at University Of Sri Jeyawardenepura</h2>
                        </div>
                        <div className="combined_data">
                            <FaHome className='icon' />
                            <h2>Lives in Jaffna Town, Srilanka</h2>
                        </div>
                        <div className="combined_data">
                            <FaLocationDot className='icon' />
                            <h2>From Jaffna.</h2>
                        </div>

                        <div className="combined_data">
                            <FaHeart className='icon' />
                            <h2>Single</h2>
                        </div>
                        <div className="combined_data">
                            <FaPhone className='icon' />
                            <h2>077 148 3110</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page
