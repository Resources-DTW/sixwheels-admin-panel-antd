import React, { useState, useEffect } from "react";
import { Button, Card, Form, Image, Input } from "antd";
import Logo from "../../assets/logo.png";
import BG from "../../assets/bg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function () {
        localStorage.clear();
        window.location.reload();
      }, 3000);
    }
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      password: "${label} enter min 5 characters!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const endpoint = "https://rich-bass-cummerbund.cyclic.app/api/loginadmin";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        // console.log(response.data);
        const user = response.data.userName;

        // Store the access token in localStorage
        localStorage.setItem("login", true);
        localStorage.setItem("user", user);
        navigate("/dashboard");
        setLogin(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLogin(false);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: -10,
      }}
    >
      <Card style={{ width: 500 }}>
        <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
          <Image src={Logo} width={120} preview={false} />
        </div>
        <p style={{ textAlign: "center" }}>
          {error !== "" ? (
            <div style={{ color: "#842029" }}>
              <b>{error}</b>
            </div>
          ) : (
            <div style={{ color: "#badbcc" }}>
              <b>{msg}</b>
            </div>
          )}
        </p>
        <Form
          name="normal_login"
          onFinish={handleLogin}
          validateMessages={validateMessages}
          style={{ marginLeft: 60, marginRight: 60, marginTop: 40 }}
          //   initialValues={{ remember: true }}
        >
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Enter your password" />
            {/* <a style={{ float: "right" }} className="login-form-forgot" href="">
              Forgot password
            </a> */}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default App;
