import React from 'react'
import background from '../../assets/background.png'
function Image() { 
    const images=[
        {id:"21ADR044",img:background},
        {id:"21ADR044",img:background},
        {id:"21ADR044",img:background},
    ]
  return (
      <div className='h-full w-full' style={{width:"21cm",minHeight:"29.7cm",margin:"1cm auto",background:`url(${background})`, backgroundSize:"cover"}}>
      <div className="bg-white text-center">21ADR044</div>
      </div>
  )
}

export default Image