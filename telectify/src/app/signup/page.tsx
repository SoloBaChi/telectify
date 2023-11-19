import React from "react";
import Link from "next/link";
import Nav from "../components/nav";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-300 border">
      <section className="w-4/5 lg:w-3/5 mx-auto">
        <form className="form-container">
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
                id="apartment"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
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
                id="address"
                className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus: placeholder:text-sm "
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
              />
            </div>
            <div className="form-field">
              <button className="text-center bg-blue-600 rounded-lg text-white w-full block pb-2 pt-2">
                Signup
              </button>
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
