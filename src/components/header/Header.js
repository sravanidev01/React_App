import React from 'react'
import './Header.css'
import "../../assets/css/demo/nit-styles.css"
import Avatar1 from "../../Img/avatar2.png"
import Face1 from "../../Img/faces/face1.jpg"
import {
  FaBell,
  FaRegSun,
  FaDownload,
  FaEnvelope
} from "react-icons/fa"
const Header = () => {
  function myMessage() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("nit-show") == -1) {
      x.className += " nit-show";
    } else { 
      x.className = x.className.replace(" nit-show", "");
    }
  }
  function myNotification() {
    var x = document.getElementById("Notification");
    if (x.className.indexOf("nit-show") == -1) {
      x.className += " nit-show";
    } else { 
      x.className = x.className.replace(" nit-show", "");
    }
  }
    return (
      <>
    
<div className="nit-bar nit-top-dash nit-bluenew nit-large">
  <span className="nit-bar-item nit-left nit-padding-large">Logo</span>
  <div className="nit-bar-item nit-right">
   <i className='nit-margin-right'><FaRegSun/></i>
   <i className='nit-margin-right' ><FaBell onClick={() => myNotification()}/></i>
   <div id="Notification" class="nit-dropdown-content nit-bar-block nit-card-4 nit-animate-zoom">
      <a href="#" class="nit-bar-item nit-button">Not 1</a>
      <a href="#" class="nit-bar-item nit-button">Link 2</a>
      <a href="#" class="nit-bar-item nit-button">Link 3</a>
    </div>
   <i className='nit-margin-right' ><FaEnvelope onClick={() => myMessage()}/></i>
   <div id="Demo" class="nit-dropdown-content-new nit-bar-block nit-card-4 nit-margin-right nit-animate-zoom">
   <a href="#" class="nit-bar-item nit-button nit-border-bottom"><span className='f-size'><FaEnvelope/> Messages</span></a>

      <a href="#" class="nit-bar-item nit-button nit-border-bottom"><img src={Avatar1} className="nit-circle" style={{width:'26px'}} /><span className='f-size'>Jully Sent you a Message</span></a>
      <a href="#" class="nit-bar-item nit-button nit-border-bottom"><img src={Avatar1} className="nit-circle" style={{width:'26px'}} /><span className='f-size'>Anne Sent you a Message</span></a>
      <a href="#" class="nit-bar-item nit-button nit-border-bottom"><img src={Avatar1} className="nit-circle" style={{width:'26px'}} /><span className='f-size'>loyal Sent you a Message </span></a>
    </div>
   <i className='nit-margin-right'><FaDownload/></i>
      <img src={Avatar1} className="nit-circle " style={{width:'46px'}} />
  </div>
</div>
   
        {/* <div className='body-wrapper'>
            <div className="main-wrapper mdc-drawer-app-content">
            
              <header className="mdc-top-app-bar">
                <div className="mdc-top-app-bar__row">
                  <div className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button sidebar-toggler">menu</button>
                    <span className="mdc-top-app-bar__title">Greetings Clyde!</span>
                    <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon search-text-field d-none d-md-flex">
                      <i className="material-icons mdc-text-field__icon">search</i>
                      <input className="mdc-text-field__input" id="text-field-hero-input" />
                      <div className="mdc-notched-outline">
                        <div className="mdc-notched-outline__leading"></div>
                        <div className="mdc-notched-outline__notch">
                          <label for="text-field-hero-input" className="mdc-floating-label">Search..</label>
                        </div>
                        <div className="mdc-notched-outline__trailing"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end mdc-top-app-bar__section-right">
                    <div className="menu-button-container menu-profile d-none d-md-block">
                      <button className="mdc-button mdc-menu-button">
                        <span className="d-flex align-items-center">
                          <span className="figure">
                            <img src={Face1} alt="user" className="user"/>
                          </span>
                          <span className="user-name">Clyde Miles</span>
                        </span>
                      </button>
                      <div className="mdc-menu mdc-menu-surface" tabindex="-1">
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon-only">
                              <i className="mdi mdi-account-edit-outline text-primary"></i>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Edit profile</h6>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon-only">
                              <i className="mdi mdi-settings-outline text-primary"></i>                      
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Logout</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="divider d-none d-md-block"></div>
                    <div className="menu-button-container d-none d-md-block">
                      <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-settings"></i>
                      </button>
                      <div className="mdc-menu mdc-menu-surface" tabindex="-1">
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon-only">
                              <i className="mdi mdi-alert-circle-outline text-primary"></i>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Settings</h6>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon-only">
                              <i className="mdi mdi-progress-download text-primary"></i>                      
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Update</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="menu-button-container">
                      <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-bell"></i>
                      </button>
                      <div className="mdc-menu mdc-menu-surface" tabindex="-1">
                        <h6 className="title"> <i className="mdi mdi-bell-outline mr-2 tx-16"></i> Notifications</h6>
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon">
                              <i className="mdi mdi-email-outline"></i>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">You received a new message</h6>
                              <small className="text-muted"> 6 min ago </small>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon">
                              <i className="mdi mdi-account-outline"></i>                      
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">New user registered</h6>
                              <small className="text-muted"> 15 min ago </small>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon">
                              <i className="mdi mdi-alert-circle-outline"></i>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">System Alert</h6>
                              <small className="text-muted"> 2 days ago </small>
                            </div>
                          </li> 
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon">
                              <i className="mdi mdi-update"></i>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">You have a new update</h6>
                              <small className="text-muted"> 3 days ago </small>
                            </div>
                          </li> 
                        </ul>
                      </div>
                    </div>
                    <div className="menu-button-container">
                      <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-email"></i>
                        <span className="count-indicator">
                          <span className="count">3</span>
                        </span>
                      </button>
                      <div className="mdc-menu mdc-menu-surface" tabindex="-1">
                        <h6 className="title"><i className="mdi mdi-email-outline mr-2 tx-16"></i> Messages</h6>
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail">
                              <img src="" alt="user"/>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Mark send you a message</h6>
                              <small className="text-muted"> 1 Minutes ago </small>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail">
                              <img src="" alt="user"/>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Cregh send you a message</h6>
                              <small className="text-muted"> 15 Minutes ago </small>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail">
                              <img src="" alt="user"/>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Profile picture updated</h6>
                              <small className="text-muted"> 18 Minutes ago </small>
                            </div>
                          </li>                
                        </ul>
                      </div>
                    </div>
                    <div className="menu-button-container d-none d-md-block">
                      <button className="mdc-button mdc-menu-button">
                        <i className="mdi mdi-arrow-down-bold-box"></i>
                      </button>
                      <div className="mdc-menu mdc-menu-surface" tabindex="-1">
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon-only">
                              <i className="mdi mdi-lock-outline text-primary"></i>
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Lock screen</h6>
                            </div>
                          </li>
                          <li className="mdc-list-item" role="menuitem">
                            <div className="item-thumbnail item-thumbnail-icon-only">
                              <i className="mdi mdi-logout-variant text-primary"></i>                      
                            </div>
                            <div className="item-content d-flex align-items-start flex-column justify-content-center">
                              <h6 className="item-subject font-weight-normal">Logout</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              </div>
        </div> */}
      
      </>
    )
 
}

export default Header