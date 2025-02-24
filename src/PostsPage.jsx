import axios from "axios"
import { useState, useEffect } from "react"
import { PostsIndex } from "./PostsIndex"
// import { PostsShow } from "./PostsShow"

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    console.log('Getting Posts')
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

  useEffect(getPosts, [])


  return (
    <main>
      <PostsIndex posts={posts} />
      {/* <PostsShow posts={post} /> */}
    </main>
  )
}