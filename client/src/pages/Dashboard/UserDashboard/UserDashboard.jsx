import React from 'react'
import Sidebar from './Component/Sidebar'
import Notification from './Component/Notification'
import Card from './Component/Card'
import MemberDeatils from './Component/MemberDeatils'
import Problem from './Component/Problem'
import Timer from './Component/Timer'
import Submission from './Component/Submission'

function UserDashboard() {
    return (
        <div className='flex flex-row bg-[#284395] border rounded-lg border-r-slate-950 justify-between space-x-5  '>


            {/* sidebar */}
            <div className='ml-0'>
                <Sidebar />
            </div>

            {/* Middle Content */}

            <div className='border  w-full mt-3 mb-3 rounded bg-[#081A51] '>

                <div className='flex flex-row border w-full mt-3 mb-3 h-2/4'>
                    <div className=' mx-3 flex w-2/4'>
                        <Problem details='Coming Soon ' />


                    </div>

                    <div className='border w-2/4 ml-2'>
                        <Submission />

                    </div>
                </div>

                <div className='border w-2/4 mt-7 mb-3 h-72 mx-3'>
                    <MemberDeatils />
                </div>






            </div>



            {/* Notification bar */}

            <div className='mr-3'>
                <Notification />
                <Timer />

            </div>



        </div>
    )
}

export default UserDashboard