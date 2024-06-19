'use client'
import Container from '@/components/common/Container';
import React, { useEffect, useState } from 'react';

const BlogDetailPage = ({ params }) => {
    console.log(params.blogId);
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                console.log(params.blogId);
                const id = params.blogId
                const blog = data.find(blog => blog.id == id)
                setBlog(blog);
            })

    }, [params])
    return (
        <Container>
            <div className='bg-gradient-to-r dark:from-blue-400 from-blue-600 dark:to-rose-400 to-rose-600 text-transparent bg-clip-text'>
                <h3 className="text-center text-3xl font-semibold ">{blog?.title}</h3>
            </div>
            <br />
            <div>
                <p className='text-xl font-semibold mb-1'>{blog?.description}</p>
                <p>{blog?.blog}</p>
            </div>
        </Container>
    );
};

export default BlogDetailPage;