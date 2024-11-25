import PostCard from '@/components/pages/homePage/postCard/PostCard';
import postsData from '@/data/postsData';
import React from 'react';

const PostList: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 space-y-8 md:w-2/3">
      {postsData.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </section>
  );
};

export default PostList;
