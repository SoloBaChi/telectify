"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NotificationIcon from "../dashboardComponents/page";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa6";
import Info from "../dashboardComponents/Info";

function Dashboard() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState({});

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  // Get the bearer token
  const token = localStorage.getItem("myToken");

  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    try {
      const url = `https://telectify-api.vercel.app/api/v1/tenant/profile`;
      const options = {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      };

      const res = await fetch(url, options);
      const result = await res.json();

      const data = await result.data;
      console.log(data);

      // update the user state
      await setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return <></>;
}

export default Dashboard;
