/* eslint-disable @next/next/no-img-element */
'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProfileData from "@/app/Components/ProfileData";
import BackBtn from "@/app/Components/BackBtn";
import { PostBanner } from '@/app/Components/PostBanner';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Page = () => {
    const router = useRouter();
    const params = useParams();
    const [album, setAlbum] = useState({ title: '' });
    const [singleAlbum, setSingleAlbum] = useState<Photo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchSingleAlbum = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}&_page=${currentPage}&_limit=5`);
            const albumData = await response.json();
            setSingleAlbum(albumData);
            // Extract total pages from response headers
            const totalCount = Number(response.headers.get('x-total-count'));
            setTotalPages(Math.ceil(totalCount / 5)); // Assuming 5 photos per page
        };
        fetchSingleAlbum();
    }, [params.id, currentPage]);

    useEffect(() => {
        const fetchAlbum = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);
            const data = await response.json();
            setAlbum(data);
        };
        fetchAlbum();
    }, [params.id]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="album">
                <PostBanner Title='Album View' filter='Filter' manage='Manage Album' />

                <div className='post_data_single'>
                    <ProfileData />
                    <h2>{album.title}</h2>
                </div>
                <BackBtn />
            </div>
            <div>
                {singleAlbum.map((photo) => (
                    <div className='album_pics' key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} width={200} height={200} />
                        <img src={photo.url} alt={photo.title} width={200} height={200} />
                    </div>
                ))}
            </div>
            <nav className="Page_navigation">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
                            <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button className="page-link" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Page;
