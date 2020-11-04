import React, { useState } from 'react';

// models
import { PostModel } from '../models/PostModel';

type Props = {
  post: PostModel;
  handleLikeIncrement: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}

const Post = ({post, handleLikeIncrement, handleRemoveItem, ...props}: Props) => {
  const [likes, setLikes] = useState(post.likes);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.likes}</p>
      <span onClick={() => handleLikeIncrement(post.id)}>Like</span>
      <span onClick={() => handleRemoveItem(post.id)}>Remove</span>
    </div>
  )
}

export default Post;