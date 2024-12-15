import SearchBar from '@/components/inputs/SearchBar';
import Aside from '@/pages/home/components/aside/Aside';
import BlogList from '@/pages/home/components/blogList/BlogList';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 px-4 py-8">
      <SearchBar className="self-center shadow-lg" />
      <div className="flex gap-10">
        <BlogList />
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;
