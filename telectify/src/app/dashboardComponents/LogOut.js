import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogOut() {
  const [logOut, setLogOUt] = useState(false);
  const router = useRouter(null);

  //   useEffect(() => {
  function handleLogOut() {
    localStorage.removeItem("myToken");
    router.push("/login");
  }
  // handleLogOut();
  //   }, [logOut]);
  return (
    <div
      className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F] mb-[_16px] block p-[_0.5rem]"
      onClick={handleLogOut}
    >
      <svg
        width="23"
        height="21"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.25 6V3.75C9.25 3.15326 9.48705 2.58097 9.90901 2.15901C10.331 1.73705 10.9033 1.5 11.5 1.5H19.375C19.9717 1.5 20.544 1.73705 20.966 2.15901C21.3879 2.58097 21.625 3.15326 21.625 3.75V17.25C21.625 17.8467 21.3879 18.419 20.966 18.841C20.544 19.2629 19.9717 19.5 19.375 19.5H11.5C10.9033 19.5 10.331 19.2629 9.90901 18.841C9.48705 18.419 9.25 17.8467 9.25 17.25V15"
          stroke="#1E1E1E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.875 10.5H1.375M1.375 10.5L4.75 7.125M1.375 10.5L4.75 13.875"
          stroke="#1E1E1E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
        Logout
      </p>
    </div>
  );
}
