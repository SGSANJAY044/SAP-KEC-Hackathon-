import React from "react";
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import Img from '../../assets/event.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Event(){
    return(
        <div className="flex h-screen w-full ">
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
        <div className="h-full w-full  p-10 pl-32 ">
            <div className="w-full h-12 flex py-2">
                <div className="w-24 flex h-full justify-end rounded-lg" style={{boxShadow:"3px 4px 10px rgba(0, 0, 0, 0.25)"}}>
                    <div className="text-xl text-gray px-2 font-normal">Filter</div>
                </div>
                <div className="px-2 mx-5 h-full w-2/5 rounded-lg flex" style={{boxShadow:"3px 4px 10px rgba(0, 0, 0, 0.25)"}}>
                <div className=""></div>
                <input type="text"  placeholder="Search" className="h-full text-xl w-full focus:border-none"/>
                </div>
                <div className="bg-gray ml-auto px-2  rounded-md text-xl font-bold text-white">ADD EVENT</div>
            </div>
            <div className="h-80 w-full flex">
                <div className="w-1/3 h-full flex flex-col ">
                    <div className="w-full flex flex-col my-5">
                        <div className="text-gray text-2xl font-bold">Category</div>
                        <div className="w-full pt-2">
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>All</div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Inside</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Ouside</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="text-gray text-2xl font-bold">Payment</div>
                        <div className="w-full pt-2">
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>All</div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Free</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Paid</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-full flex flex-col ">
                    <div className="w-full flex flex-col my-5">
                        <div className="text-gray text-2xl font-bold">Eligibility</div>
                        <div className="w-full pt-2">
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>All</div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>I-year</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>II-year</div>
                            </div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>III-year</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>IV-year</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-full flex flex-col ">
                    <div className="w-full flex flex-col my-5">
                        <div className="text-gray text-2xl font-bold">Department</div>
                        <div className="w-full pt-2">
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CSE</div>
                            <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>IT</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>AI&DS</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>AI&ML</div>
                            </div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CIVIL</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>MECH</div>
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>EEE</div>
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>E&I</div>
                            </div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>FT</div>
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CSD</div>
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CHE</div>
                            <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>ECE</div>
                            </div>
                            <div className="flex">
                            <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>AU</div>
                            <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>MT</div>
                            <div className="text-white bg-blue  h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>V&D</div>
                            <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>ECE</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='w-full h-1 mt-3 border-slate-400'/>
            <div className="h-full w-full ">
            <div className="w-full h-72 rounded-3xl flex my-10"  style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                <div className="w-2/4 h-full p-5">
                <img src={Img} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="w-2/4 hull p-5 flex flex-col justify-center">
                    <div className="text-gray text-3xl font-bold">Hybrid Coding Streak</div>
                    <div className="text-blue text-xl font-blod">AI_CC</div>
                    <div className="text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem ipsum dolor sit amet istinctio quibusdam vitae rem molestias autem! Porro, neque. Voluptatem atque quibusdam quos? </div>
                    <div className="text-gray font-light my-2">23-02-2023</div>
                    <div className="text-center bg-gray w-40 flex items-center text-white text-2xl font-bold justify-center rounded-lg">VIEW INFO</div>
                </div>
            </div>
            <div className="w-full h-72 rounded-3xl flex my-10"  style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                <div className="w-2/4 h-full p-5">
                <img src={Img} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="w-2/4 hull p-5 flex flex-col justify-center">
                    <div className="text-gray text-3xl font-bold">Hybrid Coding Streak</div>
                    <div className="text-blue text-xl font-blod">AI_CC</div>
                    <div className="text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem ipsum dolor sit amet istinctio quibusdam vitae rem molestias autem! Porro, neque. Voluptatem atque quibusdam quos? </div>
                    <div className="text-gray font-light my-2">23-02-2023</div>
                    <div className="text-center bg-gray w-40 flex items-center text-white text-2xl font-bold justify-center rounded-lg">VIEW INFO</div>
                </div>
            </div>
            </div>
        </div>
        {/* <div className="fixed h-full w-full flex justify-center items-center">
        <div className=" w-4/6  h-4/5 bg-white rounded-xl p-10" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
            <div className="flex justify-between ">
                <div className="text-3xl text-gray font-medium">Event</div>
                <div className="flex">
                <div className="bg-gray mx-5 ml-auto px-2 flex items-center justify-center py-0.5 rounded-md text-xl font-bold text-white text-center flex">
                    <div className="">Date</div>
                </div>
                <div className="bg-blue ml-auto px-2  py-0.5 flex items-center justify-center rounded-md text-xl font-bold text-white text-center">Upload image</div>
                </div>
            </div>
            <div className="my-5 flex flex-col">
            <form action="" className="flex  my-4 justify-between">
          <input type="text" placeholder="Event Name" className="w-full h-2/12 p-2 mr-16 text-lg border-2 px-5  bg-lightgray border-none rounded-md  hover:border-gray-300 focus-visible:border-primarygreen "  required/>
          <input type="text" placeholder="Venue" className="w-full h-2/12 p-2 text-lg border-2 bg-lightgray px-5 border-none rounded-md  hover:border-gray-300"  required/>
          </form>
          <form action="" className="flex  my-4 justify-between">
          <div class="relative">
  <select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option>Category</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
          </div>
          <div class="relative">
  <select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option className="text-gray-300">Category</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
          </div>
          <div class="relative">
  <select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option className="text-gray-300">Category</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
          </div>
          <div class="relative">
  <select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option className="text-gray-300">Category</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
          </div>
          </form>
          <form action="" className="flex  my-4 justify-between">
          <textarea type="text" placeholder="Event Name" className="w-full h-40 p-2  text-lg border-2 px-5  bg-lightgray border-none rounded-md  hover:border-gray-300 focus-visible:border-primarygreen "  required/>
          </form>
            </div>
            <div className="flex justify-end items-center">
                <div className="px-10 bg-primarygreen rounded-lg py-1 text-white text-xl font-bold">Submit</div>
            </div>
        </div>
        </div> */}
        </div>
    )
}
export default Event