import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import Back from '../../assets/profile_background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <div className="flex h-screen w-full">
        <div className="h-screen w-20   rounded-r-full" style={{borderTopRightRadius:"40px",borderBottomRightRadius:"40px",boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
            <div className="h-2/4 w-full flex flex-col">
                <img src="" alt="" />
                <div className=""><img src={logo} alt="" /></div>
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
            <div className="h-2/4 flex ">
                <div className="h-full w-2/5  mx-10 rounded-3xl flex flex-col justify-end p-10" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
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
                <div className="h-full w-3/5  mx-10 rounded-3xl flex" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
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
                <div className="h-full w-full p-10 py-5 rounded-3xl" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home