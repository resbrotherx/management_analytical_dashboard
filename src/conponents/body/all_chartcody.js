import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJs, ArcElement, LineElement, PointElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { sendRequest, yearStartAndEnd } from "../utils";
import { getAppUrl, urls } from "../urls";
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


const All_ChartBody = () => {
    const [feederchart, setFeederchart] = useState('')
    const [serviceCluster, setServiceCluster] = useState(0);
    const [district, setDistrict] = useState(0);
    const [categorycustomer, setCategorycustomer] = useState(0);
    const [billtype, setBilltype] = useState(0);
    
    const yearStartDate = yearStartAndEnd();


    const [billtypedatapiker, setBilltypedatapiker] = useState(yearStartDate.start);
    const [categorycustomerdatapiker, setCategorycustomerDatepiker] = useState(yearStartDate.start)
    const [serviceClusterdatapiker, setServiceClusterdatapiker] = useState(yearStartDate.start)
    const [districtdatapiker, setDistrictdatapiker] = useState(yearStartDate.start)
    const [billunitdistrict, setBillunitdistrict] = useState(0);
    const [billunitcluter, setBillunitcluter] = useState(0);
    


    const [billunitcluterdatapiker, setBillunitcluterDatepiker] = useState(yearStartDate.start)
    const [billunitdistrictdatapiker, setBillunitdistrictDatepiker] = useState(yearStartDate.start)


    // var billtypeUrl = "http://188.166.99.136:7010/payments/totalCollectionByBillType/"
    // var baseUrl = "http://188.166.99.136:7010/general/totalBilledUnitsByFeeder"
    // var serviceClusterUrl = "http://188.166.99.136:7010/payments/totalCollectionByServiceCluster/"
    // var districtlUrl = "http://188.166.99.136:7010/payments/totalCollectionByDistrict/"
    // var categoryUrl = "http://188.166.99.136:7010/payments/totalCollectionByCustomers/"
    // var billunitdistrictUrl = "http://188.166.99.136:7010/billed-units/totalBilledUnitsByDistrict/"
    // var billunitcluterUrl =  "http://188.166.99.136:7010/billed-units/totalBilledUnitsByServiceCluster/"
	
    useEffect(() => {
		charData();
        serviceClustercharData();
        districtcharData();
        CategoryCustomerType();
        BilltypeData();
        billunitdistricData();
        // billunitcluterData();
	}, [])

    const charData = async () => {
        return await sendRequest({
            //url: baseUrl,
            url: urls.allChartPageUrls.baseUrl,
            setState: setFeederchart,
        });
    }

    var data = {
        labels: feederchart?.data?.map(x => x.feeder),
        datasets: [{
            label: `${feederchart?.data?.length} Available`,
            data: feederchart?.data?.map(x => x.billed_amount),
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


    // cluster-------

    const serviceClustercharData = async () => {
        return await sendRequest({
            url: `${getAppUrl.paymentsTotalCollectionByServiceCluster}${serviceClusterdatapiker}`,
            //url: `${urls.allChartPageUrls.serviceClusterUrl}${serviceClusterdatapiker}`,
            setState: setServiceCluster,
        });
    }
    var datac = {
        labels: serviceCluster?.data?.map(x => x.collection),
        datasets: [{
            label: `names : ${serviceCluster?.data?.map(x => x.name)} total collection `,
            data: serviceCluster?.data?.map(x => x.total_collection),
            radius: colors.ChartAnimation.radius,
            animations:colors.ChartAnimation.animations,
            dropShadow:colors.ChartAnimation.dropShadow,
            backgroundColor: colors.allChartPageColors.darkcolor,
            borderColor:colors.allChartPageColors.darkcolor,
            borderWidth: colors.ChartAnimation.borderWidth
        }]
    }

    // District------- 2022-03-01

    const districtcharData = async () => {
        return await sendRequest({
            url: `${urls.allChartPageUrls.districtlUrl}${districtdatapiker}`,
            setState: setDistrict,
        });
    }
    var datad = {
        labels: district?.data?.map(x => x.collection),
        datasets: [{
            label: `names : ${district?.data?.map(x => x.name)} total collection `,
            data: district?.data?.map(x => x.total_collection),
            radius: colors.ChartAnimation.radius,
            animations:colors.ChartAnimation.animations,
            dropShadow:colors.ChartAnimation.dropShadow,
            backgroundColor: colors.allChartPageColors.darkcolor,
            borderColor:colors.allChartPageColors.darkcolor,
            borderWidth: colors.ChartAnimation.borderWidth
        }]
    };

    //category_customer---
    const CategoryCustomerType = async () => {
        return await sendRequest({
            //url: `${categoryUrl}${categorycustomerdatapiker}`,
            url: `${urls.allChartPageUrls.categoryUrl}${categorycustomerdatapiker}`,
            setState: setCategorycustomer,
        });
    }
    var datacc = {
        labels: categorycustomer?.data?.map(x => x.customer_category),
        datasets: [{
            label: `total collection : ${categorycustomer?.data?.map(x => x.total_collection)} collection `,
            data: categorycustomer?.data?.map(x => x.collection),
            radius: colors.ChartAnimation.radius,
            animations:colors.ChartAnimation.animations,
            dropShadow:colors.ChartAnimation.dropShadow,
            backgroundColor: colors.allChartPageColors.darkcolor,
            borderColor:colors.allChartPageColors.darkcolor,
            borderWidth: colors.ChartAnimation.borderWidth
        }]
    };

    // bill_type -----

    const BilltypeData = async () => {
        return await sendRequest({
            
            url: `${urls.allChartPageUrls.billtypeUrl}${billtypedatapiker}`,
            setState: setBilltype,
        });
    }
    var databt = {
        labels: billtype?.data?.map(x => x.records),
        datasets: [{
            label: `${billtype?.data?.length} Available`,
            data: billtype?.data?.map(x => x.amount),
            radius: colors.ChartAnimation.radius,
            animations:colors.ChartAnimation.animations,
            dropShadow:colors.ChartAnimation.dropShadow,
            backgroundColor: colors.allChartPageColors.darkcolor,
            borderColor:colors.allChartPageColors.darkcolor,
            borderWidth: colors.ChartAnimation.borderWidth
        }]
    }


//bill unit by disrict

const billunitdistricData = async ()  => {
    return await sendRequest({
        url: `${urls.allChartPageUrls.billunitdistrictUrl}${billunitdistrictdatapiker}`,
        setState: setBillunitdistrict,
    });
 };
 
 var databud = {
    labels: billunitdistrict?.data?.map(x => x.district_name),
    datasets: [{
        label: `${billunitdistrict?.data?.length} bill records `,
        data: billunitdistrict?.data?.map(x => x.records),
        radius: colors.ChartAnimation.radius,
        animations:colors.ChartAnimation.animations,
        dropShadow:colors.ChartAnimation.dropShadow,
        backgroundColor: colors.allChartPageColors.darkcolor,
        borderColor:colors.allChartPageColors.darkcolor,
        borderWidth: colors.ChartAnimation.borderWidth
    },
    {
      label:`${billunitdistrict?.data?.length} billed amount`,
      type: 'doughnut',
      data:billunitdistrict?.data?.map(x => x.billed_amount),
      radius: colors.ChartAnimation.radius,
      animations:colors.ChartAnimation.animations,
      dropShadow:colors.ChartAnimation.dropShadow,
      backgroundColor: colors.allChartPageColors.darkcolor,
      borderColor:colors.allChartPageColors.darkcolor,
      borderWidth: colors.ChartAnimation.borderWidth
    },]
}


//bill unit by cluster----

// const billunitcluterData = async ()  => {
//     return await axios
//     .get(`${billunitcluterUrl}${billunitcluterdatapiker}`)
//     .then((response) => setBillunitcluter(response.data))
//     .catch((error)=> console.log(error))
//  }
//  var databuc = {
//     labels: billunitcluter?.data?.map(x => x.name),
//     datasets: [{
//         label: `${billunitcluter?.data?.length} bill amount `,
//         data: billunitcluter?.data?.map(x => x.b_amount),
//         radius: ['100%', '30%'],
//         animations: {
//             enabled: true,
//             easing: 'linear',
//             dynamicAnimation: {
//             speed: 1000
//             }
//         },
//         dropShadow: {
//         enabled: true,
//         opacity: 0.3,
//         blur: 5,
//         left: -7,
//         top: 22
//         },
//         backgroundColor: [
//             '#a8e063', '#000428','#004e92', '#389f99', '#ee1044', '#ff8f00'
//         ],
//         borderColor: [
//             // 'rgba(255, 99, 132, 1)',
//             // 'rgba(54, 162, 235, 1)',
//             // 'rgba(255, 206, 86, 1)',
//             // 'rgba(75, 192, 192, 1)',
//             // 'rgba(153, 102, 255, 1)',
//             // 'rgba(255, 159, 64, 1)'
//             '#a8e063', '#000428','#004e92', '#389f99', '#ee1044', '#ff8f00'
//         ],
//         borderWidth: 1
//     },
//     {
//       label:`${billunitcluter?.data?.length} records`,
//       type: 'line',
//       data:billunitcluter?.data?.map(x => x.records),
//       backgroundColor: [
//           '#389f96', '#000428','#004e92', '#389f99', '#ee1044', '#ff8f00'
//       ],
//       borderColor: [
//           // 'rgba(255, 99, 132, 1)',
//           // 'rgba(54, 162, 235, 1)',
//           // 'rgba(255, 206, 86, 1)',
//           // 'rgba(75, 192, 192, 1)',
//           // 'rgba(153, 102, 255, 1)',
//           // 'rgba(255, 159, 64, 1)'
//           '#389f96', '#000428','#004e92', '#389f99', '#ee1044', '#ff8f00'
//       ],
//     },]
// }
// var options = {
//     tooltip: {
//         show: true,
//         trigger: 'item',
//         backgroundColor: 'rgba(33,33,33,1)',
//         borderRadius:0,
//         padding:10,
//         formatter: "{b}: {c} ({d}%)",
//         textStyle: {
//             color: '#fff',
//             fontStyle: 'normal',
//             fontWeight: 'normal',
//             fontFamily: "'Open Sans', sans-serif",
//             fontSize: 12
//         }	
//     },
//     series: [{
//         selectedMode: 'single',
//         radius: ['100%', '30%'],
//         color: ['#689f38', '#38649f', '#389f99', '#ee1044', '#ff8f00'],
//         labelLine: {
//             normal: {
//                 show: false
//             }
//         },
//         data: data
//     }],
//     maintainAspectRatio: false,
//     animations: {
//         enabled: true,
//         easing: 'linear',
//         dynamicAnimation: {
//         speed: 1000
//         }
//     },
//     dropShadow: {
//     enabled: true,
//     opacity: 0.3,
//     blur: 5,
//     left: -7,
//     top: 22
//     },
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     },
//     lagend:{
//         labels:{
//         fontSize:26
//         }
//     }
// }
	return (
        <div className="content-wrapper">
            <div className="container-full">
                <div className="content-header">
                    <div className="d-flex align-items-center">
                        <div className="me-auto">
                            <h3 className="page-title">Analytics Management Dasboard Chart</h3>
                            {/* <div className="d-inline-block align-items-center">
                          <nav>
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                  <li className="breadcrumb-item" aria-current="page">Chart</li>
                                  <li className="breadcrumb-item active" aria-current="page">C3 Data Chart</li>
                              </ol>
                          </nav>
                      </div> */}
                        </div>

                    </div>
                </div>

                <section className="content">
                    <div className="row">
                        {/* <div className="col-12">
                      <div className="callout bg-info">
                          <h4>Nots!</h4>
                          <span className="badge badge-lg badge-danger text-wrap text-start">For more info please check the plugin's official <a className="m-link" href="https://c3js.org/" target="_blank">demos &amp; documentation</a></span>
                      </div>
                  </div> */}
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Collection By District</h4>
                              <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> districtcharData()}>submit</button>
                             
                             <input value={districtdatapiker} onChange={e => setDistrictdatapiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                 
                          </div>
                          <div className="box-body">
                          <Bar
                            data={datad}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Collection By Service Cluster 
                         <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> serviceClustercharData()}>submit</button></h4>
                             
                            <input value={serviceClusterdatapiker} onChange={e => setServiceClusterdatapiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                
                               
                         
                          </div>
                          <div className="box-body">
                          <Doughnut
                            data={datac}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Collection By Customers</h4>
                              <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> CategoryCustomerType()}>submit</button>
                             
                             <input value={categorycustomerdatapiker} onChange={e => setCategorycustomerDatepiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                          </div>
                          <div className="box-body">
                          <Bar
                            data={datacc}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Collection By Bill Type</h4>
                              <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> BilltypeData()}>submit</button>
                             
                             <input value={billtypedatapiker} onChange={e => setBilltypedatapiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                          </div>
                          <div className="box-body">
                          <Pie
                            data={databt}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-8 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Total billed units by feeder</h4>
                          </div>
                          <div className="box-body">
                              <Bar 
                               data={data}
                              />
                          </div>
                      </div>
                  </div>


                  {/* bill unit page is next one */}

                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Billed Units By District</h4>
                              <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> billunitdistricData()}>submit</button>
                             
                             <input value={billunitdistrictdatapiker} onChange={e => setBillunitdistrictDatepiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                 
                          </div>
                          <div className="box-body">
                          <Pie
                            data={databud}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Billed Units By Service Cluster </h4>
                         {/* <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> billunitcluterData()}>submit</button></h4>
                             
                            <input onChange={e => setBillunitcluterDatepiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                 */}
                               
                         
                          </div>
                          <div className="box-body">
                          <Doughnut
                            data={data}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Billed Units By Tariff</h4>
                              <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> CategoryCustomerType()}>submit</button>
                             
                             <input value={categorycustomerdatapiker} onChange={e => setCategorycustomerDatepiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                          </div>
                          <div className="box-body">
                          <Bar
                            data={datacc}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Total Customers By District</h4>
                              <button class="waves-effect waves-light btn btn-dark breadcrumb-item" style={{marginBottom: "0rem!important",marginTop: "4px",backgroundColor: "rgb(3 169 244)"}} type="button" onClick={()=> BilltypeData()}>submit</button>
                             
                             <input value={billtypedatapiker} onChange={e => setBilltypedatapiker(e.target.value)} className="form-control"  type="date" style={{color:"#b5b5c3", border:"1px solid #29354a"}}/>
                          </div>
                          <div className="box-body">
                          <Pie
                            data={databt}
                            options={options}
                            className="h-400"
                            />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-8 col-12">
                      <div className="box">
                          <div className="box-header with-border">
                              <h4 className="box-title">Total Customers By Feeder</h4>
                          </div>
                          <div className="box-body">
                              <Bar 
                               data={data}
                              />
                          </div>
                      </div>
                  </div>

              </div>
              
          </section>
          </div>
    </div>
	)
};

export default All_ChartBody;