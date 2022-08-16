import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [credential, setCredintal] = useState({});

  const handelchange = (e) => {
    setCredintal((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="d-flex justify-content-center login_area">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <h3 className="text-center text-uppercase mb-3">Login Your Account</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id="email" placeholder="name@example.com" onChange={handelchange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password" placeholder="Password" onChange={handelchange} />
            </Form.Group>
          </Form>
          <div className="text-center">
            <div className="d-grid">
              <Button variant="primary" className="btn ">
                Login
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
