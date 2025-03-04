import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { PostsPage } from "./PostsPage";
import { PostsNew } from "./PostsNew";
import { LogoutLink } from "./LogoutLink";
import { ProfileShow } from "./ProfileShow";

axios.defaults.baseURL = "http://localhost:3000";

// Function to handle logout and redirect
const handleLogout = () => {
  axios.delete("/logout").then(() => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page after logout
  });
};

// React Router Setup
const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PostsPage />, // Home feed
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/posts/new",
        element: <PostsNew />,
      },
      {
        path: "/profile/:id",
        element: <ProfileShow /> ,
        loader: ({ params }) => axios.get(`http://localhost:3000/profile/${params.id}.json`).then((response) => response.data),

      },
      // {
      //   path: "/profile/:id",
      //   element: <ProfileShow />,
      //   loader: ({ params }) => axios.get(`/profile/${params.id}.json`).then((response) => response.data),
      // },
      {
        path: "/logout",
        element: <LogoutLink onLogout={handleLogout} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
