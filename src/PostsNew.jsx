import axios from 'axios';
// import { Container, Form, Button, Card } from 'react-bootstrap';

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
  //   <Container className="d-flex justify-content-center">
  //     <Card className="p-4 shadow w-50">
  //       <h2 className="text-center">Create a New Post</h2>
  //       <Form onSubmit={handleCreate}>
  //         <Form.Group className="mb-3">
  //           <Form.Label>Upload Image</Form.Label>
  //           <Form.Control type="text" name="image_url" required />
  //         </Form.Group>
  //         <Form.Group className="mb-3">
  //           <Form.Label>Caption</Form.Label>
  //           <Form.Control name="caption" type="text" placeholder="Write a caption..." required />
  //         </Form.Group>
  //         <Button variant="primary" type="submit" className="w-100">Post</Button>
  //       </Form>
  //     </Card>
  //   </Container>
  // );
      <div>
        <h1>New Post</h1>
          <form onSubmit={handleCreate}>
            <div>
              Image URL: <input name="image_url" type="text" required />
            </div>
            <div>
              Caption: <input name="caption" type="text" required />
            </div>
            <button type='submit'>Post</button>
          </form>
      </div>
  );
}
