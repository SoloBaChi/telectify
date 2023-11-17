import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" h-16 w-screen bg-white flex items-center justify-between border-b-2">
      <Link href="/">
        <Image
          src="/home/telectify.png"
          alt="logo"
          width={40}
          height={40}
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
