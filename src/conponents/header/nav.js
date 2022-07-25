import React, { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const NavBar = (props) => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }
  const navigate = useNavigate()
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  //const history = useHistory();
  
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  const navigateToAllChat = (e) => {
    e.preventDefault();
    navigate("/all-chart");
  }

  const attachEventListener = () => {
    const elements = document.querySelectorAll("li a");
    elements.forEach(element => {
      element.addEventListener('onclick', (e) => {
        e.preventDefault();
        const href = element.getAttribute("href");
        if (href !== "#") {
          navigate(href);
        }
        console.log(`document.querySelectorAll("li a")`, element.getAttribute("href"));
      });
    });
    
  }

  useEffect(() => {
    attachEventListener();
  }, []);

  return (
    <>
      <nav className="main-nav" role="navigation">

        <input id="main-menu-state" type="checkbox" />
        <label className="main-menu-btn" for="main-menu-state">
          <span className="main-menu-btn-icon"></span> Toggle main menu visibility
        </label>
        <ul id="main-menu" className="sm sm-blue">
          <li><a href="/"><i data-feather="monitor"></i>Dashboard</a>
            {/* <ul> 
          <li><a href="index.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Main Dashboard</a></li>
          <li><a href="index-2.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>e-Commerce</a></li>
          <li><a href="index-3.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Analytics</a></li>
          <li><a href="index-4.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Hospital</a></li>
          <li><a href="index-5.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Banking</a></li>
          <li><a href="index-6.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Cab Booking</a></li>
      </ul> */}
          </li>
          <li><a href="#"><i data-feather="grid"></i>Payment (Bill) </a>
            <ul>
              <li><a href="/bill-type"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Payments by bill type</a></li>
              <li><a href="/service-cluster"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Payments by service cluster</a></li>
              <li><a href="/customer-type"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Payments by customer category</a></li>
              <li><a href="/district"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Payments by district</a></li>
              {/* <li><a href=""><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Mailbox</a></li> */}
            </ul>
          </li>
          <li><a href="#"><i data-feather="edit"></i>Total Billed Units</a>
            <ul>
              <li><a href="/bill-tarrif"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Billed units by tariff</a></li>
              <li><a href="/bill-cluster"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Billed units by service cluster</a></li>
              <li><a href="/bill-district"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Billed units by district</a></li>
              {/* <li><a href="widgets_social.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Social</a></li>
      <li><a href="widgets_statistic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Statistic</a></li>
      <li><a href="widgets_weather.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather</a></li>
      <li><a href="widgets.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Widgets</a></li>
      <li><a href="email_index.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Emails</a></li> */}
              {/* <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals</a>
        <ul>
          <li><a href="component_modals.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals</a></li>
          <li><a href="component_sweatalert.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sweet Alert</a></li>
          <li><a href="component_notification.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Toastr</a></li>
        </ul>			  
      </li>   */}
              {/* <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maps</a>
        <ul>
          <li><a href="map_google.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Google Map</a></li>
          <li><a href="map_vector.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Vector Map</a></li>
        </ul>			  
      </li> */}
            </ul>
          </li>
          <li><a href="#"><i data-feather="package"></i> Arrears</a>
            <ul>
              <li><a href="/arreas-district"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All arrears by district</a></li>
              <li><a href="/arreas-tarrif"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All arrears by tariff </a></li>
              <li><a href="/arreas-cluster"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All arrears by service clusters</a></li>
              {/* <li><a href="ecommerce_details.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Details</a></li>
      <li><a href="ecommerce_orders.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Orders</a></li>
      <li><a href="ecommerce_checkout.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Checkout</a></li> */}
            </ul>
          </li>
          <li><a href="#"><i data-feather="cast"></i>Customers</a>
            <ul>
              <li><a href="/customer-district"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All customers by district</a></li>
              <li><a href="/customer-tarrif"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All customers by Tarrif</a></li>
              <li><a href="/customer-feeder"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All customers by Feeder</a></li>
              <li><a href=""><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>All customers by district/date</a></li>
              {/* <li><a href="contact_userlist_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist Grid</a></li>
      <li><a href="contact_userlist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist</a></li>	
      <li><a href="sample_faq.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>FAQs</a></li>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Extra Pages</a>
        <ul>
          <li><a href="sample_blank.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blank</a></li>
          <li><a href="sample_coming_soon.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Coming Soon</a></li>
          <li><a href="sample_custom_scroll.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom Scrolls</a></li>
          <li><a href="sample_gallery.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Gallery</a></li>
          <li><a href="sample_lightbox.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lightbox Popup</a></li>
          <li><a href="sample_pricing.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pricing</a></li>
        </ul>			  
      </li> */}
            </ul>
          </li>
          <li><a href="/all-chart" onClick={navigateToAllChat}><i data-feather="pie-chart"></i>All Charts</a></li>
          {/* <li><a href="#"><i data-feather="inbox"></i>All Table</a></li> */}
          {/* <li><a href="#"><i data-feather="package"></i>Features</a>			
    <ul>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Utilities</a>
        <ul>
          <li><a href="ui_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Grid System</a></li>
          <li><a href="ui_badges.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Badges</a></li>
          <li><a href="ui_border_utilities.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Border</a></li>
          <li><a href="ui_buttons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Buttons</a></li>	
          <li><a href="ui_color_utilities.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Color</a></li>
          <li><a href="ui_dropdown.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown</a></li>
          <li><a href="ui_dropdown_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown Grid</a></li>
          <li><a href="ui_progress_bars.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Progress Bars</a></li>
          <li><a href="ui_ribbons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ribbons</a></li>
          <li><a href="ui_sliders.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sliders</a></li>
          <li><a href="ui_typography.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Typography</a></li>
          <li><a href="ui_tab.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Tabs</a></li>
          <li><a href="ui_timeline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Timeline</a></li>
          <li><a href="ui_timeline_horizontal.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Horizontal Timeline</a></li>
        </ul>			  
      </li>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card</a>
        <ul>
          <li><a href="box_cards.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>User Card</a></li>
          <li><a href="box_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Card</a></li>
          <li><a href="box_basic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Card</a></li>
          <li><a href="box_color.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Color</a></li>
          <li><a href="box_group.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Group</a></li>
        </ul>			  
      </li>			
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Icons</a>
        <ul>
          <li><a href="icons_fontawesome.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Font Awesome</a></li>
          <li><a href="icons_glyphicons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Glyphicons</a></li>
          <li><a href="icons_material.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Material Icons</a></li>	
          <li><a href="icons_themify.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Themify Icons</a></li>
          <li><a href="icons_simpleline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple Line Icons</a></li>
          <li><a href="icons_cryptocoins.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Cryptocoins Icons</a></li>
          <li><a href="icons_flag.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flag Icons</a></li>
          <li><a href="icons_weather.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather Icons</a></li>
        </ul>			  
      </li>		
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Components</a>
        <ul>
          <li><a href="component_bootstrap_switch.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bootstrap Switch</a></li>
          <li><a href="component_date_paginator.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Date Paginator</a></li>
          <li><a href="component_media_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Medias</a></li>
          <li><a href="component_rangeslider.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Range Slider</a></li>
          <li><a href="component_rating.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ratings</a></li>
          <li><a href="component_animations.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Animations</a></li>
          <li><a href="extension_fullscreen.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Fullscreen</a></li>
          <li><a href="extension_pace.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pace</a></li>
          <li><a href="component_nestable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Nestable</a></li>
          <li><a href="component_portlet_draggable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Draggable Portlets</a></li>
        </ul>			  
      </li>
    </ul>		  
  </li> 	
  <li><a href="#"><i data-feather="inbox"></i>Forms & Table</a>
    <ul>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Forms</a>			  
        <ul>
          <li><a href="forms_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Elements</a></li>
          <li><a href="forms_general.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Layout</a></li>
          <li><a href="forms_wizard.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Wizard</a></li>	
          <li><a href="forms_validation.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Validation</a></li>
          <li><a href="forms_mask.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Formatter</a></li>
          <li><a href="forms_xeditable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Xeditable Editor</a></li>
          <li><a href="forms_dropzone.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropzone</a></li>
          <li><a href="forms_code_editor.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Code Editor</a></li>
          <li><a href="forms_editors.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editor</a></li>
          <li><a href="forms_editor_markdown.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Markdown</a></li>
        </ul>
      </li>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Tables</a>			  
        <ul>
          <li><a href="tables_simple.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple tables</a></li>
          <li><a href="tables_data.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data tables</a></li>
          <li><a href="tables_editable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editable Tables</a></li>
          <li><a href="tables_color.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Table Color</a></li>
        </ul>
      </li>			
    </ul>		  	
  </li>
  <li><a href="#"><i data-feather="pie-chart"></i>Charts</a>
    <ul>
      <li><a href="charts_chartjs.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>ChartJS</a></li>
      <li><a href="charts_flot.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flot</a></li>
      <li><a href="charts_inline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Inline charts</a></li>
      <li><a href="charts_morris.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Morris</a></li>
      <li><a href="charts_peity.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Peity</a></li>
      <li><a href="charts_chartist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chartist</a></li>
      <li><a href="charts_c3_axis.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Axis Chart</a></li>
      <li><a href="charts_c3_bar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</a></li>
      <li><a href="charts_c3_data.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data Chart</a></li>
      <li><a href="charts_c3_line.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Line Chart</a></li>
      <li><a href="charts_echarts_basic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Charts</a></li>
      <li><a href="charts_echarts_bar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</a></li>
      <li><a href="charts_echarts_pie_doughnut.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pie & Doughnut Chart</a></li>
    </ul>  	
  </li>	
  <li><a href="#"><i data-feather="lock"></i>Login &amp; Error</a>
    <ul>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Authentication</a>
        <ul>
          <li><a href="auth_login.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Login</a></li>
          <li><a href="auth_register.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Register</a></li>
          <li><a href="auth_lockscreen.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lockscreen</a></li>
          <li><a href="auth_user_pass.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Recover password</a></li>	
        </ul>			  
      </li>
      <li><a href="#"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Miscellaneous</a>
        <ul>
          <li><a href="error_404.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 404</a></li>
          <li><a href="error_500.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 500</a></li>
          <li><a href="error_maintenance.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maintenance</a></li>
        </ul>			  
      </li>
    </ul>		  
  </li> */}
        </ul>
      </nav>
    </>
  )
};

export default NavBar;