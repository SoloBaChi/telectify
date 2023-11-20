import UsageCard from "../dashboardComponents/UsageCard";
export default function Usage() {
  return (
    <main className="lg:col-span-9 main-contents rounded-md">
      <UsageCard />

      <div className="main-body bg-[_#fff] p-4 rounded-md">
        <h3 className="text-sm font-semibold pl-24 mb-6">
          No 23 Ziks Drive UNN
        </h3>
        <div className="table-container max-w-[_850px] overflow-auto lg:max-w-full lg:overflow-hidden">
          <table className="table-auto w-[_1024px] md:w-full">
            <thead className="pb-4">
              <tr>
                <th>Solomon Chiakonam</th>
                <th>Amadi Emmmanuel</th>
                <th>Nwangwu Israel</th>
                <th>Chijioke Precious</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.8kw/hr</td>
                <td>0.6kw/hr</td>
                <td>0.8kw/hr</td>
                <td>0.7kw/hr</td>
                <td>Now</td>
              </tr>
              <tr>
                <td>20kw/hr</td>
                <td>10kw/hr</td>
                <td>40kw/hr</td>
                <td>20kw/hr</td>
                <td>1hr ago</td>
              </tr>
              <tr>
                <td>40kw/hr</td>
                <td>30kw/hr</td>
                <td>60kw/hr</td>
                <td>50kw/hr</td>
                <td>2 hrs ago</td>
              </tr>
              <tr>
                <td>20kw/hr</td>
                <td>60kw/hr</td>
                <td>20kw/hr</td>
                <td>70kw/hr</td>
                <td>3 hrs ago</td>
              </tr>
              <tr>
                <td>70kw/hr</td>
                <td>70kw/hr</td>
                <td>30kw/hr</td>
                <td>40kw/hr</td>
                <td>4 hrs ago</td>
              </tr>
              <tr>
                <td>90kw/hr</td>
                <td>20kw/hr</td>
                <td>90kw/hr</td>
                <td>80kw/hr</td>
                <td>5 hrs ago</td>
              </tr>
              <tr>
                <td>30kw/hr</td>
                <td>45kw/hr</td>
                <td>50kw/hr</td>
                <td>25kw/hr</td>
                <td>6 hrs ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
