import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/Auth/LoginForm";
import Footer from "../components/Footer";
import RegisterForm from "../components/Auth/RegisterForm";

const Register = () => {
  return (
    <div>
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
