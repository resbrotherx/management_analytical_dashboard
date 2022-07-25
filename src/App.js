import './App.css';
import DashBoard from './conponents/screen/dashboard';
import Tarrif from './conponents/bill_unit_page/bill_by_tarrif';
import BillCluster from './conponents/bill_unit_page/bill_unit_cluster';
import BillDistrict from './conponents/bill_unit_page/bill_unit_district';
import ArreasDistrict from './conponents/arreas_page/arrears_district';
import ArreasTarrif from './conponents/arreas_page/arreas_tarrif';
import ArreasCluster from './conponents/arreas_page/arrears_cluster';
import CustomerTarrif from './conponents/customer_page/customer_tarrif';
import CustomerFeeder from './conponents/customer_page/customer_feeder';
import CustomerDistrict from './conponents/customer_page/customer_district';
import BillType from './conponents/payment_page/bill_type';
import Chartjs from './conponents/screen/chart'
 import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CustomerType from './conponents/payment_page/category_customer';
import ServiceCluster from './conponents/payment_page/service_cluster';
import District from './conponents/payment_page/district';

function App() {
  return ( 
     <>
    {/* <BillType /> */}
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}  />
        <Route path="/bill-type" element={<BillType />} />
        <Route path="/customer-type" element={<CustomerType />} />
        <Route path="/service-cluster" element={<ServiceCluster />} />
        <Route path="/district" element={<District />} />
        <Route path="/customer-district" element={<CustomerDistrict />} />
        <Route path="/customer-tarrif" element={<CustomerTarrif />} />
        <Route path="/bill-tarrif" element={<Tarrif />} />
        <Route path="/bill-cluster" element={<BillCluster />} />
        <Route path="/bill-district" element={<BillDistrict />} />
        <Route path="/arreas-district" element={<ArreasDistrict />} />
        <Route path="/arreas-tarrif" element={<ArreasTarrif />} />
        <Route path="/arreas-cluster" element={<ArreasCluster />} />
        <Route path="/customer-feeder" element={<CustomerFeeder />} />
        <Route path="/all-chart" element={<Chartjs />} />
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404! Are you lost?</p>
              </main>
            }
          />
      </Routes>
        
    </BrowserRouter>
  </>
  );
}

export default App;
