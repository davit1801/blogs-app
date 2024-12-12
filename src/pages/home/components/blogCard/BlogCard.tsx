import { SingleBlogTypes } from '@/supabase/blogs/index.types';
import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

type propsType = {
  blog: SingleBlogTypes;
};

const BlogCard: React.FC<propsType> = ({ blog }) => {
  const blogImgUrl = `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`;
  const formatedDate = moment(blog.created_at).format('DD-MM-YYYY HH:mm');
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const title = lang === 'en' ? blog.title_en : blog.title_ka;
  const description = lang === 'en' ? blog.description_en : blog.description_ka;

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-6 text-card-foreground shadow">
      <div className="flex flex-col gap-4">
        <img
          src={blogImgUrl}
          alt={blog.title_en || 'blog image'}
          className="h-[200px] w-full rounded object-cover"
        />
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <div className="flex gap-2 text-muted-foreground">
          <span>{formatedDate}</span>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
