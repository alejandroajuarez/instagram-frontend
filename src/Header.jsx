import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-black">
      <div className="container-fluid d-flex justify-content-around">
        <Nav.Link as={Link} to="/" className="nav-icon">
          Home Feed
        </Nav.Link>
        <Nav.Link as={Link} to="/posts/new" className="nav-icon">
          Create Post
        </Nav.Link>
        <Nav.Link as={Link} to="/login" className="nav-icon">
          Profile
        </Nav.Link>
      </div>
    </nav>
  );
}
