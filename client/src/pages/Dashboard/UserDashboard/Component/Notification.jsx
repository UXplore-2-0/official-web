import React from 'react'

function Notification() {
    const UpdatesData = [
        {
            img: 'dummy-img1.jpg',
            name: 'John Doe',
            noti: 'Lorem ipsum dolor sit amet',
            time: '10:00 AM'
        },
        {
            img: 'dummy-img2.jpg',
            name: 'Jane Smith',
            noti: 'Consectetur adipiscing elit',
            time: '11:30 AM'
        }
    ]

    return (
        <div className="w-60 mr-0 h-2/4 bg-[#081A51] rounded-lg p-4 gap-4 flex flex-col text-sm mt-3 mb-3">
            <h1 className="text-white font-bold text-lg border-sky-500">Notification</h1>
            {UpdatesData.map((update, index) => (
                <div className="update" key={index}>

                    <div className="noti">
                        <div className="mb-2">
                            <span className="font-bold from-neutral-50 text-white">{update.name}</span>
                            <span className='font-thin text-white'>{update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Notification