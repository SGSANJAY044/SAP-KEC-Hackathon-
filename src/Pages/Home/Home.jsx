import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import Back from '../../assets/profile_background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.css'
function Home() {
  return (
    <div className="flex h-screen w-full">
        <div className="h-screen w-20   rounded-r-full fixed" style={{borderTopRightRadius:"40px",borderBottomRightRadius:"40px",boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
            <div className="h-2/4 w-full flex flex-col">
                <div className=""><img src={logo} alt="" /></div>
                <img src={profile} alt="" className="h-12 w-12 mx-3 rounded-lg" />
                <FontAwesomeIcon icon="fa-thin fa-house" />
                <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
                <FontAwesomeIcon icon="fa-thin fa-plus" />
            </div>
            <div className="h-2/4 w-full flex flex-col">
            <FontAwesomeIcon icon="fa-thin fa-gear" />
            <FontAwesomeIcon icon="fa-thin fa-right-from-bracket" />
            </div>
        </div>
        <div className="h-full w-full  p-5 pl-20 lg:p-10 lg:pl-32">
            <div className="h-2/4 flex justify-center ">
                {/* <div className="h-full w-2/5  mx-10 rounded-3xl flex flex-col justify-end p-10 relative" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                    <div className="absolute  w-32 h-32 rounded-br-full rounded-l-lg bg-gray top-0 left-0 ">
                        <div className="text-7xl absolute top-3 left-2 font-bold text-secondarygreen">22</div>
                    </div>
                    <div className="h-24 w-full flex flex-col">
                        <div className="h-2/4 flex">
                            <div className="h-full w-2/6 text-blue text-center text-2xl font-bold">10</div>
                            <div className="h-full w-2/6 text-blue text-center text-2xl font-bold">10</div>
                            <div className="h-full w-2/6 text-blue text-center text-2xl font-bold">10</div>
                        </div>
                        <div className="h-2/4 flex">
                            <div className="h-full w-2/6 text-blue text-center text-2xl">event</div>
                            <div className="h-full w-2/6 text-blue text-center text-2xl">post</div>
                            <div className="h-full w-2/6 text-blue text-center text-2xl">other</div>
                        </div>
                    </div>
                </div> */}
                <div className="h-full w-full md:w-3/5   mx-10 rounded-3xl flex" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                    <div className="h-full w-2/5 rounded-l-3xl  flex items-center justify-center " style={{background:`url(${Back})`, backgroundSize:"cover"}}>
                        <img src={profile} alt="" style={{borderRadius:"50%"}} className="h-52 w-52"/>
                    </div>
                    <div className="h-full w-3/5 rounded-r-3xl p-10">
                        <div className="text-gray text-5xl font-bold">Tony Stark</div>
                        <div className="text-2xl py-5">Artificial Intelligence and Data science</div>
                        <div className=" w-full h-14 rounded-md flex">
                            <div className="h-full bg-gray rounded-l-md w-4/5 text-center text-white text-3xl text-bold py-2">
                                21ADR044
                            </div>
                            <div className="h-full bg-blue rounded-r-md text-center text-white text-3xl text-bold w-1/5 py-2">A</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-2/4 p-10 pb-0">
                {/* <div className="h-full w-full p-10 py-5 rounded-3xl" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                    <div className="text-blue p-2">Activity History</div>
                    <div className="h-7 w-full flex bg-slate-50 px-2">
                        <div className="flex w-2/4">
                            <div className="w-3/6 text-gray font-semibold">Activity Name </div>
                            <div className="w-3/6 text-gray font-semibold">subcatogry</div>
                            <div className="w-3/6 text-gray font-semibold">subcatogry2</div>
                        </div>
                        <div className="flex w-2/4 justify-end">
                            <div className="1/4 text-gray font-semibold">10</div>
                        </div>
                    </div>
                    <div className="h-7 w-full flex px-2">
                        <div className="flex w-2/4">
                            <div className="w-3/6 text-gray font-semibold">Activity Name </div>
                            <div className="w-3/6 text-gray font-semibold">subcatogry</div>
                            <div className="w-3/6 text-gray font-semibold">subcatogry2</div>
                        </div>
                        <div className="flex w-2/4 justify-end">
                            <div className="1/4 text-gray font-semibold">10</div>
                        </div>
                    </div>
                    <div className="h-7 w-full flex bg-slate-50 px-2">
                        <div className="flex w-2/4">
                            <div className="w-3/6 text-gray font-semibold">Activity Name </div>
                            <div className="w-3/6 text-gray font-semibold">subcatogry</div>
                            <div className="w-3/6 text-gray font-semibold">subcatogry2</div>
                        </div>
                        <div className="flex w-2/4 justify-end">
                            <div className="1/4 text-gray font-semibold">10</div>
                        </div>
                    </div>
                </div> */}
                <div className="h-full w-full">
                <div className="px-2  h-10 w-2/5 rounded-lg flex" style={{boxShadow:"3px 4px 10px rgba(0, 0, 0, 0.25)"}}>
                <div className=""></div>
                <input type="text"  placeholder="Search" className="h-full text-xl w-full focus:border-none"/>
                </div>
                <div className="h-full w-full grid grid-cols-1 xl:grid-cols-3 xl:my-4 my-10">
                    <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                            <div className="flex flex-col justify-center item-center">
                             <div className="text-2xl text-gray font-bold ">Staff name </div>
                             <div className="text-lg text-gray font-light">staffmail@kongu.edu</div>
                            </div>
                           <div className="">
                            <form action="" className="flex flex-col item-center justify-between my-6">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Nill</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
                            </div>
                            </form>
                            </div> 
                    </div>
                    <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                            <div className="flex flex-col justify-center item-center">
                             <div className="text-2xl text-gray font-bold ">Staff name </div>
                             <div className="text-lg text-gray font-light">staffmail@kongu.edu</div>
                            </div>
                           <div className="">
                            <form action="" className="flex flex-col item-center justify-between my-6">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Nill</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
                            </div>
                            </form>
                            </div> 
                    </div>
                    <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                            <div className="flex flex-col justify-center item-center">
                             <div className="text-2xl text-gray font-bold ">Staff name </div>
                             <div className="text-lg text-gray font-light">staffmail@kongu.edu</div>
                            </div>
                           <div className="">
                            <form action="" className="flex flex-col item-center justify-between my-6">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Nill</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
                            </div>
                            </form>
                            </div> 
                    </div>
                    <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                            <div className="flex flex-col justify-center item-center">
                             <div className="text-2xl text-gray font-bold ">Staff name </div>
                             <div className="text-lg text-gray font-light">staffmail@kongu.edu</div>
                            </div>
                           <div className="">
                            <form action="" className="flex flex-col item-center justify-between my-6">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Nill</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
                            </div>
                            </form>
                            </div> 
                    </div>
                    <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                            <div className="flex flex-col justify-center item-center">
                             <div className="text-2xl text-gray font-bold ">Staff name </div>
                             <div className="text-lg text-gray font-light">staffmail@kongu.edu</div>
                            </div>
                           <div className="">
                            <form action="" className="flex flex-col item-center justify-between my-6">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Nill</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
                            </div>
                            </form>
                            </div> 
                    </div>
                    <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                            <div className="flex flex-col justify-center item-center">
                             <div className="text-2xl text-gray font-bold ">Staff name </div>
                             <div className="text-lg text-gray font-light">staffmail@kongu.edu</div>
                            </div>
                           <div className="">
                            <form action="" className="flex flex-col item-center justify-between my-6">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Nill</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
                            </div>
                            </form>
                            </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home