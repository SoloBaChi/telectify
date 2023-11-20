"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signup, setSignup] = useState({
    nameOfApartment: "",
    houseAddress: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle error message
  // Handle error message
  const handleErrorMessage = (err) => {
    const error = err.message[0].msg || err.message;
    setErrorMessage(error);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      nameOfApartment: signup.nameOfApartment,
      houseAddress: signup.houseAddress,
      email: signup.email,
    };

    // turn on loading action
    setLoading(true);

    // make a post request using fetch API
    try {
      const url = `https://telectify-api.vercel.app/auth/signup`;

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

      setSignup((prev) => {
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
      <header className="w-4/5 lg:w-3/5 mx-auto py-4">
        <div className="item-one">
          <Link href="/">
            <Image
              src="/assets/images/telectify-logo.svg"
              alt="telectify logo"
              width={45}
              height={45}
              priority
            />
          </Link>
        </div>
      </header>
      <section className="w-4/5 lg:w-3/5 mx-auto">
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="mb-3 text-2xl font-bold text-left mt-8">
            Create an account
          </h3>
          <span className="mb-4 block">Let us get you started</span>
          <div className="form-body">
            <div className="form-field mb-8">
              <label
                htmlFor="apartment"
                className="block mb-2 text-sm text-gray-900 font-bold"
              >
                Apartment
              </label>
              <input
                type="text"
                placeholder="Apartment Name"
                id="nameOfApartment"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
                name="nameOfApartment"
                value={signup.nameOfApartment}
                onChange={handleChange}
              />
            </div>
            <div className="form-field mb-8">
              <label
                htmlFor="address"
                className="block mb-2 text-sm text-gray-900 font-bold"
              >
                Address
              </label>
              <input
                type="text"
                placeholder="N0 1 ziks drive"
                id="houseAddress"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus: placeholder:text-sm "
                name="houseAddress"
                value={signup.houseAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-field mb-8">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-900 font-bold"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="@yahoo.com"
                id="email"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus: placeholder:text-sm"
                name="email"
                value={signup.email}
                onChange={handleChange}
              />
            </div>
            {/* return error message*/}
            {signup.status === "success" ? (
              <span style={{ color: "green" }}>
                Account created Successfully!
                {""}
                <Link href="/login" style={{ color: "blue", display: "block" }}>
                  Please Login to continue{" "}
                </Link>
              </span>
            ) : (
              <span style={{ color: "red" }}>{errorMessage}</span>
            )}

            <div className="form-field">
              <button className="text-center bg-blue-600 rounded-lg text-white w-full block pb-2 pt-2">
                Signup
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
            <p className="text-center mt-4 text-sm font-semibold">
              Already not have an account{" "}
              <Link className="text-blue-600" href="/login">
                {" "}
                Login
              </Link>{" "}
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
