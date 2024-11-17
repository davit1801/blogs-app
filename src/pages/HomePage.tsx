import Aside from '@/components/homePage/aside/Aside';
import PostList from '@/components/homePage/postsList/PostList';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex gap-12 px-4 py-8">
      <PostList />
      <Aside />
    </div>
  );
};

export default HomePage;
