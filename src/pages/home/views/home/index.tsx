import Aside from '@/pages/home/components/aside/Aside';
import BlogList from '@/pages/home/components/blogList/BlogList';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex gap-12 px-4 py-8">
      <BlogList />
      <Aside />
    </div>
  );
};

export default HomePage;
