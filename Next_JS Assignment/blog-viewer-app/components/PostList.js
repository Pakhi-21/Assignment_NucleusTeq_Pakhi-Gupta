import React from 'react';
import { useState } from "react";
import PostDetail from "./PostDetail";

// export default function PostList({ posts }) {
//   const [selectedPost, setSelectedPost] = useState(null);

//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <button onClick={() => setSelectedPost(post)}>{post.title}</button>
//           </li>
//         ))}
//       </ul>

//       {selectedPost && <PostDetail post={selectedPost} />}
//     </div>
//   );
// }


export default function PostList({ posts }) {
  const [openPostIds, setOpenPostIds] = useState([]);

  const togglePost = (postId) => {
    setOpenPostIds((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <ul>
      {posts.map((post) => {
        const isOpen = openPostIds.includes(post.id);
        return (
          <li  key={post.id} className='post-card'>
            <div className='post-item'>
              <strong>{post.title}</strong>
              <button className='btn' onClick={() => togglePost(post.id)}>
                {isOpen ? "Hide" : "View"}
              </button>
            </div>
            {isOpen && <PostDetail post={post} />}
          </li>
        );
      })}
    </ul>
  );
}


