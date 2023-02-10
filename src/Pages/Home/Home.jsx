import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import Back from '../../assets/profile_background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.css'
import Profile from '../../Components/Profile'
import Wallet from '../../Components/Wallet'
import HOD_link from '../../Components/HOD_link'
import ActivityHistory from '../../Components/ActivityHistory'
import Nav from '../../Components/Nav'
function Home() {
  return (
    <div className="flex h-screen w-full">
        <Nav/>
        <div className="h-full w-full  p-5 pl-20 lg:p-10 lg:pl-32">
            <div className="h-2/4 flex ">
                <Wallet/>
                <Profile/>
            </div>
            <div className="h-2/4 p-10 pb-0">
                <ActivityHistory/>
                <HOD_link/>
            </div>
        </div>
    </div>
  )
}

export default Home
