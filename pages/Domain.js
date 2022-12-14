import React from 'react'
import Image from 'next/image'
import kotlin from '../components/images/kotlin.png'
import net from '../components/images/net.png'
import react from '../components/images/react.png'
import go from '../components/images/go.png'
import swift from '../components/images/swift.jpg'
import { useAuth } from '../context/AuthContext'


export default function Domain() {
    const { logout } = useAuth()


  return (
    <div className='flex flex-col h-screen'>
    <div className='sticky top-0 w-full left-0 bg-inherit bg-slate-600 flex items-center justify-between
     p-6'>
        <div></div>
        <div className='flex items-center gap-2'>
            <i className="fa-solid fa-door-open"></i>
            <div className="relative inline-block shrink-0">
                <b>Recruit</b>
                <span className="font-medium">Simply</span>
            </div>
        </div>
        <div>
            <button
                type="submit"
                onClick={() => {
                    logout()
                }} 
                className="px-4 py-1 bg-black text-white font-medium text-sm leading-snug rounded shadow-md">
                Logout
            </button>
        </div>
    </div>
    <div className='flex flex-grow items-center justify-center'>
    <div className='flex flex-col text-center justify-center align-middle'>
        <span className="font-bold text-lg p-10">Select your Domain</span>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center content-center">
            <div className='p-2.5 m-2.5 rounded-[10px] bg-slate-700 w-[200px] h-[250px]'>
                <div className='flex flex-col justify-center'>
                    <Image
                    className='rounded-[8px] bg-white w-[180px] h-[110px]'
                    src={kotlin}
                    />
                    <b className='pt-3'>Android Development</b>
                    <b className='pb-3 font-medium'>Full time</b>
                    <button
                        type="submit"
                        className=" inline-block px-7 py-3 bg-slate-700 border-solid border text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        select
                    </button>
                </div>
            </div> 
            <div className='p-2.5 m-2.5 rounded-[10px] bg-slate-700 w-[200px] h-[250px]'>
                <div className='flex flex-col justify-center'>
                    <Image
                    className='rounded-[8px] bg-white w-[180px] h-[110px]'
                    src={net}
                    />
                    <b className='pt-3'>.Net Development</b>
                    <b className='pb-3 font-medium'>Full time</b>
                    <button
                        type="submit"
                        className=" inline-block px-7 py-3 bg-slate-700 border-solid border text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        select
                    </button>
                </div>
            </div>
            <div className='p-2.5 m-2.5 rounded-[10px] bg-slate-700 w-[200px] h-[250px]'>
                <div className='flex flex-col justify-center'>
                <Image
                    className='rounded-[8px] bg-white w-[180px] h-[110px]'
                    src={react}
                    />
                    <b className='pt-3'>Frontend (react)</b>
                    <b className='pb-3 font-medium'>Full time</b>
                    <button
                        type="submit"
                        className=" inline-block px-7 py-3 bg-slate-700 border-solid border text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        select
                    </button>
                </div>
            </div>
            <div className='p-2.5 m-2.5 rounded-[10px] bg-slate-700 w-[200px] h-[250px]'>
                <div className='flex flex-col justify-center'>
                    <Image
                    className='rounded-[8px] bg-white w-[180px] h-[110px]'
                    src={go}
                    />
                    <b className='pt-3'>Backend (Go)</b>
                    <b className='pb-3 font-medium'>Full time</b>
                    <button
                        type="select"
                        className=" inline-block px-7 py-3 bg-slate-700 border-solid border text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        select
                    </button>
                </div>
            </div>
            <div className='p-2.5 m-2.5 rounded-[10px] bg-slate-700 w-[200px] h-[250px]'>
                <div className='flex flex-col justify-center'>
                <Image
                    className='rounded-[8px] bg-white w-[180px] h-[110px]'
                    src={swift}
                    />
                    <b className='pt-3'>iOS Development</b>
                    <b className='pb-3 font-medium'>Full time</b>
                    <button
                        type="submit"
                        className=" inline-block px-7 py-3 bg-slate-700 border-solid border text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        select
                    </button>
                </div>
            </div>
        </div>
        <div>
        <button
            type="submit"
            className=" w-auto inline-block mt-10 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Submit
        </button>
        </div>
        </div>
        </div>
    </div>
  )
}
