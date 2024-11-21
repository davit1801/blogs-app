import PostCard from '@/components/homePage/postCard/PostCard';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import postsData from '@/data/postsData';
import React from 'react';
import { useParams } from 'react-router-dom';

const AuthorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const authorInfo = postsData.find((post) => post.id === id);
  const authorInitials = authorInfo?.authorFullName
    .split(' ')
    .map((el) => el.at(0)?.toUpperCase());

  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="mb-12 flex items-center rounded-lg bg-card p-8 shadow-lg">
        <Avatar className="mb-4 flex h-32 w-32 shrink-0 rounded-full border-4 border-primary md:mb-0 md:mr-8">
          <AvatarFallback>{authorInitials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg">{authorInfo?.authorFullName}</p>
        </div>
      </div>
      <h2 className="mb-10 text-center text-3xl font-bold">Articles</h2>
      <div className="py-8">
        {authorInfo ? <PostCard post={authorInfo} /> : <h2>Post Not Found!</h2>}
      </div>
    </div>
  );
};

export default AuthorPage;
