export function PostsIndex({ posts }) {
  console.log(posts);
  const uniqueUsers = [...new Set(posts.map(post => post.user))];

  return (
    <div id="posts-index" className="d-flex flex-column align-items-center">
    <div className="stories-container w-100 mb-4 px-2" style={{ maxWidth: "500px" }}>
      <div className="d-flex overflow-auto py-3 hide-scrollbar">
        {uniqueUsers.map((user, index) => (
          <div key={index} className="story-item me-3 d-flex flex-column align-items-center">
            <div className="story-circle">
              <div className="story-border">                
                <div className="story-image d-flex justify-content-center align-items-center bg-light text-dark">
                  {user ? user.charAt(0).toUpperCase() : "???"}
                </div>
              </div>
            </div>
            <span className="story-username small mt-1">{user || "User"}</span>
          </div>
        ))}
      </div>
    </div>

    {/* <div className="d-flex flex-column align-items-center"> */}
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
                <h5 className="card-title">{post.user || "Unknown User"}</h5>
                <p className="card-text">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
