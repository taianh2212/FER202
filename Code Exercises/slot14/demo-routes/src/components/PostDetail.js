import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: "1", title: "Post 1", content: "Nội dung chi tiết bài Post 1" },
  { id: "2", title: "Post 2", content: "Nội dung chi tiết bài Post 2" },
  { id: "3", title: "Post 3", content: "Nội dung chi tiết bài Post 3" }
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
