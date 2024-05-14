import { Button, Col, Form, Row } from "react-bootstrap";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../components/customInput/CustomInput";
import { useState } from "react";

const inputs = [
  {
    label: "First Name",
    name: "name",
    type: "text",
    required: true,
    placeholder: "Sam",
  },
  {
    label: "Last Name",
    name: "lname",
    type: "text",
    required: true,
    placeholder: "Sam",
  },
  {
    label: "Phone",
    name: "phone",
    type: "number",
    required: false,
    placeholder: "045876953",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "lala@lala.lala",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
    placeholder: "******",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    required: true,
    placeholder: "*******",
  },
];
const SignIn = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setError("");

    // if (name === "confirmPassword") {
    //   form.password !== value && setError("Password must match");

    //   form.password.length < 6 &&
    //     setError("Passwords must be longer than 6 characters");

    //   !/[!@#$%^&*()_]/i.test(form.password) &&
    //     setError("Must include at least one of special characters");

    //   !/[a-z]/.test(form.password) &&
    //     setError("Must have atleast 1 lower case");
    //   !/[a-z]/.test(form.password) &&
    //     setError("Must have atleast 1 upper case");
    //   !/[a-z]/.test(form.password) && setError("Must have atleast 1 number");
    // }

    if (name === "password" && form.confirmPassword) {
      form.confirmPassword !== value && setError("Passwords donot match");
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    console.log(rest);
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
            <h1>Join the library community</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ))}
            {error && (
              <div className="my-3">
                <ul>
                  <li className="text-danger fw-bolderS">{error}</li>
                </ul>
              </div>
            )}

            <div className="d-grid">
              {error ? (
                <Button disabled={error} type="none" className="btn-secondary">
                  Submit
                </Button>
              ) : (
                <Button disabled={error} type="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignIn;
