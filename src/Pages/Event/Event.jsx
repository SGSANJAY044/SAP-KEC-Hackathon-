import React, {useState} from "react";      
import Nav from "../../Components/Nav";
import Filter from "../../Components/Filter";
import EventCard from "../../Components/EventCard";
import AddEvent from "../../Components/AddEvent";
function Event(){
    const [Sap,setSap]=useState("")
    const [display,setdisplay]=useState("none")
    return(
        <div className="flex h-screen w-full ">
           <Nav className={Sap}/>
        <div className="h-full w-full  p-10  px-20 pl-40 ">
            <Filter status={Sap} func1={setSap} func2={setdisplay}/>
            <div className="h-full w-full ">
            <EventCard />
            <EventCard/>
            </div>
        </div>
        {/* <AddEvent/> */}
        </div>
    )
}
export default Event