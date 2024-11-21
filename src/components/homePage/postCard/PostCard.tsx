import { Badge } from '@/components/ui/badge';
import { postType } from '@/data/postsData';
import React from 'react';

type propsType = {
  post: postType;
};

const PostCard: React.FC<propsType> = ({ post }) => {
  return (
    <div
      key={post.id}
      className="flex flex-col gap-4 rounded-xl border bg-card p-6 text-card-foreground shadow"
    >
      <div className="flex flex-col gap-4">
        <img
          src={post.postImg}
          alt={post.postTitle}
          className="h-[200px] w-full rounded object-cover"
        />
        <h3 className="text-2xl font-bold">{post.postTitle}</h3>
        <div className="flex gap-2 text-muted-foreground">
          <span className="font-bold">{post.authorFullName}</span>
          <span>{post.postDate}</span>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground">{post.description}</p>
      </div>
      <div>
        <Badge className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80">
          {post.category}
        </Badge>
      </div>
    </div>
  );
};

export default PostCard;
