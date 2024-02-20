import React from 'react'

function Problem(prop) {
    return (
        <div className='mt-3'>
            <h1 className='font-bold text-white text-lg ml-4' style={{ fontSize: '50px' }}>Problem</h1>
            <div className='font-bold text-white text-lg mt-10'>


                {prop && prop.details}
            </div>
        </div>
    )
}

export default Problem