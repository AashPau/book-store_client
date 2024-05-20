import { Button, Col, Form, Row } from "react-bootstrap";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../components/customInput/CustomInput";
import { useRef } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "lala@lala.lala",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "******",
      inputRef: passRef,
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Botn field must be filled");
    }
  };
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            onSubmit={handleOnSubmit}
            className="shadow-lg border p-5 rounded  m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Welcome back!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignIn;
