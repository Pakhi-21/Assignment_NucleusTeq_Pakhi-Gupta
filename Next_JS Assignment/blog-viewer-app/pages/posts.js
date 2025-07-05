import React from 'react';
import { useState } from 'react';
import PostList from "../components/PostList";


export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className='main-container' >
      <h1 className='header'>Blog Posts</h1>
      <h2 className='theme'>Let's Read Historical Blog</h2>
      <div>
      <PostList posts={posts} onSelect={setSelectedPost} />
      {selectedPost && <PostDetail post={selectedPost} />}
      </div>
    </div>
  );
}

// using getStaticProps (SSG):
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return { props: 
    { posts } 
   };
}