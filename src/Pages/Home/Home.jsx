import React, {useEffect, useState} from 'react'
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

import { useSelector } from "react-redux";
import * as api from '../../api';
import {useParams} from 'react-router-dom'
import axios from 'axios'


function Home() {
  var {id}=useParams();
  const [user,setUser] = useState(null);

  useEffect(()=>{
    api.Profile(id).then((resp)=>{setUser(resp.data)});
  },[])

  console.log(user)

  return (
    <div className="flex h-screen w-full">
        <Nav/>
        <div className="h-full w-full  p-5 pl-20 lg:p-10 lg:pl-32">
            <div className="h-2/4 flex ">
                <Wallet/>
                <Profile Name={user.user_name} Dept={user.department} Rollno={user.rollno} ClassName={user.classname}/>
            </div>
            <div className="h-2/4 p-10 pb-0">
                <ActivityHistory/>
            </div>
        </div>
    </div>
  )
}

export default Home
