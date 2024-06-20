import Container from '@/components/common/Container';
import { fetchBlog } from '@/services/blogApi';

const BlogDetailPage = async ({ params }) => {
    console.log(params.blogId);

    const blog = await fetchBlog(params.blogId)

    return (
        <Container>
            <div className='bg-gradient-to-r dark:from-blue-400 from-blue-600 dark:to-rose-400 to-rose-600 text-transparent bg-clip-text'>
                <h3 className="text-center text-3xl font-semibold ">{blog?.title}</h3>
            </div>
            <br />
            <div>
                <p className='text-xl font-semibold mb-1'>{blog?.description || blog?.body}</p>
                <p>{blog?.blog || blog?.body}</p>
            </div>
        </Container>
    );
};

export default BlogDetailPage;