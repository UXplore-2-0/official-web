import React from 'react';

function MemberDeatils() {
    const MemberDeatls = [
        {
            name: 'John Doe',
            email: 'johndoe@example.com',

        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',

        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',

        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',

        }
    ];

    return (
        <div className='w-full h-full'>
            <div className='text-white font-bold' style={{ fontSize: '50px' }}>Member Details</div>
            <div className='grid grid-cols-2 gap-x-50 h-fix text-white font-bold'>
                <div>
                    Name
                </div>
                <div>
                    Email
                </div>

            </div>

            {MemberDeatls.map((member, index) => (
                <div key={index} className='grid grid-cols-2 justify h-6 gap-x-50 text-white'>
                    <div>
                        {member.name}
                    </div>
                    <div>
                        {member.email}
                    </div>
                    <div>
                        {member.phone}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MemberDeatils;
