import Image from "next/image";
import Link from "next/link";
import Wave from "./components/wave";
import Nav from "./components/nav";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" p-4">
        <Nav />
        <div className="banner-container">
          <div className="home-banner w-screen">
            <Image
              src="/home/image2.jpg"
              alt="image2"
              height={1000}
              width={1000}
              className="home-banner-image"
            />
            <div className="banner-text">
              Telectify is a cutting-edge real-time energy monitoring
              application designed to empower individuals and businesses with
              unprecedented insights into their energy consumption. Our platform
              leverages state-of-the-art technology to provide users with a
              comprehensive view of their energy usage, enabling smarter
              decision-making, cost savings, and a more sustainable approach to
              energy management.
            </div>
          </div>
          <Wave />
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4 home-cta">
          <Link
            href="/signup"
            rel="noopener noreferrer"
            className="hidden fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-blue-800 pb-6 pt-8 backdrop-blur-2xl text-white lg:static lg:w-auto  lg:rounded-xl  lg:p-4 lg:block"
          >
            Get started with&nbsp;
            <code className="font-mono font-bold">Telectify</code>
          </Link>
        </div>
        <div className="border-b-4 border-blue-100"></div>
        <section className="features mb-32 home-features">
          <h3 className="mb-4 text-2xl font-bold text-center mt-8">
            Key Features
          </h3>
          <div className="features-container">
            <Image
              src="/home/image1.jpg"
              alt="image1"
              height={1000}
              width={1000}
              className="feature-image"
            />
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:text-left feature-cards">
              <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
                <h4 className="mb-3 text-lg font-bold">Real-Time Monitoring</h4>
                <p className="text-sm opacity-50">
                  Stay informed about your energy consumption in real time.
                  Telectify offers live updates, allowing you to track usage
                  patterns and identify opportunities for optimization.
                </p>
              </figure>
              <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
                <h4 className="mb-3 text-lg font-bold">Cost Analysis</h4>
                <p className="text-sm opacity-50">
                  Understand the financial implications of your energy usage.
                  Telectify provides detailed cost analysis tools to help you
                  make informed decisions and save on energy expenses.
                </p>
              </figure>
              <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
                <h4 className="mb-3 text-lg font-bold">Intuitive Dashboards</h4>
                <p className="text-sm opacity-50">
                  Our user-friendly dashboards present complex energy data in a
                  clear and understandable format. Visualize your usage trends,
                  peak hours, and areas for improvement effortlessly.
                </p>
              </figure>
              <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
                <h4 className="mb-3 text-lg font-bold">Historical Data</h4>
                <p className="text-sm opacity-50">
                  Access historical data to track long-term trends and identify
                  areas for improvement. Analyze your energy history to make
                  informed decisions about efficiency upgrades and conservation
                  efforts.
                </p>
              </figure>
              <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
                <h4 className="mb-3 text-lg font-bold">Customized Alerts</h4>
                <p className="text-sm opacity-50">
                  Set personalized alerts to be notified of unusual energy
                  consumption, potential issues, or when predefined thresholds
                  are reached. Stay in control and respond promptly to changes.
                </p>
              </figure>
            </div>
          </div>
        </section>
        <div className="border-b-4 border-blue-100 mb-10"></div>
        <section className="why-us home-why-us">
          <h3 className="mb-4 text-2xl text-center font-bold">Why Telectify</h3>
          <Image
            src="/home/image1.png"
            alt="why-us-image"
            height={1000}
            width={1000}
            className="why-us-image"
          />
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:text-left">
            <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
              <h4 className="mb-3 text-lg font-bold">
                Empowering Sustainability
              </h4>
              <p className="text-sm opacity-50">
                Telectify is committed to fostering a sustainable future. By
                providing individuals and businesses with the tools to optimize
                energy usage, we contribute to a more eco-friendly and
                energy-efficient world.
              </p>
            </figure>
            <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
              <h4 className="mb-3 text-lg font-bold">User-Centric Design</h4>
              <p className="text-sm opacity-50">
                We prioritize user experience, ensuring that our platform is not
                only powerful but also easy to use. Telectify is designed with
                your needs in mind, making energy management accessible to all.
              </p>
            </figure>
            <figure className="card group rounded-lg border border-transparent-800 p-2 mb-4 transition-colors hover:text-white cursor-pointer background-blue">
              <h4 className="mb-3 text-lg font-bold">Scalability</h4>
              <p className="text-sm opacity-50">
                Whether you are a homeowner, small business, or a large
                enterprise, Telectify scales to meet your energy monitoring
                needs. Our flexible platform adapts to different settings and
                requirements.
              </p>
            </figure>
          </div>
        </section>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Link
            href="/signup"
            rel="noopener noreferrer"
            className="fixed left-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-blue-800 pb-4 pt-2 backdrop-blur-2xl text-white lg:static lg:w-auto  lg:rounded-xl  lg:p-4 lg:hidden "
          >
            Get started with&nbsp;
            <code className="font-mono font-bold">Telectify</code>
          </Link>
        </div>
      </div>
    </main>
  );
}

