import BarChart from "../components/barChart";
import BarChart2 from "../components/barChart2";
import Usage from "./UsageCard";

export default function Info(props) {
  return (
    <main className="h-full lg:col-span-9 main-contents rounded-md px-4">
      <Usage />

      <div className="main-body bg-[_#fff] p-2 rounded-md">
        <h3 className="text-sm font-semibold pl-0">
          <div className="bar-sub">
            <BarChart user={props} />
            <BarChart2 user={props} />
          </div>
        </h3>
      </div>
    </main>
  );
}
