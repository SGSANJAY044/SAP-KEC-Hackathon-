import React from 'react'
import background from '../../assets/background.png'
function Login() {
  return (
    <div className="h-screen  w-100  flex items-center shrink-0 " style={{background:`url(${background})`, backgroundSize:"cover"}}>
        <div className="w-3/5 h-3/5 flex mx-auto bg-white rounded-2xl">
        <div className="w-2/4 h-full flex flex-col px-8 py-10">
          <div className="font-sans text-2xl font-bold text-[color:var(--gray)]">login</div>
          <div className="font-light">Students Activity Point</div>
          <form action="" className="flex flex-col h-32 my-4 justify-between">
          <input type="text" placeholder="login" className="w-full h-2/5 p-2 border-2 border-neutral-200 rounded-sm active:border-primarygreen"  required/>
          <input type="Passward" placeholder="passward" className="w-full h-2/5 p-2 border-2 border-neutral-200 rounded-sm"  required/>
          </form>
          <div className="flex">
            <input type="checkbox" className=''/>
            <div className='px-1'>Remember me</div></div>
          <div className="h-14 bg-[color:var(--primary-green)] rounded-md my-6 flex align center justify-center text-white font-semibold text-lg hover:border-2 hover:border-primarygreen hover:bg-white hover:text-primarygreen ">
            <button className="w-full">login</button>
          </div>
          <div className="text-center">new? <a className="text-blue">Register</a></div>
        </div>
        <div className="w-2/4 h-full">
        </div>
        </div>
    </div>
  )
}

export default Login