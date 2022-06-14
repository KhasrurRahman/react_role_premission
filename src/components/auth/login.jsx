import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center login_area">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <h3 className="text-center text-uppercase mb-3">Login Your Account</h3>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
