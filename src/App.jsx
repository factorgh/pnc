import ButtonItem from "./components/ButtonItem"
import ButtonWithMulti from "./components/ButtonWithMulti"
import Example from "./components/Example"
import Metrics from "./components/Metrics"
import { DefaultTable } from "./components/Table"


function App() {
  return (
    <>
   <div className='flex flex-col w-screen h-screen  px-10  bg-blue-gray-50 ' >
    <div className=" text-slate-400 p-3 h-[100px] shadow-md px-10 flex flex-col justify-between items-start  rounded-md mt-10"   >
      <div className="w-screen px-20 flex justify-between">
      <h3 className="text-5xl  font-semibold text-blue-300 mb-5">PNC <span className="italic text-sm text-">online banking</span></h3>
      <p  className="mr-20  italic text-md  font-semibold text-blue-300 mb-5">Welcome back ,  <span className=" text-xl text-normal ">BEPI GROUP LLC</span> </p>
      </div> 
    
    <ul className="w-[80%] h-[50px] flex text-white  bg-gradient-to-r from-cyan-500 to-blue-500 justify-around items-center p-2 rounded-md gap-3 ">
      <li className="text-orange-600 bg-slate-500 font-bold">My accounts</li>
      <li>Transfer Funds</li>
      <li>Pay Bills</li>
      <li>Customert Service</li>
      <li>My offer</li>
    </ul>
    </div> 

    <div className=" w-[80%] text-slate-400 p-3 h-[2px] mt-3 shadow-md px-10 flex justify-between items-center  rounded-md mb-10 bg-gradient-to-r from-cyan-500 to-blue-500"  >
   
    </div>
    <div className=" text-slate-400 p-3 h-[130px] shadow-md px-10 flex justify-between items-center  rounded-md mb-2"  >
      <div className="flex gap-3">
      <ButtonWithMulti/>
      <ButtonItem>Spend / Reserve $ 875.00</ButtonItem>
      <button className="bg-gray-500 px-5 py-2 rounded-md shadow-md">Growth: $1,204.55</button>
      </div>
      <div>
      <h5 className="text-blue-600 text-xl">Learn : <span className="text-gray-500">Virtual Wallet Quick Start</span></h5>
      </div>
    
    </div>

    <div className=" text-slate-400 p-3 h-[50px] shadow-md px-10  items-center  rounded-md mb-10 bg-gradient-to-r from-cyan-500 to-blue-500">
    <ul className="flex justify-around items-center  text-white">
      <li>Quick View</li>
      <li> Calendar</li>
      <li className="h-full text-orange-600">Account Detail</li>
      <li> Account Activity</li>
      <li>Savings Engine</li>
      <li>Alerts</li>
    </ul>
    </div>
    <div className="mx-20 text-slate-400 p-3 h-[300px] shadow-xl px-10 flex  rounded-md mb-10"  >
    {/* First section */}
    <div className="flex flex-col gap-20">
    <div className="">
    <h3 className="text-4xl  font-semibold text-blue-300">
      So far I have saved 
    </h3>
    <h3 className="text-4xl  font-semibold text-blue-300">
      this much money ... 
    </h3>
    </div>
    <div className="text-gray-700">
      <p>From 02/10/2017</p>
      <p>To 30/05/2024</p>
    </div>
    </div>
    {/* End of first face */}

    {/* Second section */}
    <div className="flex flex-col mt-20  ml-40 mr-22 align-bottom">
    <Metrics text='Timed Savings' />
   <Metrics  text='Bill Pay Savings' />
   <Metrics  text='Punch the pig Savings' />

   <div className="bg-gray-500 h-1 rounded-lg my-5 w-full"></div>
   
   <div className="flex  gap-2 items-center">
    <div className="rounded-xl w-[20px] h-[20px] bg-purple-300">
    </div>
    <h2 className="text-3xl">My Total Savings : $250,000</h2>
   </div>

   
    </div>
    {/* End of second section */}
    <div className=" flex-1">
  <Example/>
</div>
    </div>
    <div className=" text-slate-400  h-[400px] shadow-md  flex flex-col  rounded-md mb-10"  >
    <div className="  text-slate-400 p-5 h-[2px] mt-3 shadow-md px-10 flex justify-between items-center  rounded-md mb-10 bg-gradient-to-r from-cyan-500 to-blue-500"  >
      <h3 className="text-purple-300 font-semibold text-xl">At these times ... </h3>
      <div className="flex gap-5">
        <button className="text-white text-lg bg-purple-300 p-1 rounded-md">View All Upcoming </button>
        <button className="text-white text-lg bg-purple-300 p-1 rounded-md">Detailed History  </button>
        <button className="text-white text-lg bg-purple-300 p-1 rounded-md">Add </button>

      </div>
    </div>
    <DefaultTable />
    </div>
    
    </div>

   
  </>
  )};

export default App


