import BlogCard from '@/pages/home/components/blogCard/BlogCard';
import { getBlogs } from '@/supabase/blogs';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const BlogList: React.FC = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['fetch-blogs'],
    queryFn: getBlogs,
  });

  if (data?.length === 0) {
    return <p className="text-2xl md:w-2/3">ბლოგების სია ცარიელია</p>;
  }

  return (
    <section className="flex flex-col gap-8 space-y-8 md:w-2/3">
      {isPending ? (
        <p>Loading fetch blogs</p>
      ) : isError ? (
        <p>Failed fetch blogs.</p>
      ) : (
        data &&
        data.map((post) => {
          return <BlogCard key={post.id} blog={post} />;
        })
      )}
    </section>
  );
};

export default BlogList;
