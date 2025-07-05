import React from 'react';

export default function PostDetail({ post }) {
  return (
    <div style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
      <p>{post.content}</p>
    </div>
  );
}