import React,{  useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const { login, currentUser } = useAuth()
    console.log(currentUser)

    async function submitHandler(){
        if(!email || !password){
            return
        }
        else{
            try {
                await login(email, password)
            } catch (err) {
                console.log('incorrect username & password')
            }
            return 
        }
    }

    return (
        <div className='flex flex-col h-screen'>
        <div className='sticky top-0 w-full left-0 bg-inherit bg-slate-600 flex items-center justify-center p-6'>
            <div className='flex items-center gap-2'>
                <i className="fa-solid fa-door-open"></i>
                <div className="relative inline-block shrink-0">
                    <b>Recruit</b>
                    <span className="font-medium">Simply</span>
                </div>
            </div>
        </div>
        <div className='flex flex-grow items-center justify-center'>
            <div className="rounded-[24px] bg-white w-[400px] h-[400px]">
                <div className="pt-6 pl-10 pr-10 grid grid-cols-2 w-100 text-black text-center">
                    <div className='border-solid border-2 border-white border-b-black'><span className="font-bold">Login</span></div>
                    <div className='border-solid border-2 border-white border-b-slate-300'><span className="font-bold"><Link href="/Signup">Signup</Link></span></div>
                </div>
                <div className="pt-12 pl-10 pr-10 text-black text-center">
                    <div className="pl-1 relative inline-block">
                        <b>Login to the</b>
                        <span className="pl-1 text-blue-700 font-bold">Portal</span>
                    </div>
                <div className="mt-6">
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                    placeholder="Email address"
                    required
                    />
                </div>
                <div className="mt-6 flex">
                    <input
                    type={showPassword?'text':'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    required
                    />
                    <span
                    onClick={()=>setShowPassword(!showPassword)}
                    className="inline-block align-text-bottom bg-gray-300 hover:bg-gray-400 rounded-r-lg px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer" htmlFor="toggle">{showPassword?<i className="fa-solid fa-eye pt-2"></i>:<i className="fa-solid fa-eye-slash pt-2"></i>}</span>
                </div>
                <div className="mt-6 text-center w-100">
                    <button
                    type="submit"
                    onClick={submitHandler}
                    className=" inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                    Login
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
      );
}
  