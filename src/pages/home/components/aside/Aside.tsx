import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import postsData, { postsCategory } from '@/data/postsData';
import { Link } from 'react-router-dom';

const Aside: React.FC = () => {
  return (
    <aside className="space-y-8">
      <div className="rounded-xl border border-solid shadow">
        <h4 className="p-6 pb-0 font-semibold">Popular Tags</h4>
        <div className="flex flex-wrap gap-5 p-6">
          {postsCategory.map((category) => {
            return (
              <Badge
                key={category}
                className="cursor-pointer bg-primary px-2.5 py-0.5 font-semibold text-primary-foreground"
              >
                {category}
              </Badge>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-solid shadow">
        <h4 className="p-6 pb-0 font-semibold">Featured Authors</h4>
        <div className="flex flex-col gap-5 p-6">
          {postsData.map((post) => {
            return (
              <Link to={`author/${post.id}`} key={post.id}>
                <div
                  className="flex cursor-pointer items-center gap-5"
                  key={post.id}
                >
                  <Avatar key={post.id}>
                    <AvatarImage src={post.authorImg} />
                    <AvatarFallback>{post.postTitle}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium hover:underline">
                    {post.authorFullName}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
