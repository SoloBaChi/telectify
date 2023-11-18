export default function Usage() {
  return (
    <div className="main-header grid lg:grid-cols-12 gap-4 mb-6">
      <figure className="col-span-6 card rounded-[_10px] bg-[_#fff] p-4 pl-28">
        <h3 className="text-md text-[_#25672F] font-[_800] pb-2">
          Monthly Power Usage
        </h3>
        <div className="card-row grid grid-cols-12 gap-4 ">
          <figure className="col-span-4 md:col-span-2 lg:col-span-3">
            <span className="high h-9 block p-2 mb-2 bg-[_#2956c9] rounded-[_4px]"></span>
            <p className="text-center">30kwh</p>
            <p className="text-center">High</p>
          </figure>
          <figure className="col-span-4 md:col-span-2 lg:col-span-3">
            <span className="mid h-9 block p-2 mb-2 bg-[_#bab01b] rounded-[_4px]"></span>
            <p className="text-center">20kwh</p>
            <p className="text-center">Mid</p>
          </figure>
          <figure className="col-span-4 md:col-span-2 lg:col-span-3 ">
            <span className="low h-9 block p-2 mb-2 bg-[_#9c9b95] rounded-[_4px]"></span>
            <p className="text-center">10kwh</p>
            <p className="text-center">Normal</p>
          </figure>
        </div>
      </figure>

      {/* col-2 */}
      <figure className="col-span-6 card rounded-[_10px] bg-[_#fff] p-4 pl-28">
        <h3 className="text-md text-[_#25672F] font-[_800] pb-2">
          Daily Power Usage
        </h3>
        <div className="card-row grid grid-cols-12 gap-4">
          <figure className="col-span-4 md:col-span-2 lg:col-span-3">
            <span className="high h-9 block p-2 mb-2 bg-[_#2956c9] rounded-[_4px]"></span>
            <p className="text-center">6kwh</p>
            <p className="text-center">High</p>
          </figure>
          <figure className="col-span-4 md:col-span-2 lg:col-span-3">
            <span className="mid h-9 block p-2 mb-2 bg-[_#bab01b] rounded-[_4px]"></span>
            <p className="text-center">4kwh</p>
            <p className="text-center">Mid</p>
          </figure>
          <figure className="col-span-4 md:col-span-2 lg:col-span-3 ">
            <span className="low h-9 block p-2 mb-2 bg-[_#9c9b95] rounded-[_4px]"></span>
            <p className="text-center">2kwh</p>
            <p className="text-center">Normal</p>
          </figure>
        </div>
      </figure>
    </div>
  );
}
