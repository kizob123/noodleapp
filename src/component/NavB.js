import React from 'react'
import { render } from 'react-dom'
import {Link,  Switch, Router} from 'react-router-dom'


export default class NavB extends React.Component{
    render(){
        return(
            
                   <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Noodles Web</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Country</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Variety</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Styles</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
             </div>
        )
    }
}