import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
  { id: '3', title: 'Post 3' }
];

export default function Post() {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
