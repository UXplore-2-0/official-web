import React from 'react'
import Tim from './Tim'
function Timer() {
    return (
        <div className='w-60 mr-3 h-80 bg-[#081A51] rounded-lg p-4 gap-4 flex flex-col text-sm mt-5 '>
            <div className='text-white font-bold ' style={{ fontSize: '50px' }}>
                Timer

            </div>
            <Tim />
        </div>
    )
}

export default Timer