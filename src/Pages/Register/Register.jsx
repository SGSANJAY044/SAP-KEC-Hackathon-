import React from 'react'
import background from '../../assets/background.png'
function Register(){
    return(
        <div className="h-screen  w-100  flex items-center shrink-0 bg-contain" style={{background:`url(${background})`, backgroundSize:"cover"}}>
        <div className="w-3/5 h-3/5 flex flex-col mx-auto bg-white rounded-2xl">
        <div className="flex flex-col px-8 py-10 pb-4">
        <div className="font-sans text-3xl font-bold text-gray">Sign in</div>
          <div className="font-light">Students Activity Point</div>
        </div>
        <div className="flex w-full">
        <div className="w-2/4 h-full flex flex-col px-8 ">
          <form action="" className="flex flex-col h-40 my-4 justify-between">
          <input type="text" placeholder="Name" className="w-full h-2/12 p-2 border-2 border-neutral-200 rounded-sm  hover:border-gray-300 focus-visible:border-primarygreen "  required/>
          <input type="text" placeholder="Email" className="w-full h-2/12 p-2 border-2 border-neutral-200 rounded-sm  hover:border-gray-300"  required/>
          <input type="passward" placeholder="Passward" className="w-full h-2/12 p-2 border-neutral-200 border-2 rounded-sm  hover:border-gray-300"  required/>
          </form>
        </div>
        <div className="w-2/4 h-full flex flex-col px-8 ">
          <form action="" className="flex flex-col h-40 my-4 justify-between">
          <input type="text" placeholder="Roll no" className="w-full h-2/12 p-2  border-2 border-neutral-200 rounded-sm hover:border-gray-300"  required/>
          <div class="relative">
  <select class="block appearance-none h-2/12 w-full bg-white border-neutral-200 border-2 hover:border-gray-300 p-2 rounded-sm  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
    <option className="text-gray-300">Nil</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
  </div>
</div>
          <input type="text" placeholder="Confrim Passward" className="w-full h-2/12 p-2 border-2 border-neutral-200 rounded-sm hover:border-gray-300"  required/>
          </form>
        </div>
        </div>
        <div className="flex justify-end px-8">
            <div className="h-10 w-32 bg-[color:var(--primarygreen)] rounded-md my-6 flex align center justify-center text-white font-semibold text-lg hover:bg-white hover:border-primarygreen hover:text-primarygreen">
                <button>Sign in</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Register