import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Nav1 = () => {
      return (
            <Navbar  style={{backgroundColor:'#282828'}}  className="py-1 justify-content-center" >
                  <Nav >
                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/rooms'><strong>ROOMS & SUITES</strong> </a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/restaurants'><strong>RESTAURANTS & BARS</strong></a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/foods'> <strong>TAKE & DELIVERY</strong></a>
                        </li>
                        <li class="nav-item dropdown" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <strong>WEDDING & EVENTS</strong>
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a  class="dropdown-item" href="/weddings"><b>WEDDINGS PLANNING</b></a></li>
                                    <li><a  class="dropdown-item" href="/conference"><b>MEETINGS</b></a></li>
                              </ul>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/weddings'><strong>ABOUT</strong></a>
                        </li>

                  </Nav>
            </Navbar >
      )
}

export default Nav1
