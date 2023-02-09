import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/demo_profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
  return (
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
  )
}

export default Nav