import React from "react";
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import Img from '../../assets/event.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "../../Components/Nav";
import Filter from "../../Components/Filter";
import EventCard from "../../Components/EventCard";
import AddEvent from "../../Components/AddEvent";
function Event(){
    return(
        <div className="flex h-screen w-full ">
           {/* <Nav/> */}
        <div className="h-full w-full  p-10 pl-32 ">
            {/* <Filter/> */}
            <div className="h-full w-full ">
            {/* <EventCard/> */}
            </div>
        </div>
        {/* <AddEvent/> */}
        </div>
    )
}
export default Event