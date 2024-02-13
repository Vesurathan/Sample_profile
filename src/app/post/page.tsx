'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileData from '../Components/ProfileData';
// import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image';
import BackBtn from '../Components/BackBtn';
import { PostBanner } from '../Components/PostBanner';

const Page = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`);
            const data = await response.json();
            setPosts(data);
            // Extract total pages from response headers
            const totalCount = Number(response.headers.get('x-total-count'));
            setTotalPages(Math.ceil(totalCount / 10)); // Assuming 10 posts per page
        };

        fetchPosts();
    }, [currentPage]);

    const singlePost = (id: any) => {
        router.push(`/post/${id}`);
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
        <div>
            <BackBtn />
            <div className='postback'>
                <PostBanner Title='Posts' filter='filter' manage='Manage Post' />
                <div className='post_container'>
                    {posts.map((post: any) => (
                        <div className='post_data' onClick={() => singlePost(post.id)} key={post.id}>
                            <ProfileData />
                            <h2>{post.title}</h2>
                            <Image className='post_pic' src={'/post.jpeg'} width={400}
                                height={350} alt={''} />
                            <p>{post.body}</p>
                        </div>
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
    );
};

export default Page;
