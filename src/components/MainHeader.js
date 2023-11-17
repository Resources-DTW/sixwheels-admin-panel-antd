import { Button, Divider, Dropdown, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { LeftOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";

export default function MainHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/");
  };

  const user = localStorage.getItem("user");

  return (
    <Header
      className="header"
      style={{
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <GiHamburgerMenu /> : <LeftOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Dropdown
        // menu={{
        //   items,
        // }}
        dropdownRender={(menu) => (
          <div>
            {/* {React.cloneElement(menu)} */}
            <Divider
              style={{
                margin: 0,
              }}
            />
            <Space
              style={{
                padding: 8,
              }}
            >
              <Button type="primary" danger onClick={handleLogout}>
                Logout
              </Button>
            </Space>
          </div>
        )}
      >
        {/* <a onClick={(e) => e.preventDefault()}> */}
        <Space>
          {user}
          <DownOutlined />
        </Space>
        {/* </a> */}
      </Dropdown>
    </Header>
  );
}
