import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className=" h-16 w-screen bg-white flex items-center justify-between border-b-2">
      <Link href="/">
        <Image
          src="/home/telectify.png"
          alt="logo"
          width={45}
          height={45}
          className="ml-4"
        />
      </Link>
      <div className="btn">
        <Link href="/signup">
          <button className="home-button register">Register</button>
        </Link>
        <Link href="/login">
          <button className="home-button login">Login</button>
        </Link>
      </div>
    </nav>
  );
}
