// import React, {useState, useEffect} from 'react';
import NavBar from '../header/nav';
import TopHeader from '../header/top_header';
import DashBoardBody from '../body/dashboardbody';
import AppNavBar from '../header/appNav';
import Layout from '../layouts/default';
const DashBoard = () => {

    return (
        <>
            <Layout>
                <DashBoardBody />
            </Layout>
        </>
    )
};
export default DashBoard