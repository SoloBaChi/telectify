"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BarChart from "../components/barChart";
import BarChart2 from "../components/barChart2";
import { useState } from "react";
// import { GiHamburger } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="h-screen py-4 lg:px-8 bg-[_#f2f2f2]">
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
        <FaHamburger
          onClick={() => setOpen((prev) => !prev)}
          style={{ color: "black", marginRight: "1rem" }}
        />
      </nav>
      <div className="h-full grid-container grid lg:grid-cols-12 gap-4">
        {open && (
          <aside className="h-full bg-[_#fff] lg:col-span-3 sidebar rounded-md pt-8 p-4">
            <Link href="/" className="mb-[_16px] block p-[_0.5rem]">
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
                {/* <Image
                src="/assets/images/charity-icon.svg"
                alt="icon"
                width={25}
                height={25}
                priority
                className="icon"
              /> */}
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 25.0395V15.0729C28 14.2697 27.8344 13.475 27.5134 12.737C27.1924 11.9991 26.7225 11.3332 26.1325 10.7801L16.567 1.81415C16.0095 1.29144 15.2698 1 14.5008 1C13.7317 1 12.9921 1.29144 12.4345 1.81415L2.8675 10.7801C2.27748 11.3332 1.80765 11.9991 1.48661 12.737C1.16556 13.475 0.999999 14.2697 1 15.0729V25.0395C1 25.8247 1.31607 26.5777 1.87868 27.1329C2.44129 27.6881 3.20435 28 4 28H25C25.7957 28 26.5587 27.6881 27.1213 27.1329C27.6839 26.5777 28 25.8247 28 25.0395Z"
                    stroke="#1E1E1E"
                    //   fill="#1E1E1E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
                  Dashboard
                </p>
              </div>
            </Link>
            <Link href="/" className="mb-[_16px] block p-[_0.5rem]">
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.71388 5.70262C9.98326 1.43887 16.9245 1.48387 21.2198 5.78024C25.5173 10.0777 25.5623 17.0224 21.2918 21.2917C17.0224 25.5611 10.0778 25.5172 5.78026 21.2197C4.57144 20.0159 3.65811 18.5483 3.11195 16.9321C2.5658 15.3159 2.40169 13.5951 2.63251 11.9047C2.66279 11.6829 2.77996 11.4822 2.95824 11.3467C3.13651 11.2113 3.3613 11.1522 3.58313 11.1825C3.80497 11.2128 4.00569 11.3299 4.14114 11.5082C4.27659 11.6865 4.33567 11.9113 4.30538 12.1331C4.10945 13.5656 4.24835 15.024 4.71118 16.3937C5.174 17.7634 5.94813 19.0072 6.97276 20.0272C10.6234 23.6767 16.4993 23.6981 20.0993 20.0992C23.6981 16.4992 23.6768 10.6234 20.0273 6.97274C16.3789 3.32549 10.5064 3.30187 6.90638 6.89624L7.74788 6.89962C7.85869 6.90014 7.9683 6.92247 8.07047 6.96535C8.17264 7.00823 8.26537 7.07082 8.34335 7.14953C8.42133 7.22825 8.48305 7.32155 8.52498 7.42412C8.5669 7.52668 8.58821 7.6365 8.5877 7.74731C8.58718 7.85811 8.56484 7.96773 8.52196 8.0699C8.47908 8.17207 8.4165 8.26479 8.33778 8.34277C8.25907 8.42076 8.16576 8.48247 8.0632 8.5244C7.96063 8.56632 7.85081 8.58764 7.74001 8.58712L4.87576 8.57362C4.65335 8.57243 4.4404 8.48348 4.28323 8.3261C4.12606 8.16873 4.03739 7.95566 4.03651 7.73324L4.02188 4.87124C4.02129 4.76044 4.04253 4.65061 4.08439 4.54801C4.12624 4.44542 4.1879 4.35207 4.26583 4.2733C4.34376 4.19454 4.43644 4.13189 4.53859 4.08894C4.64073 4.04599 4.75033 4.02358 4.86113 4.02299C4.97194 4.0224 5.08177 4.04364 5.18436 4.0855C5.28696 4.12735 5.3803 4.18901 5.45907 4.26694C5.53784 4.34487 5.60049 4.43755 5.64343 4.5397C5.68638 4.64184 5.70879 4.75144 5.70938 4.86224L5.71388 5.70374V5.70262ZM13.4989 8.15512C13.7227 8.15512 13.9373 8.24401 14.0955 8.40225C14.2537 8.56048 14.3426 8.77509 14.3426 8.99887V13.1501L16.9088 15.7151C16.9894 15.7929 17.0537 15.886 17.098 15.9889C17.1422 16.0918 17.1656 16.2025 17.1666 16.3146C17.1676 16.4266 17.1463 16.5377 17.1039 16.6414C17.0616 16.7451 16.999 16.8394 16.9198 16.9186C16.8406 16.9979 16.7464 17.0606 16.6427 17.1031C16.5391 17.1455 16.428 17.1669 16.3159 17.166C16.2039 17.1651 16.0932 17.1419 15.9902 17.0977C15.8873 17.0535 15.7941 16.9893 15.7163 16.9087L12.6563 13.8487V8.99999C12.6563 8.77622 12.7452 8.56161 12.9034 8.40337C13.0616 8.24514 13.2762 8.15624 13.5 8.15624L13.4989 8.15512Z"
                    fill="#1E1E1E"
                  />
                </svg>
                <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
                  History Section
                </p>
              </div>
            </Link>
            <Link href="/" className="mb-[_16px] block p-[_0.5rem]">
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
                {/* <Image src="/assets/images/power-consumption-icon.svg"  alt='icon'width={25} height={25} priority className='icon'/> */}
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0113 7.875L18 4.5C18 3.88125 17.4937 3.375 16.875 3.375C16.2563 3.375 15.75 3.88125 15.75 4.5V7.875H11.25V4.5C11.25 3.88125 10.7438 3.375 10.125 3.375C9.50625 3.375 9 3.88125 9 4.5V7.875H8.98875C7.7625 7.875 6.75 8.8875 6.75 10.1137V15.3562C6.75 15.9525 6.98625 16.5263 7.4025 16.9425L10.6875 20.25V22.5C10.6875 23.1187 11.1937 23.625 11.8125 23.625H15.1875C15.8062 23.625 16.3125 23.1187 16.3125 22.5V20.25L19.5975 16.965C20.0138 16.5375 20.25 15.9637 20.25 15.3675V10.1137C20.25 8.87625 19.2488 7.875 18.0113 7.875Z"
                    fill="#1E1E1E"
                  />
                </svg>
                <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
                  Power Consumption
                </p>
              </div>
            </Link>
            <Link
              href="/dashboard/power-usage"
              className="mb-[_16px] block p-[_0.5rem]"
            >
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1914 17.4611C19.7176 17.1017 20.3349 16.8987 20.9717 16.8755C21.6086 16.8523 22.239 17.0099 22.79 17.33C23.3411 17.6501 23.7902 18.1197 24.0855 18.6844C24.3808 19.2491 24.5101 19.8859 24.4586 20.5211C23.1088 20.9929 21.6751 21.1765 20.25 21.06C20.2456 19.785 19.8784 18.5364 19.1914 17.4623C18.5815 16.5058 17.7402 15.7185 16.7454 15.1734C15.7506 14.6283 14.6344 14.343 13.5 14.3438C12.3658 14.3432 11.2498 14.6286 10.2552 15.1737C9.26057 15.7188 8.41949 16.5059 7.80973 17.4623M20.2489 21.0589L20.25 21.0938C20.25 21.3469 20.2365 21.5966 20.2084 21.843C18.1669 23.0143 15.8536 23.6288 13.5 23.625C11.0587 23.625 8.76711 22.977 6.79161 21.843C6.76269 21.5826 6.74879 21.3208 6.74998 21.0589M6.74998 21.0589C5.32532 21.1795 3.89238 20.9967 2.54361 20.5223C2.49225 19.8872 2.62168 19.2507 2.91692 18.6861C3.21215 18.1216 3.66115 17.6521 4.21199 17.3321C4.76282 17.012 5.393 16.8544 6.02967 16.8774C6.66633 16.9004 7.28347 17.1032 7.80973 17.4623M6.74998 21.0589C6.75402 19.7839 7.12306 18.5365 7.80973 17.4623M16.875 7.59375C16.875 8.48886 16.5194 9.3473 15.8865 9.98024C15.2535 10.6132 14.3951 10.9688 13.5 10.9688C12.6049 10.9688 11.7464 10.6132 11.1135 9.98024C10.4806 9.3473 10.125 8.48886 10.125 7.59375C10.125 6.69864 10.4806 5.8402 11.1135 5.20726C11.7464 4.57433 12.6049 4.21875 13.5 4.21875C14.3951 4.21875 15.2535 4.57433 15.8865 5.20726C16.5194 5.8402 16.875 6.69864 16.875 7.59375ZM23.625 10.9688C23.625 11.3012 23.5595 11.6303 23.4323 11.9374C23.3051 12.2445 23.1186 12.5236 22.8836 12.7586C22.6485 12.9937 22.3695 13.1801 22.0624 13.3073C21.7553 13.4345 21.4261 13.5 21.0937 13.5C20.7613 13.5 20.4322 13.4345 20.1251 13.3073C19.818 13.1801 19.5389 12.9937 19.3039 12.7586C19.0688 12.5236 18.8824 12.2445 18.7552 11.9374C18.628 11.6303 18.5625 11.3012 18.5625 10.9688C18.5625 10.2974 18.8292 9.65359 19.3039 9.17889C19.7786 8.70418 20.4224 8.4375 21.0937 8.4375C21.7651 8.4375 22.4089 8.70418 22.8836 9.17889C23.3583 9.65359 23.625 10.2974 23.625 10.9688ZM8.43748 10.9688C8.43748 11.3012 8.37201 11.6303 8.2448 11.9374C8.1176 12.2445 7.93115 12.5236 7.6961 12.7586C7.46105 12.9937 7.18201 13.1801 6.8749 13.3073C6.5678 13.4345 6.23864 13.5 5.90623 13.5C5.57382 13.5 5.24467 13.4345 4.93757 13.3073C4.63046 13.1801 4.35142 12.9937 4.11637 12.7586C3.88132 12.5236 3.69487 12.2445 3.56766 11.9374C3.44046 11.6303 3.37498 11.3012 3.37498 10.9688C3.37498 10.2974 3.64167 9.65359 4.11637 9.17889C4.59107 8.70418 5.2349 8.4375 5.90623 8.4375C6.57756 8.4375 7.2214 8.70418 7.6961 9.17889C8.1708 9.65359 8.43748 10.2974 8.43748 10.9688Z"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
                  Tenants Power Usage
                </p>
              </div>
            </Link>
            <Link href="/" className="mb-[_16px] block p-[_0.5rem]">
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_38_5587)">
                    <path
                      d="M4.5 10.2075H10.2075V4.5H18V10.785H19.5V4.5C19.5 4.10218 19.342 3.72064 19.0607 3.43934C18.7794 3.15804 18.3978 3 18 3H8.1525L3 8.1525V22.5C3 22.8978 3.15804 23.2794 3.43934 23.5607C3.72064 23.842 4.10218 24 4.5 24H18C18.3978 24 18.7794 23.842 19.0607 23.5607C19.342 23.2794 19.5 22.8978 19.5 22.5H4.5V10.2075ZM4.5 8.7675L8.7675 4.5H9V9H4.5V8.7675Z"
                      fill="black"
                    />
                    <path
                      d="M21.24 12.2625C21.0965 12.1396 20.912 12.0754 20.7232 12.0827C20.5345 12.09 20.3554 12.1683 20.2218 12.3018C20.0883 12.4354 20.01 12.6144 20.0027 12.8032C19.9954 12.992 20.0596 13.1765 20.1825 13.32L22.62 15.75H13.5C13.3011 15.75 13.1103 15.829 12.9697 15.9697C12.829 16.1103 12.75 16.3011 12.75 16.5C12.75 16.6989 12.829 16.8897 12.9697 17.0303C13.1103 17.171 13.3011 17.25 13.5 17.25H22.6425L20.1825 19.71C20.104 19.7772 20.0402 19.86 19.9952 19.953C19.9502 20.0461 19.9249 20.1474 19.9209 20.2507C19.9169 20.354 19.9343 20.457 19.972 20.5532C20.0097 20.6495 20.0669 20.7369 20.14 20.81C20.2131 20.8831 20.3005 20.9403 20.3968 20.978C20.493 21.0157 20.596 21.0331 20.6993 21.0291C20.8026 21.0251 20.9039 20.9998 20.997 20.9548C21.09 20.9098 21.1728 20.846 21.24 20.7675L25.5 16.5L21.24 12.2625Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_38_5587">
                      <rect width="27" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
                  Export Data
                </p>
              </div>
            </Link>
            <Link href="/" className="mb-[_16px] block p-[_0.5rem]">
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5 9.28125C12.3811 9.28125 11.3081 9.72572 10.5169 10.5169C9.72572 11.3081 9.28125 12.3811 9.28125 13.5C9.28125 14.6189 9.72572 15.6919 10.5169 16.4831C11.3081 17.2743 12.3811 17.7188 13.5 17.7188C14.6189 17.7188 15.6919 17.2743 16.4831 16.4831C17.2743 15.6919 17.7188 14.6189 17.7188 13.5C17.7188 12.3811 17.2743 11.3081 16.4831 10.5169C15.6919 9.72572 14.6189 9.28125 13.5 9.28125ZM10.9688 13.5C10.9688 12.8287 11.2354 12.1848 11.7101 11.7101C12.1848 11.2354 12.8287 10.9688 13.5 10.9688C14.1713 10.9688 14.8152 11.2354 15.2899 11.7101C15.7646 12.1848 16.0312 12.8287 16.0312 13.5C16.0312 14.1713 15.7646 14.8152 15.2899 15.2899C14.8152 15.7646 14.1713 16.0312 13.5 16.0312C12.8287 16.0312 12.1848 15.7646 11.7101 15.2899C11.2354 14.8152 10.9688 14.1713 10.9688 13.5Z"
                    fill="#1E1E1E"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.472 1.40625C12.9714 1.40625 12.554 1.40625 12.212 1.42875C11.8624 1.44331 11.5176 1.51553 11.1916 1.6425C10.8161 1.79785 10.475 2.02564 10.1875 2.31287C9.90011 2.6001 9.67209 2.94114 9.51649 3.3165C9.35336 3.71025 9.30949 4.1265 9.29149 4.57875C9.28969 4.74415 9.2459 4.90638 9.16424 5.05022C9.08258 5.19407 8.96571 5.31481 8.82461 5.40113C8.67936 5.48044 8.51632 5.52154 8.35082 5.52055C8.18533 5.51957 8.02279 5.47654 7.87849 5.3955C7.47799 5.184 7.09549 5.01413 6.67249 4.95788C6.26968 4.90489 5.86037 4.93177 5.46795 5.03697C5.07552 5.14217 4.70766 5.32363 4.38536 5.571C4.11286 5.79024 3.87834 6.05288 3.69124 6.34838C3.49999 6.63413 3.29074 6.99525 3.04099 7.42838L3.01286 7.47787C2.76199 7.911 2.55386 8.27212 2.40311 8.58037C2.24561 8.90212 2.12186 9.21938 2.07686 9.57038C1.96954 10.3837 2.18968 11.2064 2.68886 11.8575C2.94874 12.1961 3.28736 12.4425 3.66986 12.6833C3.81247 12.7676 3.93128 12.8868 4.01512 13.0296C4.09896 13.1725 4.14507 13.3344 4.14911 13.5C4.14507 13.6656 4.09896 13.8275 4.01512 13.9704C3.93128 14.1132 3.81247 14.2324 3.66986 14.3167C3.28736 14.5575 2.94986 14.8039 2.68886 15.1425C2.44149 15.4648 2.26003 15.8327 2.15483 16.2251C2.04963 16.6175 2.02275 17.0268 2.07574 17.4296C2.12186 17.7806 2.24449 18.0979 2.40199 18.4196C2.55386 18.7279 2.76199 19.089 3.01286 19.5221L3.04099 19.5716C3.29074 20.0047 3.49999 20.3659 3.69124 20.6516C3.89036 20.9475 4.10411 21.2141 4.38536 21.4279C4.70757 21.6754 5.0754 21.8571 5.46783 21.9625C5.86025 22.0679 6.2696 22.095 6.67249 22.0421C7.09549 21.9859 7.47799 21.8171 7.87849 21.6045C8.02262 21.5236 8.18496 21.4806 8.35026 21.4796C8.51556 21.4786 8.6784 21.5197 8.82349 21.5989C8.96537 21.6845 9.08297 21.8051 9.16509 21.949C9.24721 22.093 9.29111 22.2555 9.29261 22.4212C9.30949 22.8735 9.35336 23.2897 9.51761 23.6835C9.67296 24.059 9.90076 24.4002 10.188 24.6876C10.4752 24.975 10.8162 25.203 11.1916 25.3586C11.5179 25.4936 11.8554 25.5465 12.212 25.5701C12.554 25.5938 12.9714 25.5938 13.472 25.5938H13.5282C14.0289 25.5938 14.4462 25.5938 14.7882 25.5712C15.146 25.5465 15.4824 25.4936 15.8086 25.3575C16.1841 25.2022 16.5253 24.9744 16.8127 24.6871C17.1001 24.3999 17.3281 24.0589 17.4837 23.6835C17.6469 23.2897 17.6907 22.8735 17.7087 22.4212C17.7103 22.2557 17.754 22.0932 17.8357 21.9491C17.9174 21.8051 18.0344 21.6842 18.1756 21.5977C18.321 21.5186 18.484 21.4777 18.6495 21.4789C18.815 21.4801 18.9775 21.5233 19.1217 21.6045C19.5222 21.816 19.9047 21.9859 20.3277 22.041C21.1411 22.1483 21.9638 21.9282 22.6149 21.429C22.8961 21.213 23.1099 20.9475 23.309 20.6516C23.5002 20.3659 23.7095 20.0047 23.9592 19.5716L23.9874 19.5221C24.2382 19.089 24.4464 18.7279 24.5971 18.4196C24.7546 18.0979 24.8784 17.7795 24.9234 17.4296C25.0307 16.6163 24.8105 15.7936 24.3114 15.1425C24.0515 14.8039 23.7129 14.5575 23.3304 14.3167C23.1878 14.2324 23.0689 14.1132 22.9851 13.9704C22.9013 13.8275 22.8552 13.6656 22.8511 13.5C22.8511 13.1873 23.0221 12.8767 23.3304 12.6833C23.7129 12.4425 24.0504 12.1961 24.3114 11.8575C24.5587 11.5352 24.7402 11.1673 24.8454 10.7749C24.9506 10.3825 24.9775 9.97319 24.9245 9.57038C24.8709 9.22467 24.7607 8.89018 24.5982 8.58037C24.4062 8.20659 24.2024 7.83891 23.9874 7.47787L23.9592 7.42838C23.7537 7.06172 23.5369 6.70155 23.309 6.34838C23.1219 6.0532 22.8874 5.79092 22.6149 5.57212C22.2927 5.32456 21.9248 5.14289 21.5324 5.0375C21.14 4.9321 20.7306 4.90505 20.3277 4.95788C19.9047 5.01413 19.5222 5.18287 19.1217 5.3955C18.9776 5.47634 18.8152 5.51926 18.65 5.52024C18.4847 5.52123 18.3219 5.48024 18.1767 5.40113C18.0352 5.31508 17.9179 5.19446 17.8358 5.0506C17.7538 4.90673 17.7097 4.74436 17.7076 4.57875C17.6907 4.1265 17.6469 3.71025 17.4826 3.3165C17.3273 2.94103 17.0995 2.59984 16.8122 2.31242C16.525 2.025 16.184 1.79698 15.8086 1.64137C15.4824 1.50637 15.1449 1.4535 14.7882 1.42988C14.4462 1.40625 14.0289 1.40625 13.5282 1.40625H13.472ZM11.8374 3.20063C11.924 3.16463 12.0556 3.132 12.3267 3.11287C12.6046 3.09375 12.9646 3.09375 13.5001 3.09375C14.0356 3.09375 14.3956 3.09375 14.6735 3.11287C14.9446 3.132 15.0762 3.16463 15.1629 3.20063C15.5082 3.3435 15.7816 3.61688 15.9245 3.96225C15.9695 4.07025 16.0066 4.24012 16.0212 4.64175C16.055 5.53275 16.5151 6.39112 17.3319 6.8625C18.1486 7.335 19.1217 7.3035 19.9104 6.88725C20.2659 6.69938 20.4312 6.6465 20.5482 6.63188C20.9179 6.58303 21.2918 6.68298 21.5877 6.90975C21.662 6.96713 21.7565 7.065 21.9084 7.29C22.0647 7.52175 22.2447 7.83337 22.5125 8.29688C22.7802 8.76038 22.9591 9.07312 23.0817 9.32287C23.2021 9.567 23.2392 9.6975 23.2505 9.79088C23.2993 10.1605 23.1994 10.5344 22.9726 10.8304C22.9006 10.9237 22.7724 11.0407 22.4326 11.2545C21.6766 11.7292 21.1636 12.5573 21.1636 13.5C21.1636 14.4427 21.6766 15.2708 22.4326 15.7455C22.7724 15.9593 22.9006 16.0763 22.9726 16.1696C23.1999 16.4655 23.2989 16.839 23.2505 17.2091C23.2392 17.3025 23.201 17.4341 23.0817 17.6771C22.9591 17.928 22.7802 18.2396 22.5125 18.7031C22.2447 19.1666 22.0636 19.4783 21.9084 19.71C21.7565 19.935 21.662 20.0329 21.5877 20.0903C21.2918 20.317 20.9179 20.417 20.5482 20.3681C20.4312 20.3535 20.267 20.3006 19.9104 20.1128C19.1229 19.6965 18.1486 19.665 17.3319 20.1364C16.5151 20.6089 16.055 21.4673 16.0212 22.3582C16.0066 22.7599 15.9695 22.9298 15.9245 23.0378C15.8538 23.2085 15.7502 23.3637 15.6195 23.4944C15.4888 23.6251 15.3336 23.7287 15.1629 23.7994C15.0762 23.8354 14.9446 23.868 14.6735 23.8871C14.3956 23.9062 14.0356 23.9062 13.5001 23.9062C12.9646 23.9062 12.6046 23.9062 12.3267 23.8871C12.0556 23.868 11.924 23.8354 11.8374 23.7994C11.6666 23.7287 11.5114 23.6251 11.3807 23.4944C11.2501 23.3637 11.1464 23.2085 11.0757 23.0378C11.0307 22.9298 10.9936 22.7599 10.979 22.3582C10.9452 21.4673 10.4851 20.6089 9.66836 20.1375C8.85161 19.665 7.87849 19.6965 7.08986 20.1128C6.73436 20.3006 6.56899 20.3535 6.45199 20.3681C6.08235 20.417 5.70845 20.317 5.41249 20.0903C5.33824 20.0329 5.24374 19.935 5.09186 19.71C4.88026 19.3806 4.67879 19.0448 4.48774 18.7031C4.21999 18.2396 4.04111 17.9269 3.91849 17.6771C3.79811 17.433 3.76099 17.3025 3.74974 17.2091C3.7009 16.8395 3.80085 16.4656 4.02761 16.1696C4.09961 16.0763 4.22786 15.9593 4.56761 15.7455C5.32361 15.2708 5.83661 14.4427 5.83661 13.5C5.83661 12.5573 5.32361 11.7292 4.56761 11.2545C4.22786 11.0407 4.09961 10.9237 4.02761 10.8304C3.80085 10.5344 3.7009 10.1605 3.74974 9.79088C3.76099 9.6975 3.79924 9.56588 3.91849 9.32287C4.04111 9.072 4.21999 8.76038 4.48774 8.29688C4.75549 7.83337 4.93661 7.52175 5.09186 7.29C5.24374 7.065 5.33824 6.96713 5.41249 6.90975C5.70845 6.68298 6.08235 6.58303 6.45199 6.63188C6.56899 6.6465 6.73324 6.69938 7.08986 6.88725C7.87736 7.3035 8.85161 7.335 9.66836 6.8625C10.4851 6.39112 10.9452 5.53275 10.979 4.64175C10.9936 4.24012 11.0307 4.07025 11.0757 3.96225C11.2186 3.61688 11.492 3.3435 11.8374 3.20063Z"
                    fill="#1E1E1E"
                  />
                </svg>
                <p className="text-md font-[_400] hover:font-[_600] hover:text-lg">
                  Settings
                </p>
              </div>
            </Link>
            <Link href="/login" className="mb-[_16px] block p-[_0.5rem]">
              <div className="aside-item flex flex-row items-center gap-2 hover:text-[_#25672F]">
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
            </Link>
          </aside>
        )}
        <main className="h-full lg:col-span-9 main-contents rounded-md px-4">
          <div className="main-header grid lg:grid-cols-12 gap-4 mb-6">
            <figure className="col-span-6 card rounded-[_10px] bg-[_#fff] p-4">
              <h3 className="text-md text-[_#25672F] font-[_800] pb-2">
                Monthly Power Consumption
              </h3>
              <div className="card-row grid grid-cols-12 gap-4">
                <figure className="col-span-2 lg:col-span-3">
                  <span className="high h-9 block p-2 mb-2 bg-[_#2956c9] rounded-[_4px]"></span>
                  <p className="text-center">100kwh</p>
                  <p className="text-center">High</p>
                </figure>
                <figure className="col-span-2 lg:col-span-3">
                  <span className="mid h-9 block p-2 mb-2 bg-[_#bab01b] rounded-[_4px]"></span>
                  <p className="text-center">60kwh</p>
                  <p className="text-center">Mid</p>
                </figure>
                <figure className="col-span-2 lg:col-span-3 ">
                  <span className="low h-9 block p-2 mb-2 bg-[_#9c9b95] rounded-[_4px]"></span>
                  <p className="text-center">30kwh</p>
                  <p className="text-center">Normal</p>
                </figure>
              </div>
            </figure>

            {/* col-2 */}
            <figure className="col-span-6 card rounded-[_10px] bg-[_#fff] p-4">
              <h3 className="text-md text-[_#25672F] font-[_800] pb-2">
                Weekly Power Consumption
              </h3>
              <div className="card-row grid grid-cols-12 gap-4">
                <figure className="col-span-2 lg:col-span-3">
                  <span className="high h-9 block p-2 mb-2 bg-[_#2956c9] rounded-[_4px]"></span>
                  <p className="text-center">60kwh</p>
                  <p className="text-center">High</p>
                </figure>
                <figure className="col-span-2 lg:col-span-3">
                  <span className="mid h-9 block p-2 mb-2 bg-[_#bab01b] rounded-[_4px]"></span>
                  <p className="text-center">30kwh</p>
                  <p className="text-center">Mid</p>
                </figure>
                <figure className="col-span-2 lg:col-span-3 ">
                  <span className="low h-9 block p-2 mb-2 bg-[_#9c9b95] rounded-[_4px]"></span>
                  <p className="text-center">10kwh</p>
                  <p className="text-center">Normal</p>
                </figure>
              </div>
            </figure>
          </div>

          <div className="main-body h-60 bg-[_#fff] rounded-md barchart-container">
            <h3 className="text-sm font-semibold pl-2">
              No 23 Ziks Drive UNN
              <div className="bar-sub">
                <BarChart />
                <BarChart2 />
              </div>
            </h3>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Dashboard;
