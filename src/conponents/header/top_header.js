import React from "react";

const TopHeader = () => {
    return (
    <>
<header className="main-header">
    <div className="inside-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
      
          <a href="/" className="logo">
          
            <div className="logo-lg">
                <span className="light-logo"><h3>Analytics Dashboard</h3></span>
                <span className="dark-logo"><h3>Analytics Dashboard</h3></span>
            </div>
          </a>	
      </div>  
      
      <nav className="navbar navbar-static-top" style={{float:"right"}}>

        {/* <div className="app-menu">
          <ul className="header-megamenu nav">				  
              <li className="btn-group d-lg-inline-flex d-none">
                  <div className="app-menu">
                      <div className="search-bx mx-5">
                          <form>
                              <div className="input-group">
                                <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                  <button className="btn" type="submit" id="button-addon3"><i data-feather="search"></i></button>
                                </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                  <a href="contact_app_chat.html" className="waves-effect waves-light nav-link btn-outline no-border svg-bt-icon btn-info-light text-white" title="Chat">
                      <i data-feather="message-circle"></i>
                  </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                  <a href="mailbox.html" className="waves-effect waves-light nav-link btn-outline no-border svg-bt-icon btn-danger-light text-white" title="Mailbox">
                      <i data-feather="at-sign"></i>
                  </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                  <a href="extra_taskboard.html" className="waves-effect waves-light btn-outline no-border nav-link svg-bt-icon btn-success-light text-white" title="Taskboard">
                      <i data-feather="clipboard"></i>
                  </a>
              </li>
          </ul> 
        </div> */}

        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">		 
              {/* <li className="btn-group nav-item d-lg-inline-flex d-none">
                  <a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link btn-outline no-border full-screen btn-warning-light text-white" title="Full Screen">
                      <i data-feather="maximize"></i>
                  </a>
              </li>
            <li className="dropdown notifications-menu">
              <a href="#" className="waves-effect waves-light dropdown-toggle btn-outline no-border btn-info-light text-white" data-bs-toggle="dropdown" title="Notifications">
                <i data-feather="bell"></i>
              </a>
              <ul className="dropdown-menu animated bounceIn">

                <li className="header">
                  <div className="p-20">
                      <div className="flexbox">
                          <div>
                              <h4 className="mb-0 mt-0">Notifications</h4>
                          </div>
                          <div>
                              <a href="#" className="text-danger">Clear All</a>
                          </div>
                      </div>
                  </div>
                </li>

                <li>
                  <ul className="menu sm-scrol">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-primary"></i> Nunc fringilla lorem 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                    <a href="#">View all</a>
                </li>
              </ul>
            </li>	 */}
            {/* <li className="dropdown user user-menu">
              <a href="#" className="waves-effect waves-light dropdown-toggle no-border p-5" data-bs-toggle="dropdown" title="User">
                  <img className="avatar avatar-pill" src="http://188.166.99.136:8080/static/landing_page/assets/images/logo_black.png" alt="" />
              </a>
              <ul className="dropdown-menu animated flipInX">
                <li className="user-body">
                   <a className="dropdown-item" href="#"><i className="ti-user text-muted me-2"></i> Profile</a>
                   <a className="dropdown-item" href="#"><i className="ti-wallet text-muted me-2"></i> My Wallet</a>
                   <a className="dropdown-item" href="#"><i className="ti-settings text-muted me-2"></i> Settings</a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item" href="#"><i className="ti-lock text-muted me-2"></i> Logout</a>
                </li>
              </ul>
            </li>			   */}
            <li>
                <a style={{width: "100px",height:"100px",marginTop: "-4px"}} href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light btn-outline no-border btn-danger-light text-white">
                <img src="http://188.166.99.136:8080/static/landing_page/assets/images/logo_black.png" alt="" />
                </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
    </header>
    </>
    )
};

export default TopHeader;