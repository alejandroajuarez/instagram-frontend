import axios from 'axios';

export function PostsNew() { 
  const handleCreate = (event) => {
    event.preventDefault();
    console.log("Creating a new post...");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params)
      .then((response) => {      
        console.log("Post created:", response.data);
        window.location.href = '/'; // Redirect to home or feed after posting
      })
      .catch(error => {
        console.error("Error creating post:", error.response);
      });
  };

  return (
    <div className="container p-3" style={{ maxWidth: '400px', margin: 'auto' }}>
      <div className="card shadow-sm p-3">
        <h5 className="mb-3 text-center">New Post</h5>
        <form onSubmit={handleCreate}>
          <div className="mb-3">
            <input 
              name="image_url" 
              type="text" 
              className="form-control" 
              placeholder="Image URL" 
              required 
            />
          </div>
          <div className="mb-3">
            <input 
              name="caption" 
              type="text" 
              className="form-control" 
              placeholder="Write a caption..." 
              required 
            />
          </div>
          <div className="d-grid">
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ backgroundColor: '#0095F6', borderColor: '#0095F6' }}
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
