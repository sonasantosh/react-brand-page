import "./Header.css";

export const Header = () => {
  return (

      <header>
        <div className="container">
          <div className="inner-container">
            <div className="header-logo">
              <img src="vite.svg" alt="Header Logo" />
            </div>
            <nav className="navigation">
              <ul>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="user-detail">
              <button className="login-btn btn">Login</button>
            </div>
          </div>
        </div>
      </header>

  );
};
