import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Login from "./pages/login/Login";
import Protected from "./components/Protected";
import SubAdmin from "./pages/Sub Admin";
import SubAdminPrivileges from "./pages/Sub Admin Privileges";
import ServiceProviders from "./pages/Service Providers";
import Drivers from "./pages/Drivers";
import CustomerComplatints from "./pages/Customer Complaints";
import Customer from "./pages/Customers";
import LiveOrders from "./pages/Live Orders";
import OrderReports from "./pages/Order Reports";
import Promotions from "./pages/Promotions";
import PaymentMethod from "./pages/Payment Method";
import ReviewPage from "./pages/Review Page";
import OrderSettings from "./pages/Order Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#35A8DF",
          },
        }}
      >
        <Routes>
          <Route path="/admin" element={<Login />} />
          <Route path="/" element={<Protected Component={App} />} />
          <Route
            path="/sub_admin"
            element={<Protected Component={SubAdmin} />}
          ></Route>
          <Route
            path="/sub_admin_privileges"
            element={<Protected Component={SubAdminPrivileges} />}
          ></Route>
          <Route
            path="/service_providers"
            element={<Protected Component={ServiceProviders} />}
          ></Route>
          <Route
            path="/drivers"
            element={<Protected Component={Drivers} />}
          ></Route>
          <Route
            path="/customers"
            element={<Protected Component={Customer} />}
          ></Route>
          <Route
            path="/customer_complaints"
            element={<Protected Component={CustomerComplatints} />}
          ></Route>
          <Route
            path="/live_orders"
            element={<Protected Component={LiveOrders} />}
          ></Route>
          <Route
            path="/order_reports"
            element={<Protected Component={OrderReports} />}
          ></Route>
          <Route
            path="/promotions"
            element={<Protected Component={Promotions} />}
          ></Route>
          <Route
            path="/payment_method"
            element={<Protected Component={PaymentMethod} />}
          ></Route>
          <Route
            path="/review_page"
            element={<Protected Component={ReviewPage} />}
          ></Route>
          <Route
            path="/order_settings"
            element={<Protected Component={OrderSettings} />}
          ></Route>
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
