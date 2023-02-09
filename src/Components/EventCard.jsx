import React from 'react'
import Img from '../assets/event.png'

function EventCard() {
  return (
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
  )
}

export default EventCard