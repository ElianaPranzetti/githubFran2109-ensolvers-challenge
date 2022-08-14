import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = ({isLoggedIn}) => {

  return (
    <div>
      <Navbar 
        color = "secondary"
        dark = {true}
        expand = "md"
        container = "fluid"
      >
        <Nav className='me-auto' navbar style={{marginLeft: "20px"}}>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          {!isLoggedIn ? 
            <>
              <NavItem>
                <Link to='/Login' className="nav-link">Login</Link>
              </NavItem>
              <NavItem>
                <Link to='/Register' className="nav-link">Register</Link>
              </NavItem>
            </>
            :
            <NavItem>
              <Link to='/Logout' className="nav-link">Logout</Link>
            </NavItem>
          }
        </Nav>
        <Nav navbar>
          {!isLoggedIn ? 
            <NavItem>
              <img src="https://cdn4.iconfinder.com/data/icons/web-design-and-development-6-4/128/279-512.png" alt="Usuario" width={50} height={50} style={{marginRight: "20px"}}/>
            </NavItem>
            :
            <NavItem>
              <img src="https://cdn4.iconfinder.com/data/icons/web-design-and-development-6-4/128/279-512.png" alt="Usuario" width={50} height={50} style={{marginRight: "20px"}}/>
            </NavItem>
          }
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;