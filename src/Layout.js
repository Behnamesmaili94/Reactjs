import { Outlet, Link } from "react-router-dom";
import {Component} from 'react';

class Layout extends Component{

  render(){
    return (
      <div >
        <nav className="col-start-6 inline-block">
          <ul>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
  
        <Outlet />
      </div>)
  }
}

export default Layout;