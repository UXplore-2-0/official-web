import React from 'react'
import Sidebar from './Component/Sidebar'
import Notification from './Component/Notification'
import Card from './Component/Card'
import MemberDeatils from './Component/MemberDeatils'

function UserDashboard() {
    return (
        <div className='flex flex-row bg-[#284395] border rounded-lg border-r-slate-950 justify-between space-x-5  '>
            <div className='ml-0'>
                <Sidebar />
            </div>

            <div className='mt-3 border w-full mx-auto bg-[#081A51] rounded-lg mb-3'>
                <div className='mt-3 border w-2/4 my-2 mx-5  bg-[#284395] '>
                    <Card />
                </div>
                <div className='mt-3 border w-full  mx-auto bg-[#081A51] rounded-lg  flex flex-row'>
                    <div>
                        <div className='text-white font-bold text-4xl ml-3 my-custom-class'>
                            Member Deatils
                        </div>
                        <div className='mt-3 border w-2/4 my-2 mx-5  bg-[#284395] '>
                            <MemberDeatils />
                        </div>
                    </div>
                    <div>
                        <div className='text-white font-bold text-4xl ml-3 my-custom-class'>
                            Submission Deatils
                        </div>
                    </div>
                </div>

            </div>


            <div className='mr-3'>
                <Notification />
            </div>
        </div>
    )
}

export default UserDashboard