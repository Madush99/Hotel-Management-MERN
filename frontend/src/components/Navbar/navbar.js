import React from 'react'
import { logout } from '../../actions/userAction.js'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navbar = () => {

      const dispatch = useDispatch()

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

      const logoutHandler = () => {
            dispatch(logout())
      }

      return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div class="container-fluid">
                        <a class="navbar-brand" href="/">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                              <ul class="navbar-nav ml-auto">
                                    {userInfo ? (
                                          <NavDropdown className="link" title={userInfo.name} id='username'>
                                                <LinkContainer to="/profile">
                                                      <NavDropdown.Item class="link-dark">Profile</NavDropdown.Item>
                                                </LinkContainer>
                                                <LinkContainer to="/rooms">
                                                      <NavDropdown.Item class="link-dark">Rooms</NavDropdown.Item>
                                                </LinkContainer>
                                                <NavDropdown.Item onClick={logoutHandler}>
                                                      <li className="link">logout</li>
                                                </NavDropdown.Item>
                                          </NavDropdown>

                                    ) : <li class="nav-item">
                                          <a class="nav-link active" aria-current="page" href='/login'>Login</a>
                                    </li>}


                                    {userInfo && userInfo.isAdmin && (
                                          <NavDropdown className="link" title='Admin'>
                                                <Link to="/admin">
                                                      Admin
                                                </Link>

                                          </NavDropdown>
                                    )
                                    }
                              </ul>
                        </div>
                  </div>
            </nav>
      )
}

export default Navbar