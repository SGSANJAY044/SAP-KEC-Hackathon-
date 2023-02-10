import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/demo_profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
  return (
    <div className="xl:h-screen xl:w-20 w-screen h-20 fixed rounded-r-full" style={{borderTopRightRadius:"40px",borderBottomRightRadius:"40px",boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
            <div className="xl:h-2/4 xl:w-full h-full w-2/4 flex xl:flex-col flex-row">
                <div className="h-10 w-10 xl:h-20 xl:w-20"><img src={logo} alt="" /></div>
                <img src={profile} alt="" className="xl:h-12 xl:w-12 mx-3 p-5 xl:m-4 xl:p-0 rounded:xl xl:rounded-lg" />
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