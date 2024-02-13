'use client'
import ProfileData from "@/app/Components/ProfileData";
import "../../globals.css"
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import BackBtn from "@/app/Components/BackBtn";
import { PostBanner } from "@/app/Components/PostBanner";


const Page = () => {
    const [post, setPost] = useState({ title: '', body: '' });
    const params = useParams();

    useEffect(() => {
        const getdata = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const data = await response.json();
            // console.log(data);
            setPost(data);
        }
        getdata();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [comment, setComment] = useState([]);

    useEffect(() => {
        const getcommentdata = async () => {
            const response = await fetch(` https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
            const commentdata = await response.json();
            console.log(commentdata);
            setComment(commentdata);
        }
        getcommentdata();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <PostBanner Title='Post View' filter='filter' manage='Manage Post' />
            <div className='post_data_single' >
                <ProfileData />
                <h2>{post.title}</h2>
                <Image className='post_pic' src={'/post.jpeg'} width={400}
                    height={350} alt={''} />
                <p>{post.body}</p>
            </div>
            <BackBtn />

            <div className="comment_container">
                {comment.map((post: any) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='comment_data'>
                        <p>Comment : {post.body}</p>
                        <h2>Name : {post.name}</h2>
                        <h2>Email : {post.email}</h2>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Page
