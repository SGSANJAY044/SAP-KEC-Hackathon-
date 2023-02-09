import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/demo_profile.png'
import Back from '../assets/profile_background.png'
function Profile() {
  return (
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
  )
}

export default Profile