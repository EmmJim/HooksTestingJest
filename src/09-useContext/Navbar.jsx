import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">useContext</Link>
              
                <div>
                  <div class="navbar-nav">
                      <NavLink className={({isActive}) => `nav-link ${isActive ? `active` : ''}`} to={"/"}>
                        Home
                      </NavLink>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? `active` : ''}`} to={"/login"}>
                      Login
                    </NavLink>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? `active` : ''}`} to={"/about"}>
                      About
                    </NavLink>
                  </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar