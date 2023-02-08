import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Request() {
  return (
    <div className="flex h-screen w-full">
        <div className="h-screen w-20   rounded-r-full" style={{borderTopRightRadius:"40px",borderBottomRightRadius:"40px",boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
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
        <div className="h-full w-full  p-10">
            <div className="h-2/5 flex justify-center ">
                <div className="h-full w-2/5  mx-10 rounded-3xl flex flex-col justify-end p-10 relative" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                    {/* <div className="absolute  w-20 h-20  rounded-tl-lg bg-gray top-0 left-0 "></div>
                    <div className="absolute  w-32 h-32 rounded-br-full rounded-l-lg bg-gray top-1 left-1 "></div> */}
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
                </div>
            </div>
            <div className="h-3/5 p-10 pb-0">
                <div className="h-full w-full flex flex-col">
                    <div className="w-full h-12 flex rounded-t-3xl mb-2 pt-3 pb-2 px-10 justify-between" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                        <div className="text-gray text-xl font-bold ">Documents</div>
                        <div className="h-full w-32 bg-gray text-white text-lg font-blod text-center  rounded-md flex justify-center items-center">Add Event</div>
                    </div>
                    <div className="h-full w-full p-10 py-5 rounded-b-3xl " style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
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
                            <div className=" h-full w-full text-gray text-5xl font-semibold flex justify-end items-center ">
                                <div className="bg-secondarygreen border-secondarygreen border-2 px-3 rounded-md flex justify-center items-center text-xl text-white font-bold p-1 mx-5">Accept</div>
                                <div className="border-secondarygreen border-2 box-content px-2 rounded-md flex justify-center items-center text-xl text-secondarygreen font-bold p-1">Decline</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="h-20 w-full flex">
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
                    </div> */}
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Request