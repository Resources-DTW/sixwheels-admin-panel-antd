import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SubAdmin from "../pages/Sub Admin";
import SubAdminPrivileges from "../pages/Sub Admin Privileges";
import ServiceProviders from "../pages/Customer Complaints";
import Drivers from "../pages/Drivers";
import Customers from "../pages/Customers";
import CustomerComplatints from "../pages/Customer Complaints";
import LiveOrders from "../pages/Live Orders";
import OrderReports from "../pages/Order Reports";
import Promotions from "../pages/Promotions";
import PaymentMethod from "../pages/Payment Method";
import ReviewPage from "../pages/Review Page";
import OrderSettings from "../pages/Order Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/sub_admin" element={<SubAdmin />}></Route>
      <Route
        path="/sub_admin_privileges"
        element={<SubAdminPrivileges />}
      ></Route>
      <Route path="/service_providers" element={<ServiceProviders />}></Route>
      <Route path="/drivers" element={<Drivers />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route
        path="/customer_complaints"
        element={<CustomerComplatints />}
      ></Route>
      <Route path="/live_orders" element={<LiveOrders />}></Route>
      <Route path="/order_reports" element={<OrderReports />}></Route>
      <Route path="/promotions" element={<Promotions />}></Route>
      <Route path="/payment_method" element={<PaymentMethod />}></Route>
      <Route path="/review_page" element={<ReviewPage />}></Route>
      <Route path="/order_settings" element={<OrderSettings />}></Route>
    </Routes>
  );
}

export default AppRoutes;
