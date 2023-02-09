import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../../Components/Nav'
import Wallet from '../../Components/Wallet'
import Students from '../../Components/StudentsRequest'
import StaffRequest from '../../Components/StaffRequest'
import HodRequest from '../../Components/HodRequest'
import AddSAP from '../../Components/AddSAP'
function Request() {
  return (
    <div className="flex h-screen w-full">
        {/* <Nav/> */}
        <div className="h-full w-full  p-10 pl-32">
            <div className="h-2/5 flex justify-center ">
                {/* <Wallet/> */}
            </div>
            <div className="h-3/5 p-10 pb-0">
                {/* <div className="h-full w-full flex flex-col">
                    <div className="w-full h-12 flex rounded-t-3xl mb-2 pt-3 pb-2 px-10 justify-between" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                        <div className="text-gray text-xl font-bold ">Documents</div>
                        <div className="h-full w-32 bg-gray text-white text-lg font-blod text-center  rounded-md flex justify-center items-center cursor-pointer">Add Event</div>
                    </div>
                    <div className="h-full w-full p-10 py-5 rounded-b-3xl " style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <div className="h-20 w-full flex">
                        <div className="flex w-full">
                            <div className="w-1/3 flex flex-col justify-center">
                                <div className="text-gray text-2xl font-bold">Staff Name</div>
                                <div className="">Class A</div>
                            </div>
                        </div>
                        <div className="flex w-2/5 justify-end">
                            <div className=" h-full w-full text-gray text-5xl font-semibold flex justify- items-center ">
                                <div className="bg-secondarygreen border-secondarygreen border-2 px-3 rounded-md flex justify-center items-center text-xl text-white font-bold p-1 mx-5 cursor-pointer">Accept</div>
                                <div className="border-secondarygreen border-2 box-content px-2 rounded-md flex justify-center items-center text-xl text-secondarygreen font-bold p-1 cursor-pointer">Decline</div>
                            </div>
                        </div>
                    </div>
    
                    <div className="h-20 w-full flex">
                        <div className="flex w-full">
                            <div className="w-1/3 flex flex-col justify-center">
                                <div className="text-gray text-2xl font-bold">Activity Name</div>
                                <div className="flex items-center ">
                                    <div className="">Paper Presentation</div>
                                    <div className="h-2 w-2 bg-blue rounded-full mx-1"></div>
                                    <div className="">Inside</div>
                                </div>
                            </div>
                            <div className="w-2/5 h-full flex justify-center flex-col ">
                                <div className="w-52 bg-lightgray h-3/5 flex items-center rounded-md">
                                    <img src={profile} alt="" className="h-4/5 w-10 rounded-lg m-2  " />
                                    <div className="text-xl text-gray font-semibold">Proof126.pdf</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-2/5 justify-end">
                            <div className=" h-full w-full text-gray text-5xl font-semibold flex justify- items-center ">
                                <div className="bg-secondarygreen border-secondarygreen border-2 px-3 rounded-md flex justify-center items-center text-xl text-white font-bold p-1 cursor-pointer mx-5">Accept</div>
                                <div className="border-secondarygreen border-2 box-content px-2 rounded-md flex justify-center items-center text-xl text-secondarygreen cursor-pointer font-bold p-1">Decline</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-20 w-full flex">
                        <div className="flex w-full">
                            <div className="w-1/3 flex flex-col justify-center">
                                <div className="text-gray text-2xl font-bold">Activity Name</div>
                                <div className="flex items-center ">
                                    <div className="">Paper Presentation</div>
                                    <div className="h-2 w-2 bg-blue rounded-full mx-1"></div>
                                    <div className="">Inside</div>
                                </div>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center">
                                <div className="text-gray text-2xl font-bold">status</div>
                                <div className="flex items-center">
                                    <div className="h-2 w-2 bg-yellow-500 rounded-full mx-1"></div>
                                    <div className="">Pending</div>
                                </div>
                            </div>
                            <div className="w-2/5 h-full flex justify-center flex-col ">
                                <div className="w-52 bg-lightgray h-3/5 flex items-center rounded-md">
                                    <img src={profile} alt="" className="h-4/5 w-10 rounded-lg m-2  " />
                                    <div className="text-xl text-gray font-semibold">Proof126.pdf</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10 justify-end">
                            <div className="1/5 h-full text-gray text-5xl font-semibold flex justify-center items-center">10</div>
                        </div>
                    </div>
                    <hr className='w-full h-1 mt-3 border-slate-400'/>
                    <div className="h-20 w-full flex">
                        <div className="flex w-full">
                            <div className="w-1/3 flex flex-col justify-center">
                                <div className="text-gray text-2xl font-bold">Activity Name</div>
                                <div className="flex items-center ">
                                    <div className="">Paper Presentation</div>
                                    <div className="h-2 w-2 bg-blue rounded-full mx-1"></div>
                                    <div className="">Inside</div>
                                </div>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center">
                                <div className="text-gray text-2xl font-bold">status</div>
                                <div className="flex items-center">
                                    <div className="h-2 w-2 bg-yellow-500 rounded-full mx-1"></div>
                                    <div className="">Pending</div>
                                </div>
                            </div>
                            <div className="w-2/5 h-full flex justify-center flex-col ">
                                <div className="w-52 bg-lightgray h-3/5 flex items-center rounded-md">
                                <img src={profile} alt="" className="h-4/5 w-10 rounded-lg m-2  " />
                                    <div className="text-xl font-semibold text-gray">Proof126.pdf</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-10 justify-end">
                            <div className="1/5 h-full text-gray text-5xl font-semibold flex justify-center items-center">10</div>
                        </div>
                    </div>
                    </div>
                   
                </div> */}
                {/* <Students/> */}
                {/* <StaffRequest/> */}
                {/* <HodRequest/> */}
            </div>
        </div>
        {/* <AddSAP/> */}
    </div>
  )
}

export default Request