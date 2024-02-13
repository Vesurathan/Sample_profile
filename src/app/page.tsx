"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Page = () => {


  return (
    <div>
      <div className="front_page">
        <div className='front_page_part_one'>
          <div className="maincontainer">
            <div className="img_container">
              <Image
                className='viswa'
                src="/Vishwa.jpg"
                alt="Description of Vishwa image"
                width={170}
                height={170}
                // Apply z-index to bring Vishwa image forward
                style={{ zIndex: 1, position: 'absolute', top: 320, right: 1060 }}
              />
              <Image
                className='cover'
                src="/cover.jpeg"
                alt="Cover image"
                width={1000}
                height={400}
                // Ensure background-image is set for optimal rendering
                style={{
                  backgroundImage: `url(/cover.jpeg)`,
                  backgroundPosition: 'center',

                }}
              />
              <div className='name_container'>

                <p className='profile_name'
                  style={{ zIndex: 1, position: 'absolute', top: 420, right: 830 }}
                >
                  Visu Rathan
                </p>
                <p className='profile_name_friends'
                  style={{ zIndex: 1, position: 'absolute', top: 470, right: 950 }}
                >
                  1.4K friends
                </p>

              </div>

            </div>
          </div>
          <hr style={{ marginTop: 120, marginLeft: 280, marginRight: 280, }} />

          <div className="tab_nav">
            <nav>
              <ul>
                <Link className='linkdata' href='/post'> <li>Posts</li></Link>
                <Link className='linkdata' href='/album'> <li>Albums</li></Link>
                <Link className='linkdata' href='/photos'> <li>Photos</li></Link>
                <Link className='linkdata' href='/about'> <li>About</li></Link>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
