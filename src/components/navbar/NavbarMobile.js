const NavbarMobile = () => {
    return ( 
        <nav role="navigation">
                  <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Single Post</a>
                      </li>
                      <li>
                        <a href="#">Categories</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
     );
}
 
export default NavbarMobile;