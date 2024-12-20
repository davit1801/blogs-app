import { formatDate } from '@/lib/dayjs/formatDate';
import { SingleBlogTypes } from '@/supabase/blogs/index.types';
import React from 'react';
import { useTranslation } from 'react-i18next';

type propsType = {
  blog: SingleBlogTypes;
};

const BlogCard: React.FC<propsType> = ({ blog }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const blogImgUrl = `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`;
  const formatedDate = formatDate(blog.created_at, lang);

  const title = lang === 'en' ? blog.title_en : blog.title_ka;
  const description = lang === 'en' ? blog.description_en : blog.description_ka;

  return (
    <div className="md: flex flex-col gap-8 rounded-xl border bg-card p-6 text-card-foreground shadow md:flex-row">
      <div className="p-8 md:w-[250px] md:p-0">
        <img
          src={blogImgUrl}
          alt={blog.title_en || 'blog image'}
          className="w-full rounded object-cover md:w-[250px] md:max-w-none"
        />
      </div>
      <div className="flex flex-col gap-2 overflow-hidden overflow-ellipsis text-muted-foreground">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <span className="text-foreground">{formatedDate}</span>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
