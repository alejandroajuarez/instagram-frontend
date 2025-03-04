import { useLoaderData } from "react-router-dom";

export function ProfileShow() { 
  const posts = useLoaderData()

  return (
    <div className="profile-container">
      <h1>My Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <img src={post.image_url} alt="Post" />
          </div>
        ))}
      </div>
    </div>
  );
}