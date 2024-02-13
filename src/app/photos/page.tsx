'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BackBtn from '../Components/BackBtn';
import { PostBanner } from '../Components/PostBanner';

const Page = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const fetchPhotos = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}`);
        const data = await response.json();
        setPhotos(data);
        // Extract total pages from response headers
        const totalCount = Number(response.headers.get('x-total-count'));
        setTotalPages(Math.ceil(totalCount / 200)); // Assuming 10 photos per page
    };

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
        <div className='photo_container'>
            <div className='album'>
                <PostBanner Title='Photos' filter='Filters' manage='Manage Photos' />
                <div className="backbutton">
                    <BackBtn />
                </div>
                <div className='photo'>
                    {photos.map((photo: any) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            alt='img'
                            width={200}
                            height={200}
                            key={photo.id}
                            src={photo.url}
                        />
                    ))}
                </div>
                <nav aria-label="Page_navigation">
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
        </div>
    )
}

export default Page;
