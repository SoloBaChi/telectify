"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState({
    houseAddress: "",
    uniqueId: "",
  });

  const handleChange = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle error message
  const handleErrorMessage = (err) => {
    const error = err.message[0].msg || err.message;
    setErrorMessage(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      houseAddress: login.houseAddress.toLowerCase(),
      uniqueId: login.uniqueId,
    };

    // turn on loading action
    setLoading(true);

    // make a post request using fetch API
    try {
      const url = `https://telectify-api.vercel.app/auth/login`;

      let params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch(url, params);

      const resData = await res.json();
      // call handle error message
      handleErrorMessage(resData);
      console.log(resData);

      setLogin((prev) => {
        return {
          ...prev,
          ...resData,
        };
      });

      // turn off the laoding action
      setLoading(false);

      //catch any error
    } catch (err) {
      console.log(err);

      // turn off loading event
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-300 border">
      <section className="w-4/5 lg:w-3/5 mx-auto">
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="mb-3 text-2xl font-bold text-left mt-8">
            Login to your account
          </h3>
          <span className="mb-4 block">Enter your details correctly</span>
          <div className="form-body">
            <div className="form-field mb-8">
              <label
                htmlFor="address"
                className="block mb-2 text-sm text-gray-900 font-bold"
              >
                House Address
              </label>
              <input
                type="text"
                placeholder="N0 1 ziks drive"
                id="address"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                name="houseAddress"
                value={login.houseAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-field mb-8">
              <label
                htmlFor="uniqueId"
                className="block mb-2 text-sm text-gray-900 font-bold"
              >
                House ID
              </label>
              <input
                type="text"
                placeholder="Enter your unique id"
                id="uniqueId"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="uniqueId"
                value={login.uniqueId}
                onChange={handleChange}
              />
            </div>
            {/* return error message*/}
            {login.status === "success" ? (
              router.push("/dashboard")
            ) : (
              <span style={{ color: "red" }}>{errorMessage}</span>
            )}
            <div className="form-field">
              <button className="text-center bg-blue-600 rounded-lg text-white w-full block pb-2 pt-2">
                Login
              </button>
              {loading ? (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              ) : null}
            </div>
            <p className="text-center text-sm font-semibold mt-4">
              Do not have an account{" "}
              <Link className="text-blue-600" href="/signup">
                {" "}
                Signup
              </Link>{" "}
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
