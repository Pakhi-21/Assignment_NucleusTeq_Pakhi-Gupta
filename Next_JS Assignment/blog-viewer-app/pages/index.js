import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Blog Viewer</h1>
      <p>Click the button below to view all blog posts.</p>
      <Link href="/posts">
        <button className='btn'>
          View Blog Posts
        </button>
      </Link>
    </div>
  );
}
