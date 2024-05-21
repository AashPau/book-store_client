import { Button, Col, Form, Row } from "react-bootstrap";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../components/customInput/CustomInput";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { fetchUserInfo, logInUser } from "../../features/users/userAxios";
import { getUserObj } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

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
  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Botn field must be filled");
    }
    const { status, message, tokens } = await logInUser({
      email,
      password,
    });
    toast[status](message);

    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    if (status === "success") {
      dispatch(getUserObj());
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
