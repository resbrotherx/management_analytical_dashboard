import React, { useEffect, useState } from "react";
import NavBar from '../header/nav';
import TopHeader from '../header/top_header';
import axios from "axios";
import { Chart as ChartJs, ArcElement, LineElement, PointElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { prepareValue, sendRequest, yearStartAndEnd } from "../utils";
import { getAppUrl, urls } from "../urls";
import AppNavBar from "../header/appNav";
import Layout from "../layouts/default";
import { colors } from "../colors";
import {CharttooltipUrls, ChartseriesUrls, shadow} from "../chartoption"



ChartJs.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    LineElement,
    PointElement
)

const yearStartDate = yearStartAndEnd();

var totalcolUrl = "http://188.166.99.136:7010/payments/totalCollectionByBillType/"

const BillType = () => {
    const [datapiker, setDatepiker] = useState(yearStartDate.start);
    const [feederchart, setFeederchart] = useState(0);

    useEffect(() => {
        charData()
    }, [])


    const charData = async () => {
        console.log("`${getAppUrl.paymentsTotalCollectionByBillType}${datapiker}`", `${getAppUrl.paymentsTotalCollectionByBillType}${datapiker}`);
        return await sendRequest({
            url: `${getAppUrl.paymentsTotalCollectionByBillType}${datapiker}`,
            setState: setFeederchart,
        })
        //   return await axios
        //   .get(`${totalcolUrl}${datapiker}`)
        //   .then((response) => setFeederchart(response.data))
        //   .catch((error)=> console.log(error))
    }
    var data = {
        labels: feederchart?.data?.map(x => x.records),
        datasets: [{
            label: `${feederchart?.data?.length} Available`,
            data: feederchart?.data?.map(x => x.amount),
            radius: colors.ChartAnimation.radius,
            animations:colors.ChartAnimation.animations,
            dropShadow:colors.ChartAnimation.dropShadow,
            backgroundColor: colors.allChartPageColors.darkcolor,
            borderColor:colors.allChartPageColors.darkcolor,
            borderWidth: colors.ChartAnimation.borderWidth
        }]
    }
    var options = {
        CharttooltipUrls,
        ChartseriesUrls,
        maintainAspectRatio: false,
        shadow,
    }
    return (
        <>
            <Layout>
                <div className="content-wrapper">
                    <div className="container-full">
                        <div className="content-header">
                            <div className="d-flex align-items-center">
                                <div className="me-auto">
                                    <h3 className="page-title">Collection By BillType</h3>


                                    <div className="d-inline-block align-items-center" style={{ float: "right", marginRight: "-140%" }}>

                                        <ol className="breadcrumb">
                                            <li className=" breadcrumb-item"> <input value={datapiker} onChange={e => setDatepiker(e.target.value)} className="form-control" type="date" style={{ color: "#b5b5c3", border: "1px solid #29354a" }} /></li>
                                            <li className=" breadcrumb-item"> <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{ marginBottom: "0rem!important", marginTop: "4px", backgroundColor: "#0c1a32" }} type="button" onClick={() => charData()}>submit</button></li>
                                            {/* <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
								<li className="breadcrumb-item" aria-current="page">Chart</li>
								<li className="breadcrumb-item active" aria-current="page">Collection By BillType</li> */}
                                        </ol>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <section className="content">

                            <div className="row">
                                <div className="col-xl-6 col-12">
                                    <div className="box">
                                        <div className="box-header with-border">
                                            <h4 className="box-title">Collection By BillType Chart</h4>
                                        </div>
                                        <div className="box-body">
                                            <Pie
                                                data={data}
                                                options={options}
                                                className="h-400"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-12">


                                    <div class="box">
                                        <div className="box-header with-border">
                                            <h4 className="box-title">Collection By BillType Table</h4>
                                        </div>
                                        <div class="box-body">
                                            <div class="table-responsive">
                                                {/* id="example"  */}
                                                <table class="table table-bordered table-hover display nowrap margin-top-10 w-p100">
                                                    <thead>
                                                        <tr>
                                                            <th>index</th>
                                                            <th>records</th>
                                                            <th>sum</th>
                                                            <th>amount</th>
                                                            <th>bill description</th>
                                                        </tr>
                                                    </thead>

                                                    {feederchart?.data?.map((item, index) => (
                                                        <tbody key={index}>
                                                            <tr>
                                                                <td scope="row">{index + 1}</td>
                                                                <td>{item.records}</td>
                                                                <td>{prepareValue('currency', item.amount)}</td>
                                                                <td>{item.bill_description}</td>
                                                            </tr>
                                                        </tbody>
                                                    ))
                                                    }

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </Layout>
        </>
    )
};
export default BillType