import React from "react";
import RegisterForm from "../components/Form";

const Register = ({ loading, setLoading }) => {
  return (
    <div>
      <RegisterForm loading={loading} setLoading={setLoading} />
    </div>
  );
};

export default Register;
