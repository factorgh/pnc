import ButtonItem from "./components/ButtonItem";
import ButtonWithMulti from "./components/ButtonWithMulti";
import Example from "./components/Example";
import Metrics from "./components/Metrics";
import { DefaultTable } from "./components/Table";

function App() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen px-4 md:px-10 bg-blue-gray-50">
        {/* Header Section */}
        <div className="text-slate-400 p-5 shadow-md flex flex-col md:flex-row justify-between items-center rounded-md mt-5 bg-white">
          <h3 className="text-3xl md:text-5xl font-semibold text-blue-300">
            PNC <span className="italic text-sm">online banking</span>
          </h3>
          <p className="italic text-md font-semibold text-blue-300 text-center md:text-right">
            Welcome back, <span className="text-xl">BEPI GROUP LLC</span>
          </p>
        </div>

        {/* Navigation Menu */}
        <ul className="w-full md:w-[80%] flex flex-wrap justify-center md:justify-around items-center p-3 rounded-md gap-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 my-4 text-sm md:text-base">
          <li className="text-blue-800 font-bold">My Accounts</li>
          <li>Transfer Funds</li>
          <li>Pay Bills</li>
          <li>Customer Service</li>
          <li>My Offers</li>
        </ul>

        {/* Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5 shadow-md rounded-md bg-white my-4">
          <div className="flex flex-wrap gap-3">
            <ButtonWithMulti />
            <ButtonItem>Spend / Reserve $ 875.00</ButtonItem>
            <button className="bg-blue-50 px-5 py-2 rounded-md shadow-md">
              Growth: $1,204.55
            </button>
          </div>
          <h5 className="text-blue-600 text-lg mt-3 md:mt-0">
            Learn:{" "}
            <span className="text-gray-500">Virtual Wallet Quick Start</span>
          </h5>
        </div>

        {/* Quick Navigation */}
        <ul className="flex flex-wrap justify-center md:justify-around items-center text-white p-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-sm md:text-base gap-3">
          <li>Quick View</li>
          <li>Calendar</li>
          <li className="text-blue-800">Account Detail</li>
          <li>Account Activity</li>
          <li>Savings Engine</li>
          <li>Alerts</li>
        </ul>

        {/* Savings Summary */}
        <div className="flex flex-col lg:flex-row justify-between p-5 shadow-xl rounded-md bg-white my-5">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl font-semibold text-blue-300">
              So far I have saved...
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              From 02/10/2017 - To 30/05/2024
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5 mt-5 lg:mt-0">
            <Metrics text="Timed Savings" />
            <Metrics text="Bill Pay Savings" />
            <Metrics text="Punch the Pig Savings" />

            <div className="bg-gray-500 h-1 rounded-lg my-3 w-full"></div>

            <div className="flex items-center gap-2">
              <div className="rounded-xl w-5 h-5 bg-purple-300"></div>
              <h2 className="text-2xl">My Total Savings: $250,000</h2>
            </div>
          </div>

          {/* Chart / Graph */}
          <div className="flex-1 mt-5 lg:mt-0">
            <Example />
          </div>
        </div>

        {/* Transactions Table */}
        <div className="shadow-md rounded-md bg-white p-5">
          <div className="flex flex-wrap justify-between items-center p-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white  mb-3 md:mb-5">
            <h3 className="text-lg md:text-xl font-semibold">
              At these times...
            </h3>
            <div className="flex gap-3">
              <button className="bg-purple-400 p-2 rounded-lg text-[10px] md:text-sm ">
                View All Upcoming
              </button>
              <button className="bg-purple-400 px-3 rounded-lg text-[10px] md:text-sm">
                Detailed History
              </button>
              <button className="bg-purple-400 px-3 rounded-md text-[10px] md:text-sm">
                Add
              </button>
            </div>
          </div>
          <DefaultTable />
        </div>
      </div>
    </>
  );
}

export default App;
