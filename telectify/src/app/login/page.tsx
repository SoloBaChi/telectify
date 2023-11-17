"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the Next.js router
import supabase from "../client";
import Head from "next/head";
import Nav from "../components/nav";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  const handleSignIn = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert(error.message);
      } else {
        alert("Signed in successfully");
        // Redirect the user to the dashboard after successful sign-in
        router.push("/dashboard");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 border">
      <Nav />
      <section className="w-4/5 lg:w-3/5 mx-auto">
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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="form-field mb-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-900 font-bold"
            >
              House ID
            </label>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-white-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>

          <button
            className="text-center bg-blue-600 rounded-lg text-white w-full block pb-2 pt-2"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </section>
    </div>
  );
}
