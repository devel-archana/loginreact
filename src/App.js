import {
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Input, message, Typography } from "antd";
import "./App.css";

function App() {
  const login = () => {
    message.success("login Successful");
  };

  return (
    <div className="appBg">
      <Form className="loginForm" onFinsh={login}>
        <Typography.Title> Welcome Back!</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "please enter valid email",
            },
          ]}
          label="Email"
          name={"myEmail"}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,

              message: "please enter valid Password",
            },
          ]}
          label="Password"
          name={"myPassword"}
        >
          <Input placeholder="Enter your Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: "black" }}> or login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined
            className="SocialIcon"
            onClick={login}
            style={{ color: "red" }}
          />
          <FacebookOutlined
            className="SocialIcon"
            onClick={login}
            style={{ color: "blue" }}
          />
          <TwitterOutlined
            className="SocialIcon"
            onClick={login}
            style={{ color: "cyan" }}
          />
        </div>
      </Form>
    </div>
  );
}

export default App;
