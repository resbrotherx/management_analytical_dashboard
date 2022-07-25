// import React, {useState, useEffect} from 'react';

import AppNavBar from "../header/appNav";

const Layout = (props) => {

    return (
        <>

            <div className="wrapper">
                <div className="art-bg">
                    <img src="http://crmx-admin-template.multipurposethemes.com/bs5/images/art1.svg" alt="" className="art-img light-img" />
                    <img src="http://crmx-admin-template.multipurposethemes.com/bs5/images/art3.svg" alt="" className="art-img dark-img" />
                </div>
                <AppNavBar />
                {props.children}
            </div>
        </>
    )
};
export default Layout