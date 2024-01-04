import * as React from "react";
import {useEffect, useState} from "react";
import {
  Button,
  Form,
  Input,
  Space,
  Typography,
} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useUser} from "../../common/hooks/useUser";
import FullLayout from "../../common/layout/FullLayout";

const {Title} = Typography;

const Login = () => {
  const {user, onLogin} = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, []);

  const onFinish = async ({name}: any) => {
    setLoading(true);

    onLogin({name});

    setLoading(false);
    navigate("/app");
  }

  return (
    <FullLayout>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{rememberMe: true}}
        onFinish={onFinish}
      >
        <Title level={3}>Sign in</Title>
        <Form.Item
          name="name"
          rules={[{required: true, message: "Please input your name!"}]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </FullLayout>
  );
};

export default Login;
