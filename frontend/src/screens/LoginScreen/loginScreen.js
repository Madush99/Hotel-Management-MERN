import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userAction'

const LoginScreen = ({ location, history }) => {

      

      return (
            <>
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">

                                    <div class="col-md-6 d-none d-md-flex bg-image"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="login d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <h3 class="display-4">Split page!</h3>
                                                                  <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                                                                  <form>
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                                        </div>
                                                                        <div class="custom-control custom-checkbox mb-3">
                                                                              <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                                              <label for="customCheck1" class="custom-control-label">Remember password</label>
                                                                        </div>
                                                                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                                                        <div class="text-center d-flex justify-content-between mt-4"><p>Code by <a href="#" class="font-italic text-muted">
                                                                              <u>Jassa</u></a></p></div>
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default LoginScreen