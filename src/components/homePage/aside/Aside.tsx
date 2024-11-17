import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import postsData, { postsCategory } from '@/data/postsData';

const Aside: React.FC = () => {
  return (
    <aside className="space-y-8 md:w-1/3">
      <div className="rounded-xl border border-solid border-[#e5e7eb] bg-[#fcfcfc] shadow">
        <h4 className="p-6 pb-0 font-semibold text-black">Popular Tags</h4>
        <div className="flex flex-wrap gap-5 p-6">
          {postsCategory.map((category) => {
            return (
              <Badge
                key={category}
                className="cursor-pointer bg-[#3d61ff] px-2.5 py-0.5 hover:bg-[#3d61ffcc]"
              >
                {category}
              </Badge>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-solid border-[#e5e7eb] bg-[#fcfcfc] shadow">
        <h4 className="p-6 pb-0 font-semibold text-black">Featured Authors</h4>
        <div className="flex flex-col gap-5 p-6">
          {postsData.map((post) => {
            return (
              <div className="flex items-center gap-5" key={post.id}>
                <Avatar key={post.id}>
                  <AvatarImage src={post.authorImg} />
                  <AvatarFallback>{post.postTitle}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-[#03050c]">
                  {post.authorFullName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
