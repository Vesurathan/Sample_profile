'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ProfileData from '../Components/ProfileData';
import BackBtn from '../Components/BackBtn';
import { PostBanner } from '../Components/PostBanner';

const Page = () => {
    const [albums, setAlbums] = useState([]);
    const router = useRouter();
    useEffect(() => {
        // Fetch posts when component mounts
        fetchAlbums();
    }, []); // Empty dependency array means this effect runs only once when the component mounts


    const fetchAlbums = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data);
    };

    const single_album = (id: any) => {
        router.push(`/album/${id}`);
    }

    return (
        <div className='album'>
            <PostBanner Title='Albums' filter='Filters' manage='Manage Albums' />
            <BackBtn />
            <div className="albumback">
                <div className='album_container'>

                    {albums.map((album: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className='album_data' onClick={() => single_album(album.id)}>
                            <ProfileData />
                            <h2>{album.title}</h2>
                            {/* Add functionality to view album photos */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page
