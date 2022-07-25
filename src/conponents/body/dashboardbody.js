import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJs, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { prepareValue } from "../utils";

ChartJs.register(
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	BarElement,
	ArcElement
)

const DashBoardBody = () => {
	const [datas, setDatas] = useState()
	const [dataa, setDataa] = useState()
	const [customer, setCustomer] = useState()
	const [suspended, setSuspended] = useState()
	const [feederchart, setFeederchart] = useState('')
	const [datapiker, setDatepiker] = useState()
	const [datapikers, setDatepikers] = useState()

	const [datapikerse, setDatepikerse] = useState()
	const [datapikerss, setDatepikerss] = useState()

	const [totalcollection, setTotalcollection] = useState(0)
	const [newcap, setNewcapData] = useState(0)



	var totalcolUrl = "http://188.166.99.136:7010/general/totalCollection/"
	var newcapUrl = "http://188.166.99.136:7010/general/newCaptures/"
	var baseUrl = "http://188.166.99.136:7010/general/totalPrepaid"
	var activePostpaidUrl = "http://188.166.99.136:7010/general/totalActivePostpaid"
	var customerUrl = "http://188.166.99.136:7010/general/totalCustomers"
	var suspendedPostpaid = "http://188.166.99.136:7010/general/totalSuspendedPostpaid"
	//    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

	useEffect(() => {
		init();
	}, [baseUrl])

	const init = async () => {
		Promise.all([
			fetchData(),
			fetchCoins(),
			customerData(),
			suspendedData(),
			charData(),
			totalcolData(),
			newcapData(),
		]);
	}

	const fetchCoins = async () => {
		await fetch(`${baseUrl}`, {
			method: 'Get',
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		}).then((response) => {
			response.json().then((json) => {
				// console.log(json)
				setDatas(json.data[0].total_customers)
			})
		}).catch(error => {
			console.log(error)
		})
	}
	const fetchData = async () => {
		await fetch(`${activePostpaidUrl}`, {
			method: 'Get',
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		}).then((response) => {
			response.json().then((json) => {
				// console.log(json)
				setDataa(json.data[0].total_customers)
			})
		}).catch(error => {
			console.log(error)
		})
	}
	const customerData = async () => {
		await fetch(`${customerUrl}`, {
			method: 'Get',
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		}).then((response) => {
			response.json().then((json) => {
				// console.log(json)
				setCustomer(json.data[0].total_customers)
			})
		}).catch(error => {
			console.log(error)
		})
	}
	const suspendedData = async () => {
		await fetch(`${suspendedPostpaid}`, {
			method: 'Get',
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		}).then((response) => {
			response.json().then((json) => {
				// console.log(json)
				setSuspended(json.data[0].total_customers)
			})
		}).catch(error => {
			console.log(error)
		})
	};
	const totalcolData = async () => {
		await fetch(`${totalcolUrl}${datapiker}/${datapikers}`, {
			method: 'Get',
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		}).then((response) => {
			response.json().then((json) => {
				// console.log(json)
				setTotalcollection(json.data[0])
			})
		}).catch(error => {
			console.log(error)
		})
	}

	const newcapData = async () => {
		await fetch(`${newcapUrl}${datapikerse}/${datapikerss}`, {
			method: 'Get',
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		}).then((response) => {
			response.json().then((json) => {
				// console.log(json)
				setNewcapData(json.data[0])
			})
		}).catch(error => {
			console.log(error)
		})
	}

	const charData = async () => {
		return await axios
			.get("http://188.166.99.136:7010/general/totalBilledUnitsByFeeder")
			.then((response) => setFeederchart(response.data))
			.catch((error) => console.log(error))
	}
	// var baseUrl = "http://188.166.99.136:7010/general/totalPrepaid"
	// // var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
	// useEffect(() => {
	//     const tatalprepaid = async () => {
	//        await fetch("http://188.166.99.136:7010/general/totalPrepaid")
	//        .then((response) => response.json()).then((json) => {
	//             console.log(json);
	//             setDatas(json);
	//        }).catch(error => {
	//           console.log(error)
	//        });
	//     };
	//     tatalprepaid()
	//  },[baseUrl])

	// const tatalprepaid = async () => {
	// return await axios
	// .get('http://188.166.99.136:7010/general/totalPrepaid')
	// .then((response) => setDatas(response.data[0].total_customers))
	// .catch((err) => console.log(err));
	//     await fetch("http://188.166.99.136:7010/general/totalPrepaid",{
	//         method: "Get",
	//     }).then((response)=>{
	//         response.json().then((json) => {
	//            // console.log(json)
	//            setDatas(json.data);
	//            setDatas('');
	//         })
	//      }).catch(error => {
	//         console.log(error)
	//      })
	//      tatalprepaid()
	// };
	var data = {
		labels: feederchart?.data?.map(x => x.feeder),
		datasets: [{
			label: `${feederchart?.data?.length} Available`,
			data: feederchart?.data?.map(x => x.billed_amount),
			radius: ['100%', '30%'],
			animations: {
				enabled: true,
				easing: 'linear',
				dynamicAnimation: {
					speed: 1000
				}
			},
			dropShadow: {
				enabled: true,
				opacity: 0.3,
				blur: 5,
				left: -7,
				top: 22
			},
			backgroundColor: [
				'#a8e063', '#000428', '#004e92', '#389f99', '#ee1044', '#ff8f00'
			],
			borderColor: [
				// 'rgba(255, 99, 132, 1)',
				// 'rgba(54, 162, 235, 1)',
				// 'rgba(255, 206, 86, 1)',
				// 'rgba(75, 192, 192, 1)',
				// 'rgba(153, 102, 255, 1)',
				// 'rgba(255, 159, 64, 1)'
				'#a8e063', '#000428', '#004e92', '#389f99', '#ee1044', '#ff8f00'
			],
			borderWidth: 1
		}]
	}
	var options = {
		tooltip: {
			show: true,
			trigger: 'item',
			backgroundColor: 'rgba(33,33,33,1)',
			borderRadius: 0,
			padding: 10,
			formatter: "{b}: {c} ({d}%)",
			textStyle: {
				color: '#fff',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontFamily: "'Open Sans', sans-serif",
				fontSize: 12
			}
		},
		series: [{
			selectedMode: 'single',
			radius: ['100%', '30%'],
			color: ['#689f38', '#38649f', '#389f99', '#ee1044', '#ff8f00'],
			labelLine: {
				normal: {
					show: false
				}
			},
			data: data
		}],
		maintainAspectRatio: false,
		animations: {
			enabled: true,
			easing: 'linear',
			dynamicAnimation: {
				speed: 1000
			}
		},
		dropShadow: {
			enabled: true,
			opacity: 0.3,
			blur: 5,
			left: -7,
			top: 22
		},
		scales: {
			y: {
				beginAtZero: true
			}
		},
		lagend: {
			labels: {
				fontSize: 26
			}
		}
	}
	return (
		<div className="content-wrapper">
			<div className="container-full">

				<section className="content">
					<div className="row">
						<div className="col-xl-3 col-md-6 col-12">
							<div className="box box-body" style={{ backgroundColor: "rgb(12 26 50)" }}>
								<h5 className="mb-0">
									<span className="text-uppercase">Total Prepaid</span>
									<span className="float-end"><a className="btn btn-rounded btn-white btn-outline" href="#">View</a></span>
									<p className="fs-26" style={{ marginTop: '10px' }}>{datas}</p>

								</h5>
								<br />
								<h5 className="mb-0">
									<span className="text-uppercase">Total Active Postpaid</span>
									<p className="fs-26" style={{ marginTop: '10px' }}>{dataa}</p>
									{/* <div id="progress1"></div> */}

								</h5>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-12">
							<div className="box box-body" style={{ backgroundColor: "rgb(12 26 50)" }}>
								<h5 className="mb-0">
									<span className="text-uppercase">Total Customers</span>
									<span className="float-end"><a className="btn btn-rounded btn-white btn-outline" href="#">View</a></span>
									<p className="fs-26" style={{ marginTop: '10px' }}>{customer}</p>

								</h5>
								<br />
								<h5 className="mb-0">
									<span className="text-uppercase">Suspended Postpaid Cus..</span>
									<p className="fs-26" style={{ marginTop: '10px' }}>{suspended}</p>
									{/* <div id="progress1"></div> */}

								</h5>
							</div>
						</div>

						<div className="col-xl-3 col-md-6 col-12">
							<div className="box box-body" style={{ backgroundColor: "rgb(32 62 123)" }}>
								<h5 className="mb-0">
									<span className="text-uppercase">Collection</span>

									<div class="btn-group" style={{ marginLeft: "20px" }}>
										<span className="float-end">
											<a type="button" className="btn btn-rounded btn-white btn-outline dropdown-toggle" data-bs-toggle="dropdown" href="#">Pick a Date</a>
											<div class="dropdown-menu dropdown-menu-end">
												<label style={{ color: "#b5b5c3", marginLeft: "10px" }}>Start Date</label>
												<input onChange={e => setDatepiker(e.target.value)} className="form-control" type="date" style={{ color: "#b5b5c3", border: "1px solid #29354a" }} />
												<label style={{ color: "#b5b5c3", marginLeft: "10px" }}>End Date</label>
												<input onChange={e => setDatepikers(e.target.value)} className="form-control" type="date" style={{ color: "#b5b5c3", border: "1px solid #29354a" }} />
												<center><button class="waves-effect waves-light btn btn-dark" style={{ marginBottom: "0rem!important", marginTop: "4px", backgroundColor: "#0c1a32" }} type="button" onClick={() => totalcolData()}>submit</button></center>
											</div>

										</span>
									</div>

									<p className="fs-26" style={{ marginTop: '10px' }}>{totalcollection.collection}</p>

								</h5>
								<br />
								<h5 className="mb-0">
									<span className="text-uppercase">Total Collection</span>
									<p className="fs-26" style={{ marginTop: '10px' }}>{totalcollection.total_collection}</p>
									{/* <div id="progress1"></div> */}

								</h5>
							</div>
						</div>


						<div className="col-xl-3 col-md-6 col-12">

							<div className="box box-body" style={{ backgroundColor: "rgb(32 62 123)" }}>
								<h5 className="mb-0">
									<span className="text-uppercase">Total Customers</span>

									<div class="btn-group" style={{ marginLeft: "2px" }}>
										<span className="float-end">
											<a type="button" className="btn btn-rounded btn-white btn-outline dropdown-toggle" data-bs-toggle="dropdown" href="#">Pick Date</a>
											<div class="dropdown-menu dropdown-menu-end">
												<label style={{ color: "#b5b5c3", marginLeft: "10px" }}>Start Date</label>
												<input onChange={e => setDatepikerse(e.target.value)} className="form-control" type="date" style={{ color: "#b5b5c3", border: "1px solid #29354a" }} />
												<label style={{ color: "#b5b5c3", marginLeft: "10px" }}>End Date</label>
												<input onChange={e => setDatepikerss(e.target.value)} className="form-control" type="date" style={{ color: "#b5b5c3", border: "1px solid #29354a" }} />
												<center><button class="waves-effect waves-light btn btn-dark" style={{ marginBottom: "0rem!important", marginTop: "4px", backgroundColor: "#0c1a32" }} type="button" onClick={() => newcapData()}>submit</button></center>
											</div>

										</span>
									</div>
									<br />
									<p className="fs-26" style={{ marginTop: '10px' }}>{newcap.total_customers}</p>

								</h5>
								{/* <br />
                      <h5 className="mb-0">
					  <span className="text-uppercase">Total Collection</span>
					  <p className="fs-26" style={{marginTop:'10px'}}>{totalcollection.total_collection}</p>
					  {/* <div id="progress1"></div>
					  
                      </h5> */}
							</div>
						</div>

						<div className="col-12 col-xl-8">
							<div className="box">
								<div className="box-header with-border">
									<h4 className="box-title">Total billed units by feeder Chart.</h4>
								</div>
								<div className="box-body">
									<div className="chart">
										<Bar
											data={data}
											options={options}
											className="h-400"
										/>
										{/* <div id="columnchart1"> </div>	 */}
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-xl-4">
							<div className="box">
								<div className="box-header with-border">
									<h4 className="box-title">Total billed units by feeder Table.</h4>
								</div>
								<div class="box-body">
									<div class="table-responsive">
										<table class="table table-hover mb-0">
											{feederchart?.data?.length === 0 ? (
												<tbody style={{ color: '#fff', alignItem: 'center', textAlign: 'center', }}>

													<tr style={{ color: '#fff', alignItem: 'center', textAlign: 'center', }}>
														<td style={{ color: '#fff', alignItem: 'center', textAlign: 'center', }}>No Data Found..</td>
													</tr>
												</tbody>
												//   <tbody>
												// 	<tr>
												// 	  <th scope="col">#</th>
												//       <td >Larry the Bird</td>
												// 	  <td>@twitter</td>
												// 	</tr>
												//   </tbody>
											) : (
												feederchart?.data?.map((item, index) => (
													<tbody key={index}>
														<tr>
															<th scope="row">{index + 1}</th>
															<td >{item.feeder}</td>
															<td>{prepareValue('currency', item.billed_amount)}</td>
														</tr>
													</tbody>
												))
											)}
										</table>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="col-12 col-xl-8">
				  <div className="box">
					<div className="box-header with-border">
					  <h4 className="box-title">Revenue</h4>

					  <ul className="box-controls pull-right">
						<li><a className="box-btn-close" href="#"></a></li>
						<li><a className="box-btn-slide" href="#"></a></li>	
						<li><a className="box-btn-fullscreen" href="#"></a></li>
					  </ul>
					</div>
					<div className="box-body chart-responsive">
						<div className="chart">
						   <div className="ct-chart-6 h-350"></div>	
						</div>	
					</div>
				  </div>
				  <div className="box">
						<div className="box-header with-border">
						  <h4 className="box-title">Invoice List</h4>
						</div>
					<div className="box-body">
					  <div className="table-responsive">
						<table id="invoice-list" className="table table-hover no-wrap" data-page-size="10">
							<thead>
								<tr>
									<th>#Invoice</th>
									<th>Description</th>
									<th>Amount</th>
									<th>Status</th>
									<th>Issue</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>#5010</td>
									<td>Lorem Ipsum</td>
									<td>$548</td>
									<td><span className="label label-danger">Unpaid</span> </td>
									<td>15-Jan</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5011</td>
									<td>Lorem Ipsum</td>
									<td>$548</td>
									<td><span className="label label-success">Paid</span> </td>
									<td>15-Sep</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5012</td>
									<td>Lorem Ipsum</td>
									<td>$9658</td>
									<td><span className="label label-danger">Unpaid</span> </td>
									<td>15-Jun</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5013</td>
									<td>Lorem Ipsum</td>
									<td>$4587</td>
									<td><span className="label label-success">Paid</span> </td>
									<td>15-May</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5014</td>
									<td>Lorem Ipsum</td>
									<td>$856</td>
									<td><span className="label label-danger">Unpaid</span> </td>
									<td>15-Mar</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5015</td>
									<td>Lorem Ipsum</td>
									<td>$956</td>
									<td><span className="label label-danger">Unpaid</span> </td>
									<td>15-Aug</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5016</td>
									<td>Lorem Ipsum</td>
									<td>$745</td>
									<td><span className="label label-success">Paid</span> </td>
									<td>15-Aug</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5010</td>
									<td>Lorem Ipsum</td>
									<td>$548</td>
									<td><span className="label label-danger">Unpaid</span> </td>
									<td>15-Jan</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5011</td>
									<td>Lorem Ipsum</td>
									<td>$548</td>
									<td><span className="label label-success">Paid</span> </td>
									<td>15-Sep</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5012</td>
									<td>Lorem Ipsum</td>
									<td>$9658</td>
									<td><span className="label label-danger">Unpaid</span> </td>
									<td>15-Jun</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>#5013</td>
									<td>Lorem Ipsum</td>
									<td>$4587</td>
									<td><span className="label label-success">Paid</span> </td>
									<td>15-May</td>
									<td>
										<a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					</div>
				
				  </div>
				 

				</div> */}

						{/* <div className="col-12 col-xl-4"> */}
						{/* <div className="box">
						<div className="box-header with-border">
						  <h4 className="box-title">Top 5 Products</h4>
							<ul className="box-controls pull-right">
							  <li><a className="box-btn-close" href="#"></a></li>
							  <li><a className="box-btn-slide" href="#"></a></li>	
							  <li><a className="box-btn-fullscreen" href="#"></a></li>
							</ul>
						</div>
						<div className="box-body">			              
						  <div className="flexbox align-items-center">
							 <div><div id="e_chart_3" className="w-200" style={{height:"275px"}}></div></div>
							 <div>
								<ul className="list-inline">
								  <li className="mb-5">
									  <span className="badge badge-dot badge-lg me-1 badge-primary"></span>
									  <span>iPhone X</span>
								  </li>

								  <li className="mb-5">
									  <span className="badge badge-dot badge-lg me-1 badge-info"></span>
									  <span>Mi tv4 55"</span>
								  </li>

								  <li className="mb-5">
									  <span className="badge badge-dot badge-lg me-1 badge-success"></span>
									  <span>S9 plus</span>
								  </li>

								  <li className="mb-5">
									  <span className="badge badge-dot badge-lg me-1 badge-danger"></span>
									  <span>Pixal 2</span>
								  </li>

								  <li className="mb-5">
									  <span className="badge badge-dot badge-lg me-1 badge-warning"></span>
									  <span>Macbook Air</span>
								  </li>							  
								</ul> 
							 </div>
						  </div>
						</div>
						
					  </div> */}

						{/* <div className="box box-body">
					  <div className="flexbox">
						<h6 className="text-uppercase">Analysis</h6>
						<h6><i className="ion-android-arrow-dropup text-success fs-18 me-1"></i> %20</h6>
					  </div>

					  <ul className="list-inline my-10">
						<li className="px-10">
						  <h6 className="mb-0 text-bold">8952</h6>
						  <small>Abu Dhabi</small>
						</li>

						<li className="br-1 bl-1 px-10">
						  <h6 className="mb-0 text-bold">7458</h6>
						  <small>Miami</small>
						</li>

						<li className="px-10">
						  <h6 className="mb-0 text-bold">3254</h6>
						  <small>London</small>
						</li>
					  </ul>

					  <div id="linearea">1,3,5,4,6,8,7,9,7,8,10,16,14,10</div>
					 </div>	

					  <div className="box">
						<div className="box-body">
							<div className="d-flex flex-row">
								<div className=""><img src="../images/avatar/1.jpg" alt="user" className="rounded-circle" width="100" /></div>
								<div className="ps-20">
									<h3>Johen Doe</h3>
									<h6>Web Designer</h6>
									<button className="btn btn-success"><i className="ti-plus"></i> Follow</button>
								</div>
							</div>
							<div className="row mt-40">
								<div className="col b-r text-center">
									<h2 className="font-light">1254</h2>
									<h6>Photos</h6></div>
								<div className="col b-r text-center">
									<h2 className="font-light">1254</h2>
									<h6>Videos</h6></div>
								<div className="col text-center">
									<h2 className="font-light">1587</h2>
									<h6>Tasks</h6></div>
							</div>
						</div>
						<div className="box-body">
							<p className="text-center aboutscroll">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae.
							</p>
							<ul className="list-inline text-center">
								<li><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Website"><i className="fa fa-globe fs-20"></i></a></li>
								<li><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="twitter"><i className="fa fa-twitter fs-20"></i></a></li>
								<li><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Facebook"><i className="fa fa-facebook-square fs-20"></i></a></li>
							</ul>
						</div>
					    </div> */}

						{/* <div className="info-box bg-gradient-purple text-white">
                            <span className="info-box-icon rounded"><i className="ion ion-cash"></i></span>

                            <div className="info-box-content">
                            <span className="info-box-number">51,642</span>
                            <span className="info-box-text">ORDER RECEIVED</span>
                            </div>
                            
                        </div> */}


						{/* </div> */}


					</div>
				</section>

			</div>
		</div>
	)
};

export default DashBoardBody;