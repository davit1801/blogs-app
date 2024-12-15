import LoadingData from '@/components/loaders/LoadingData';
import BlogCard from '@/pages/home/components/blogCard/BlogCard';
import { getBlogs } from '@/supabase/blogs';
import { useQuery } from '@tanstack/react-query';
import QueryString from 'qs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const BlogList: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const parsedSearchParams = QueryString.parse(searchParams.toString());
  const searchText = parsedSearchParams.searchText?.toString() || '';
  const { data, isPending, isError } = useQuery({
    queryKey: ['fetch-blogs', searchText],
    queryFn: () => getBlogs(searchText),
  });

  if (data?.length === 0) {
    return (
      <p className="text-center text-2xl md:w-2/3">
        {t('home.blog-not-found')}
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-4 space-y-8 md:w-2/3">
      <div className="flex flex-col gap-8 space-y-8">
        {isPending ? (
          <LoadingData />
        ) : isError ? (
          <p>Failed fetch blogs.</p>
        ) : (
          data &&
          data.map((post) => {
            return <BlogCard key={post.id} blog={post} />;
          })
        )}
      </div>
    </section>
  );
};

export default BlogList;
