import postsData from '@/data/postsData';
import React from 'react';
import PostCard from '@/components/homePage/postCard/PostCard';

const PostList: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 space-y-8 md:w-2/3">
      {postsData.map((post) => {
        return <PostCard post={post} />;
      })}
    </section>
  );
};

export default PostList;
