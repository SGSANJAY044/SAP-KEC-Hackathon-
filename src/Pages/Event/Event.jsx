import React, {useState} from "react";      
import Nav from "../../Components/Nav";
import Filter from "../../Components/Filter";
import EventCard from "../../Components/EventCard";
import AddEvent from "../../Components/AddEvent";
function Event(){
    return(
        <div className="flex h-screen w-full ">
           <Nav/>
        <div className="h-full w-full  p-10 pl-32 ">
            <Filter/>
            <div className="h-full w-full ">
            <EventCard/>
            <EventCard/>
            </div>
        </div>
        <AddEvent/>
        </div>
    )
}
export default Event