export function PostsIndex({ posts }) {
  console.log(posts);

  return (
    <div id="posts-index" className="d-flex flex-column align-items-center">
      <h1>Your Feed</h1>
      <div className="row w-100 d-flex justify-content-center">
        {posts.map((post) => (
          <div key={post.id} className="col-12 d-flex justify-content-center mb-4">
            <div className="card shadow" style={{ width: "90%", maxWidth: "500px" }}>
              <img 
                src={post.image_url} 
                className="card-img-top" 
                alt="Post Image" 
                style={{ width: "100%", height: "auto", objectFit: "cover" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{post.user?.name || "Unknown User"}</h5>
                <p className="card-text">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
