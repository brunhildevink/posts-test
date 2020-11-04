import React, { useState } from 'react';

// models
import { PostModel } from '../models/PostModel';

type Props = {
  post: PostModel;
}

const Post = ({post, ...props}: Props) => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{likes}</p>
      <span onClick={() => setLikes(likes + 1)}>Like</span>
    </div>
  )
}

export default Post;