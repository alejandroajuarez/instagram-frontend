export function Header() {
  return (
    <nav className="navbar navbar-expand fixed-bottom navbar-dark bg-black">
      <div className="container">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-3">
            <a className="nav-link active" aria-current="page" href="/">
              <i className="bi bi-house-door"></i>
              <div>Home Feed</div>
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="/posts/new">
              <i className="bi bi-plus-square"></i>
              <div>Create Post</div>
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link d-flex flex-column align-items-center" href="/profile">
              <div className="story-circle" style={{ width: '60px', height: '60px' }}>
                <div className="story-border">                
                  <div className="story-image d-flex justify-content-center align-items-center bg-light text-dark">
                    A
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
