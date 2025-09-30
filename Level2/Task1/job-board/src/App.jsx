import {CiSearch} from "react-icons/ci"

function App() {

  return (
    <>
     <div className=" m-0 p-0 border border-black bg-blue-500   h-screen w-screen box-border">
      <div className="border border-purple-500">
    <div className="border-2 border-red-500 h-25 p-2 px-5 flex justify-between ">
  <div className="border border-amber-300 px-3 flex space-x-2 justify-center items-center text-center">
    <div className=" box-border rounded-full border-2 border-white flex justify-center items-center ">
      <div className="rounded-full bg-green-500 w-full h-full border border-white">
      <span className=" shadow-2xl shadow-green-200 h-full w-full">
        <CiSearch className="text-gray-200 text-3xl hover:text-blue-800 transition duration-200 cursor-pointer w-10 h-10"/>
      </span>
      </div>
    </div>
    <div className="flex flex-col  items-start box-border ">
<h2 className="text-2xl sm:text-2xl font-bold text-gray-200 tracking-tight">
  Job Board
</h2>
<span className="font-mono text-xs text-gray-200">
  Find your dream job
</span>
    </div>
  </div>
  <div className=" secondDiv border border-amber-300 p-2 flex justify-center items-center">
    <div className="border border-black  flex space-x-8 px-2 justify-center items-center">
    <div className="border border-black px-1 text-gray-200 font-normal" ><a href="http://">Home</a></div>
    <div className="border border-black px-1 text-gray-200 font-normal"><a href="http://">Browse Job</a></div>
    <div className="border border-black px-1 text-gray-200 font-normal"><a href="http://">Pages</a></div>
    <div className="border border-black px-1 text-gray-200 font-normal"><a href="http://">Blog</a></div>
    <div className="border border-black px-1 text-gray-200 font-normal"><a href="http://">Contact</a></div>
    </div>
  </div>
  <div className="thirdDiv border border-amber-300 p-2 box-border flex justify-center items-center">
    <div className="border border-black box-border flex justify-center items-center space-x-3">
     <div className="border border-red-400 py-2 px-1">
   <button>
    <span className="text-gray-100 font-sans text-[1rem]">
      Log in
    </span>
   </button>
     </div>
     <div className="border border-amber-300 px-3 py-2 bg-green-500 rounded-md">
<button>
  <span className="text-white font-semibold">
    Post A Job
  </span>
</button>
     </div>
    </div>
  </div>
    </div>
      </div>
     </div>
    </>
  )
}

export default App
