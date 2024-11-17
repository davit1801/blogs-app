import postsData from '@/data/postsData';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const PostList: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 space-y-8 md:w-2/3">
      {postsData.map((post) => {
        return (
          <div
            key={post.id}
            className="flex flex-col gap-4 rounded-xl border bg-[#fcfcfc] p-6 shadow"
          >
            <div className="flex flex-col gap-4">
              <img
                src={post.postImg}
                alt={post.postTitle}
                className="h-[200px] w-full rounded object-cover"
              />
              <h3 className="text-2xl font-bold text-[#03050c]">
                {post.postTitle}
              </h3>
              <div className="flex gap-2 text-[#555868]">
                <span className="font-bold">{post.authorFullName}</span>
                <span>{post.postDate}</span>
              </div>
            </div>
            <div>
              <p className="text-[#555868]">{post.description}</p>
            </div>
            <div>
              <Badge>{post.category}</Badge>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PostList;
