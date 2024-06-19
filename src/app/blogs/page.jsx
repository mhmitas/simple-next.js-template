'use client'
import Btn from '@/components/Btn';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BlogPage = () => {
    const [aiBlogTopics, setAiBlogTopics] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setAiBlogTopics(data))
    }, [])

    return (
        <div>
            <h3>Blogs</h3>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                {aiBlogTopics.map((blog, index) => <BlogCard key={index} blog={blog} />)}
            </div>
        </div>
    );
};

export default BlogPage;

function BlogCard({ blog }) {
    return (
        <div className='border p-4 rounded-md flex flex-col justify-between shadow-lg'>
            <div>
                <h3 className='text-xl'>{blog.title}</h3>
                <h3 className='my-2'>{blog.description}</h3>
            </div>
            <div className='mt-2 flex justify-end'>
                <Link href={`/blogs/${blog.id}`}><Btn size='sm'><span>Show detail</span></Btn></Link>
            </div>
        </div>
    )
}



